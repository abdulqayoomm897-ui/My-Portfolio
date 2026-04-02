# AI-Powered Modern Portfolio Website

A fully functional, modern, and animated portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

✅ **Fully Responsive Design** - Mobile, tablet, and desktop compatibility
✅ **Smooth Animations** - Framer Motion for page transitions and interactions
✅ **Dynamic Content** - Data fetched from JSON files
✅ **Contact Form** - Integrated backend API for form submissions
✅ **Modern UI** - Dark theme with gradient accents and glassmorphism
✅ **Optimized Performance** - Next.js optimization and lazy loading
✅ **SEO Ready** - Meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 18 + Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Next.js API Routes
- **Deployment**: Ready for Vercel

## 📋 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── ScrollToTop.jsx
│   └── Footer.jsx
├── pages/              # Next.js pages and API routes
│   ├── index.js        # Home page
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document wrapper
│   └── api/
│       └── contact.js  # Contact form API
├── data/               # Static JSON data
│   ├── resume.json
│   └── projects.json
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static files
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Sections

1. **Navbar** - Sticky navigation with smooth scrolling
2. **Hero** - Animated introduction with CTA buttons
3. **About** - Education and background information
4. **Skills** - Programming, AI/ML, and tools with progress bars
5. **Projects** - Showcase of AI/ML projects with tech stack
6. **Services** - AI Solutions, Mobile Development, Data Analysis
7. **Contact** - Form with backend integration

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Steps

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:3000
```

4. **Build for production**
```bash
npm run build
npm start
```

## 🔧 Configuration

### Update Your Information
Edit `data/resume.json` and `data/projects.json` with your information.

### Environment Variables (Optional)
Create `.env.local` for email service integration:
```
NEXT_PUBLIC_EMAIL_SERVICE=your_service
NEXT_PUBLIC_EMAIL_KEY=your_key
```

## 📧 Contact Form Integration

The contact form is ready for email integration. Update `pages/api/contact.js` with:
- **Nodemailer** for email service
- **SendGrid** API
- **Resend** service
- Or any email provider

Example with Nodemailer:
```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email in handler...
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change primary colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  }
}
```

### Sections
Each section is a separate component in `components/` directory - easy to customize or reorder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Push to GitHub and use Amplify console
- **Firebase Hosting**: Deploy with Firebase CLI

## 📈 Future Enhancements

- 📝 Blog system with CMS
- 📥 Resume download functionality
- 🔗 GitHub API integration
- 🤖 AI chatbot (LLaMA-based)
- 🛠️ Admin panel
- 🗄️ Database integration (MongoDB)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abdul Qayoom Mangi**
- Email: abdulqayoomm897@gmail.com
- Location: Hyderabad, Pakistan

---

**Happy Coding! 🎉**
