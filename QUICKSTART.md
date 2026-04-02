# 🚀 Quick Start Guide

## ✅ Project Status: READY TO RUN

Your portfolio website is fully functional and running! 

## 📍 Access Your Portfolio

### Development Server is Running at:
```
http://localhost:3000
```

**Open your browser and visit the link above to see your live portfolio!**

## 🎮 Available Commands

### Start Development Server
```bash
npm run dev
```
- Runs on `http://localhost:3000`
- Auto-reloads on file changes
- Open browser to view

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Run `npm start` after building

### Start Production Server
```bash
npm start
```
- Runs the production build
- Access at `http://localhost:3000`

### Run Linting
```bash
npm run lint
```
- Checks code quality
- Uses ESLint

## 📁 Project Structure

```
portfolio/
├── components/          # All React components
├── pages/              # Next.js pages & API routes
├── data/               # JSON data (resume, projects)
├── styles/             # Global CSS with Tailwind
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🔧 Troubleshooting

### Port 3000 Already in Use?
If port 3000 is busy, Next.js will prompt for an alternative port.

### Clear Cache & Reinstall
```bash
# Remove node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install

# Run again
npm run dev
```

### Module Not Found Errors?
Run:
```bash
npm install
```

## 📝 Customizing Your Portfolio

### Update Your Information
Edit these files:
- **[data/resume.json](data/resume.json)** - Your bio, education, skills
- **[data/projects.json](data/projects.json)** - Your projects

### Change Colors
Edit **tailwind.config.js** theme section

### Modify Sections
Each component in **components/** is independent and reusable

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Netlify, AWS Amplify, Firebase, GitHub Pages

## 📧 Email Setup (Optional)

To enable contact form email:
1. Install Nodemailer: `npm install nodemailer`
2. Create `.env.local` file
3. Add email credentials
4. Update `pages/api/contact.js`

## ✨ Features Included

✅ Smooth scroll navigation
✅ Animated sections with Framer Motion
✅ Responsive design (mobile-first)
✅ Working contact form
✅ Dynamic data from JSON
✅ Modern dark theme
✅ Gradient text & effects
✅ Scroll-to-top button

## 🎯 Next Steps

1. **Visit**: http://localhost:3000
2. **Test**: Navigate through all sections
3. **Customize**: Update data/resume.json with your info
4. **Deploy**: Push to GitHub, deploy to Vercel

---

**Your portfolio is production-ready! 🎉**
