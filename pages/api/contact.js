import { Resend } from 'resend';

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  const trimmedName = typeof name === 'string' ? name.trim().slice(0, 200) : '';
  const trimmedEmail = typeof email === 'string' ? email.trim().slice(0, 320) : '';
  const trimmedMessage = typeof message === 'string' ? message.trim().slice(0, 10000) : '';

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ ok: false, error: 'Please fill in all fields.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return res.status(503).json({ ok: false, error: 'Email service is not configured.' });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      html: `<p><strong>From:</strong> ${escapeHtml(trimmedName)} &lt;${escapeHtml(trimmedEmail)}&gt;</p><p><strong>Message:</strong></p><p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br/>')}</p>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ ok: false, error: 'Could not send your message. Try again later.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(502).json({ ok: false, error: 'Could not send your message. Try again later.' });
  }
}
