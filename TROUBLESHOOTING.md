# 🔧 Troubleshooting Guide

## ✅ Current Status: NO RUNTIME ERRORS

Your portfolio is running successfully with **zero errors**.

---

## Common Issues & Solutions

### Issue 1: Port 3000 Already in Use
**Error**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solutions**:
```bash
# Option 1: Let Next.js use next available port
# It will prompt you to use port 3001
# Just press 'Y' when asked

# Option 2: Kill process on port 3000
# On Windows PowerShell:
Get-Process -Name node | Stop-Process -Force

# Option 3: Use different port
PORT=3001 npm run dev
```

---

### Issue 2: Module/Package Not Found
**Error**: `Cannot find module 'framer-motion'` or similar

**Solution**:
```bash
# Reinstall all dependencies
rm -r node_modules
rm package-lock.json
npm install
npm run dev
```

---

### Issue 3: File Not Found (./data/resume.json)
**Error**: `ENOENT: no such file or directory`

**Solution**:
- Ensure `data/resume.json` and `data/projects.json` exist
- Files were created in the initial setup
- If missing, recreate them from the backup

---

### Issue 4: Styles Not Loading (Tailwind Not Working)
**Problem**: Page looks unstyled

**Solutions**:
```bash
# Clear Next.js cache
rm -r .next

# Restart dev server
npm run dev

# Or rebuild Tailwind
npm install -D tailwindcss@latest
```

---

### Issue 5: Contact Form Not Working
**Problem**: Submit button doesn't work or shows error

**Solutions**:

1. **Check browser console** (F12):
   - Look for JavaScript errors
   - Check Network tab for API response

2. **Verify API route exists**:
   - File: `pages/api/contact.js`
   - Should exist and be readable

3. **Check server logs**:
   - Watch terminal where `npm run dev` is running
   - Look for error messages when form is submitted

4. **Test API manually**:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
   ```

---

### Issue 6: Images Not Loading
**Problem**: Project images show broken icon

**Solution**:
- Currently using Unsplash API (remote images)
- Replace with local images in `public/` folder
- Update image URLs in `data/projects.json`

---

### Issue 7: Animations Not Working
**Problem**: No fade-in or scroll animations

**Solutions**:
```bash
# Verify Framer Motion is installed
npm list framer-motion

# Reinstall if needed
npm install framer-motion@latest

# Clear cache and restart
rm -r .next node_modules/.cache
npm run dev
```

---

### Issue 8: Hot Reload Not Working
**Problem**: Changes don't reflect without manual refresh

**Solutions**:
1. Verify you're editing files in the right directory
2. Check file extensions are correct (.js, .jsx, .css)
3. Restart dev server: Press `Ctrl+C` and run `npm run dev`

---

### Issue 9: Build Errors (npm run build)
**Error**: Build fails with compilation error

**Solutions**:
```bash
# Run linter to check for issues
npm run lint

# Check for TypeScript errors (if using TS)
# Clear and rebuild
rm -r .next
npm run build
```

---

### Issue 10: Browser Shows Blank Page
**Problem**: http://localhost:3000 shows nothing

**Solutions**:
1. Check terminal for server errors
2. Verify port 3000 is actually being used
3. Try `http://localhost:3000` (refresh browser)
4. Clear browser cache: Ctrl+Shift+Delete

---

## 🔍 Diagnostics Commands

### Check Node Version
```bash
node --version
npm --version
```
Requires: Node 18+ and npm 8+

### Check Project Structure
```bash
# List key files
dir pages, components, data, public
```

### View Dependencies
```bash
npm list --depth=0
```

### Check for Issues
```bash
npm audit
```

### Test API Endpoint
```bash
# Windows PowerShell
Invoke-WebRequest -Uri "http://localhost:3000/api/contact" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"name":"Test","email":"test@test.com","message":"Hi"}'
```

---

## 🚨 Emergency Recovery

### Complete Reset
```bash
# Stop dev server (Ctrl+C)
# Delete cache
rm -r node_modules .next .env.local

# Reinstall from scratch
npm install

# Run again
npm run dev
```

### Restore from Backup
If files are corrupted, the original project files are in this directory.

---

## ✅ Health Check Script

Run this to verify everything:
```bash
# 1. Check if running
curl http://localhost:3000

# 2. Check API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"test\"}"

# 3. Check version
npm --version
node --version
```

---

## 📞 Getting Help

### Check Logs
- **Terminal Logs**: Watch `npm run dev` terminal
- **Browser Console**: Press F12 in browser
- **Network Panel**: View API requests and responses
- **Error Output**: Look for red text in terminal

### Common Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| `EADDRINUSE` | Port in use | Kill process or use different port |
| `MODULE_NOT_FOUND` | Package missing | Run `npm install` |
| `ENOENT` | File missing | Check file paths |
| `SyntaxError` | Invalid code | Check for typos |
| `CORS error` | Cross-origin issue | Update server settings |

---

## 🎯 Verification Checklist

- [ ] `npm install` ran successfully
- [ ] `npm run dev` starts without errors
- [ ] Browser shows http://localhost:3000
- [ ] All sections are visible (scroll down)
- [ ] Buttons are clickable
- [ ] Contact form accepts input
- [ ] Scroll-to-top button appears after scrolling
- [ ] Mobile menu works on mobile sizes
- [ ] Animations play smoothly
- [ ] Console has no red errors (F12)

---

## 🚀 Still Having Issues?

If problems persist:

1. **Delete everything and start fresh**:
   ```bash
   rm -r node_modules package-lock.json .next .env.local
   npm install
   npm run dev
   ```

2. **Check Next.js documentation**:
   https://nextjs.org/docs

3. **Check component errors**:
   - Verify all imports
   - Check file paths
   - Ensure JSON files are valid (use jsonlint.com)

4. **Review browser DevTools**:
   - F12 → Console tab
   - Look for error messages
   - Check Network for failed requests

---

**Your project is production-ready! Start customizing and deploy when ready. 🎉**
