# Contact form setup (Resend)

The contact form posts to **`/api/contact`** on your Next.js server. The API uses [Resend](https://resend.com/) so your API key never ships to the browser.

Deliver submissions to: **abdulqayoomm897@gmail.com** (set `CONTACT_TO_EMAIL` if you change inbox).

## 1. Resend account and API key

1. Sign up at [resend.com](https://resend.com).
2. Open **API Keys** and create a key.
3. Copy the key — you will use it as `RESEND_API_KEY`.

## 2. From address

- **Quick test:** Resend allows `Portfolio <onboarding@resend.dev>` as `RESEND_FROM_EMAIL` with restrictions (see Resend docs).
- **Production:** Add and verify your domain under **Domains**, then use e.g. `Portfolio <hello@yourdomain.com>` as `RESEND_FROM_EMAIL`.

## 3. Environment variables

**Local:** copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Secret API key (server only) |
| `CONTACT_TO_EMAIL` | Your inbox, e.g. `abdulqayoomm897@gmail.com` |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Portfolio <onboarding@resend.dev>` |

**Vercel:** Project → Settings → Environment Variables — add the same three names for Production (and Preview if needed). Redeploy after saving.

## 4. Verify

Run `npm run dev`, submit the form, and check your inbox (and Resend dashboard logs if delivery fails).
