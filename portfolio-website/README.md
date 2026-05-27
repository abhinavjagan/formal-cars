# Portfolio Website - Abhinav Jagan Polimera

A creative, modern portfolio website built with **Next.js** and **Node.js** featuring SEO optimization, smooth animations, and a unique design inspired by modern typography and UI trends.

## 🎨 Features

- **Creative UI Design** - Unique typography, gradient effects, and smooth animations
- **SEO Optimized** - Meta tags, structured data, sitemap, robots.txt
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Fast Performance** - Next.js optimization, image optimization, code splitting
- **Contact Form** - Fully functional contact form with email notifications
- **Dark Theme** - Eye-catching dark mode with accent colors
- **Animations** - Framer Motion for smooth page transitions and interactions
- **TypeScript** - Full type safety for better development experience

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **SEO**: next-seo, structured data, meta tags

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Email Service**: Nodemailer
- **Security**: Helmet, CORS, Rate Limiting
- **Environment**: dotenv

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment Ready**: Vercel (Frontend) & Heroku/Railway (Backend)

## 📋 Project Structure

```
portfolio-website/
├── frontend/                  # Next.js Application
│   ├── pages/                # Route pages and API routes
│   ├── components/           # Reusable React components
│   ├── styles/               # Global styles
│   ├── utils/                # Helper functions and constants
│   ├── public/               # Static assets
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── next.config.js        # Next.js configuration
│   └── package.json
│
├── backend/                  # Express.js Application
│   ├── src/
│   │   └── index.js          # Main server file
│   ├── .env.example          # Environment variables template
│   └── package.json
│
├── docker-compose.yml        # Docker Compose configuration
├── .gitignore
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- (Optional) Docker and Docker Compose for containerized setup

### 1. Clone the Repository
```bash
git clone https://github.com/abhinavpolimera/portfolio-website.git
cd portfolio-website
```

### 2. Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
```

**Configure `.env.local`:**
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 3. Setup Backend

```bash
cd ../backend
npm install
cp .env.example .env.local
```

**Configure `.env.local`:**
```env
PORT=5000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development

# Gmail Setup (use App Password for 2FA-enabled accounts)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=abhinavpolimera@gmail.com
```

### 4. Run Development Servers

#### Option A: Separate Terminal Windows

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
# Open http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# Backend running on http://localhost:5000
```

#### Option B: Docker Compose
```bash
docker-compose up --build
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

## 📧 Email Configuration

### Gmail Setup (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - App passwords → Select "Mail" and "Windows Computer"
   - Copy the 16-character password
3. **Use in `.env.local`**:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # 16-char app password
   ```

### Alternative Email Services
For production, consider using:
- **SendGrid**: `npm install @sendgrid/mail`
- **Mailgun**: `npm install mailgun.js`
- **AWS SES**: `npm install aws-sdk`

## 🎨 Customization

### Update Portfolio Content
Edit `/frontend/utils/constants.ts`:
```typescript
export const EXPERIENCE = [...]
export const PROJECTS = [...]
export const SKILLS = [...]
export const SOCIAL_LINKS = [...]
```

### Modify Colors & Theme
Edit `/frontend/tailwind.config.js`:
```javascript
colors: {
  accent: '#ff006e',      // Primary accent color
  accentAlt: '#00f5ff',   // Secondary accent color
  dark: '#0a0a0a',        // Background
  // ... more colors
}
```

### Update Fonts & Typography
Edit `/frontend/styles/globals.css` - Google Fonts are imported at the top

## 🔍 SEO Optimization

### Implemented SEO Features:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social media previews)
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org JSON-LD)
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Mobile-friendly design
- ✅ Fast page load (Core Web Vitals optimized)

### Analytics Setup
1. Create Google Analytics 4 property
2. Get your Measurement ID (GA4 ID)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🚀 Deployment

### Frontend Deployment (Vercel)

```bash
# Push to GitHub
git push origin main

# Auto-deploys on push to main
# Or deploy manually:
npm install -g vercel
vercel
```

### Backend Deployment (Heroku / Railway)

#### Heroku:
```bash
heroku login
heroku create portfolio-backend
git push heroku main
```

#### Railway:
1. Connect GitHub repo at railway.app
2. Set environment variables in Railway dashboard
3. Auto-deploys on push

### Docker Deployment
```bash
# Build images
docker build -t portfolio-frontend:latest ./frontend
docker build -t portfolio-backend:latest ./backend

# Push to Docker Hub
docker push your-username/portfolio-frontend:latest
docker push your-username/portfolio-backend:latest

# Deploy using docker-compose on your server
```

## 📈 Performance Metrics

- **Lighthouse Score**: 95+
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🔐 Security Features

- Helmet.js headers
- CORS protection
- Rate limiting on contact form
- Input sanitization
- Environment variable protection
- No sensitive data in frontend code

## 📝 API Endpoints

### Backend API

#### Health Check
```
GET http://localhost:5000/health
Response: { status: 'ok', message: 'Backend is running' }
```

#### Contact Form
```
POST http://localhost:5000/api/contact
Headers: Content-Type: application/json
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Let's work together",
  "message": "I have an interesting project..."
}
Response: { success: true, message: 'Email sent successfully' }
```

## 🛠️ Development Commands

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Static export
```

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start server
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this for your own portfolio

## 👤 Author

**Abhinav Jagan Polimera**
- Email: abhinavpolimera@gmail.com
- LinkedIn: [linkedin.com/in/abhinavpolimera](https://linkedin.com/in/abhinavpolimera)
- GitHub: [github.com/abhinavpolimera](https://github.com/abhinavpolimera)
- Portfolio: [Coming Soon]

## 🎯 Future Enhancements

- [ ] Add blog section with MDX support
- [ ] Implement dark/light theme toggle
- [ ] Add newsletter subscription
- [ ] Integrate with GitHub API to show live projects
- [ ] Add testimonials/case studies section
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features
- [ ] Database integration for dynamic content

## ❓ Troubleshooting

### "Cannot POST /api/contact"
- Make sure backend is running on port 5000
- Check CORS settings in `backend/src/index.js`
- Verify `FRONTEND_URL` in backend `.env.local`

### Email not sending
- Verify Gmail App Password is correct (not regular password)
- Check "Less secure apps" settings if not using App Password
- Ensure `EMAIL_USER` and `RECIPIENT_EMAIL` are valid

### Build errors
- Clear `.next` folder: `rm -rf frontend/.next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (must be 18+)

## 📞 Support

For issues or questions, please open a GitHub issue or reach out at abhinavpolimera@gmail.com

---

**Made with ❤️ using Next.js and Node.js**
