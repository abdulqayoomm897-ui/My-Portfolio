import { useState } from 'react';
import { motion } from 'framer-motion';
import Toast from './Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [toast, setToast] = useState({ message: '', type: 'success', isVisible: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        showToast(data.error || 'Something went wrong. Please try again.', 'error');
        return;
      }

      showToast('Message sent successfully. I will get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Contact error:', error);
      showToast('Could not send your message. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p className="text-gray-400 mb-2">Email</p>
              <p className="text-emerald-400 font-bold">abdulqayoomm897@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <p className="text-gray-400 mb-2">Location</p>
              <p className="text-emerald-400 font-bold">Hyderabad, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 transition"
            />
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-black font-bold py-3 rounded-lg transition transform hover:scale-105 active:scale-95"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </motion.div>
      </div>
      
      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.isVisible}
      />
    </section>
  );
}
