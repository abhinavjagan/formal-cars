# Deployment Guide

Complete instructions for deploying your portfolio to production.

## 🌐 Frontend Deployment (Vercel)

Vercel is the official Next.js hosting platform - free, fast, and automatic.

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "Next.js" as framework
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL` = your-domain.com
   - Add: `NEXT_PUBLIC_GA_ID` = your analytics ID (optional)
   - Redeploy if needed

✅ Your site is now live!

### Option 2: CLI Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
cd frontend
vercel
# Follow prompts to connect Vercel account
```

### Custom Domain on Vercel

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel shows you how)
4. Wait for DNS propagation (5-48 hours)
5. Update `NEXT_PUBLIC_SITE_URL` environment variable

---

## 🔧 Backend Deployment

### Option A: Railway (Recommended - Easiest)

1. **Go to [railway.app](https://railway.app)**

2. **Create New Project**
   - Click "New Project"
   - Select "GitHub Repo"
   - Authenticate and select your repo

3. **Configure**
   - Railway auto-detects Node.js
   - Add Environment Variables:
     - PORT = 5000
     - NODE_ENV = production
     - FRONTEND_URL = your-vercel-domain.com
     - EMAIL_USER = your_email@gmail.com
     - EMAIL_PASSWORD = your_app_password
     - RECIPIENT_EMAIL = your_email@gmail.com

4. **Deploy**
   - Click "Deploy" - it's automatic!
   - Get your domain from Railway dashboard

5. **Auto-Deploy on Push**
   - Every push to main redeploys automatically

### Option B: Heroku

1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from heroku.com/windows
   ```

2. **Login & Create App**
   ```bash
   heroku login
   cd backend
   heroku create your-portfolio-backend
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set PORT=5000
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=your-vercel-domain.com
   heroku config:set EMAIL_USER=your_email@gmail.com
   heroku config:set EMAIL_PASSWORD=your_app_password
   heroku config:set RECIPIENT_EMAIL=your_email@gmail.com
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **View Logs**
   ```bash
   heroku logs --tail
   ```

### Option C: Docker on Any Server

1. **Build Images**
   ```bash
   docker build -t portfolio-frontend:latest ./frontend
   docker build -t portfolio-backend:latest ./backend
   ```

2. **Push to Docker Hub**
   ```bash
   docker tag portfolio-frontend:latest your-username/portfolio-frontend:latest
   docker tag portfolio-backend:latest your-username/portfolio-backend:latest
   
   docker login
   docker push your-username/portfolio-frontend:latest
   docker push your-username/portfolio-backend:latest
   ```

3. **Deploy on Your Server**
   ```bash
   # On your server, create .env file with production values
   docker-compose up -d
   ```

---

## 🔗 Connecting Frontend & Backend

After deploying both:

### Update Environment Variables

**Frontend (Vercel)**
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXX (optional)
```

**Backend (Railway/Heroku)**
```
FRONTEND_URL=https://your-domain.com
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

### Update Frontend API Call

If backend is on different domain, update in `frontend/components/Contact.tsx`:

```typescript
// Change from:
const response = await fetch('http://localhost:5000/api/contact', {

// To:
const response = await fetch('https://your-railway-backend.railway.app/api/contact', {
```

---

## 🎯 Full Deployment Checklist

### Before Deployment

- [ ] Update `frontend/utils/constants.ts` with your info
- [ ] Test locally: `npm run dev` in both directories
- [ ] Contact form works (backend running)
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All links work

### Frontend Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel
- [ ] Set environment variables
- [ ] Test deployed site
- [ ] Setup custom domain (optional)

### Backend Deployment

- [ ] Create Railway/Heroku account
- [ ] Connect GitHub repo
- [ ] Set environment variables (especially EMAIL)
- [ ] Test API: `curl https://your-backend.app/health`
- [ ] Test contact form

### Post-Deployment

- [ ] Verify frontend loads
- [ ] Test contact form works
- [ ] Check email arrives
- [ ] Monitor performance (Lighthouse)
- [ ] Setup Google Analytics
- [ ] Monitor errors (Sentry, etc.)

---

## 📊 Monitoring & Maintenance

### Frontend (Vercel)

- **Performance**: Vercel Analytics (automatic)
- **Errors**: Built-in error tracking
- **Logs**: View in Vercel Dashboard

### Backend (Railway)

- **Logs**: `railway logs --tail`
- **Metrics**: Railway Dashboard
- **Monitoring**: Setup alerts in Railway

### Email Delivery

Monitor email logs:
- Check Gmail "Sent Mail" folder
- Check spam folder for bounces
- Test regularly with test submissions

---

## 🔐 Security Checklist

### Before Going Live

- [ ] No `.env` files in Git (use `.env.example`)
- [ ] All secrets in environment variables
- [ ] HTTPS enabled (automatic on Vercel/Railway)
- [ ] CORS properly configured
- [ ] Rate limiting working
- [ ] Input validation enabled
- [ ] Backend not exposed to frontend code
- [ ] No console.log of sensitive data

### SSL/TLS Certificates

- **Vercel**: Automatic ✅
- **Railway**: Automatic ✅
- **Heroku**: Automatic ✅
- **Custom Server**: Use Let's Encrypt

---

## 🚨 Troubleshooting Deployment

### Frontend Not Connecting to Backend

**Error**: Contact form doesn't send

**Solution**:
1. Check backend URL in `Contact.tsx`
2. Check `FRONTEND_URL` in backend env vars
3. Verify CORS is configured
4. Check backend logs: `railway logs --tail`

### Email Not Sending in Production

**Problem**: Contact form submits but no email arrives

**Solution**:
1. Verify Gmail credentials are correct
2. Check Gmail app password (not regular password)
3. Check spam folder
4. View backend logs: `railway logs --tail`
5. Test with: `curl -X POST https://your-backend.app/api/contact`

### Build Fails on Vercel

**Error**: Build error on deploy

**Solution**:
1. Check Vercel logs: Deployments → click failed build
2. Install missing dependencies locally first
3. Common fix: `npm ci` instead of `npm install`
4. Check `next.config.js` for errors

### Railway Deploy Fails

**Error**: Build failed

**Solution**:
1. Check logs: `railway logs --tail`
2. Verify `package.json` is in root
3. Check `start` script in package.json
4. Ensure PORT is set correctly

---

## 📈 Analytics Setup

1. **Google Analytics**
   - Create property at analytics.google.com
   - Get Measurement ID (G-XXXXX)
   - Add to Vercel env vars: `NEXT_PUBLIC_GA_ID=G-XXXXX`
   - Redeploy

2. **Monitoring**
   - Vercel Analytics (automatic)
   - Railway Dashboard
   - Google Analytics dashboard

---

## 💰 Cost Estimate

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | Free | Auto-redeploy, 100GB bandwidth |
| Railway | Free | 5GB RAM free, $5+ beyond |
| Heroku | Paid | ~$7/month minimum |
| Custom Domain | $10-15/year | .com, .dev, etc. |
| Email Service | Free (Gmail) | Or paid for high volume |

**Budget: ~$10-15/year for domain only**

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet.

### Next Steps:
1. Share your portfolio!
2. Monitor feedback
3. Keep adding projects
4. Iterate based on analytics

---

**Happy deploying! 🚀**
