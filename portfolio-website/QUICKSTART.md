# Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Gmail account with 2FA enabled (for email functionality)

---

## Option 1: Local Development (Easiest)

### Step 1: Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
# Leave .env.local as-is for now
npm run dev
```
✅ Frontend ready at http://localhost:3000

### Step 2: Setup Backend (Optional for now)
```bash
cd ../backend
npm install
cp .env.example .env.local
```

**To enable email (optional):**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find "App passwords" → Mail, Windows Computer → Copy password
3. Edit `.env.local`:
```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=paste_16_char_password_here
RECIPIENT_EMAIL=where_to_receive_emails@gmail.com
```

4. Start backend:
```bash
npm run dev
```
✅ Backend ready at http://localhost:5000

---

## Option 2: Docker (One Command!)

```bash
# Copy environment file
cp backend/.env.example backend/.env.local
# Edit backend/.env.local with your email settings

# Run everything
docker-compose up --build
```

Both services start automatically:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## Step 3: Customize Your Portfolio

### Add Your Information
Edit `frontend/utils/constants.ts`:
```typescript
// Update your social links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  email: "your@email.com",
};

// Update experience
export const EXPERIENCE = [
  {
    company: "Your Company",
    position: "Your Title",
    // ... add your experience
  },
];

// Add your projects
export const PROJECTS = [
  {
    title: "Your Project",
    description: "What it does",
    tech: ["React", "Node.js"],
    // ...
  },
];
```

### Customize Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  accent: '#ff006e',        // Change primary color
  accentAlt: '#00f5ff',     // Change secondary color
  // ...
}
```

### Update Site Info
Edit `frontend/utils/constants.ts`:
```typescript
export const SITE_NAME = "Your Name";
export const SITE_DESCRIPTION = "Your tagline";
```

---

## Step 4: Deploy

### Deploy Frontend (Vercel - 2 minutes)
```bash
npm install -g vercel
cd frontend
vercel
```
✅ Your site is live!

### Deploy Backend (Railway - 3 minutes)
1. Go to [Railway.app](https://railway.app)
2. Create new project
3. Connect your GitHub repo
4. Add environment variables from `.env.local`
5. Deploy!

---

## 🔍 Check Everything Works

### Frontend
- [ ] Homepage loads at http://localhost:3000
- [ ] All sections scroll smoothly
- [ ] Mobile view looks good
- [ ] Links work

### Backend
- [ ] Health check: `curl http://localhost:5000/health`
- [ ] Try contact form - you should receive emails
- [ ] Check console for any errors

### SEO
- [ ] Open http://localhost:3000/sitemap.xml
- [ ] Open http://localhost:3000/robots.txt
- [ ] Check meta tags in page source

---

## 📚 Next Steps

1. **Set Google Analytics**
   - Create property at analytics.google.com
   - Get Measurement ID
   - Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXX`

2. **Add Blog (Optional)**
   - Create `/frontend/pages/blog/[slug].tsx`
   - Use MDX for content

3. **Custom Domain**
   - Buy domain
   - Point to Vercel (frontend) and Railway (backend)
   - Update `NEXT_PUBLIC_SITE_URL`

4. **Email Templates**
   - Customize in `backend/src/index.js`
   - Use HTML for better formatting

---

## ❓ Troubleshooting

### Port Already in Use
```bash
# Find and kill process
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Email Not Working
- Verify Gmail App Password (not regular password)
- Check 2FA is enabled on Gmail
- Verify email addresses in `.env.local`

### Build Errors
```bash
# Clean and reinstall
rm -rf node_modules .next
npm install
npm run build
```

---

## 📞 Need Help?

- Check [Main README](./README.md) for detailed docs
- Check [Frontend README](./frontend/README.md)
- Check [Backend README](./backend/README.md)

---

**That's it! Your portfolio is ready. Start customizing! 🎉**
