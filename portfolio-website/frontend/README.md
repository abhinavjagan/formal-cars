# Frontend - Next.js Portfolio

Modern, creative portfolio frontend built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful, responsive UI with smooth animations
- 🎨 Creative design with unique typography
- 📱 Mobile-first responsive design
- ⚡ Fast performance with Next.js optimization
- 🔍 SEO optimized with meta tags and structured data
- 🌙 Dark theme with vibrant accent colors
- 📧 Integrated contact form

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_analytics_id
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── pages/                    # Next.js pages and routes
│   ├── _app.tsx            # App wrapper
│   ├── index.tsx           # Home page
│   ├── projects.tsx        # Projects page
│   ├── robots.txt.ts       # SEO robots.txt
│   ├── sitemap.xml.ts      # Dynamic sitemap
│   └── api/                # API routes
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── styles/                  # CSS styles
│   └── globals.css         # Global styles
├── utils/                   # Utilities
│   ├── constants.ts        # Data and constants
│   └── seo.ts              # SEO utilities
├── public/                  # Static files
├── tailwind.config.js      # Tailwind config
├── next.config.js          # Next.js config
└── tsconfig.json           # TypeScript config
```

## Key Pages & Routes

- `/` - Home page with hero, about, projects, and contact sections
- `/projects` - Full projects showcase
- `/sitemap.xml` - Dynamic XML sitemap for SEO
- `/robots.txt` - Robots.txt for search engines

## Customization

### Update Portfolio Data
Edit `utils/constants.ts` to modify:
- Work experience
- Projects
- Skills
- Social links

### Modify Colors
Edit `tailwind.config.js` and `styles/globals.css`:
- `accent` - Primary color (#ff006e)
- `accentAlt` - Secondary color (#00f5ff)
- `dark` - Background color

### Update Content
- Edit component JSX directly
- Modify text in hero, about, and projects sections
- Update links in header and footer

## Performance Tips

- Images are optimized automatically by Next.js
- CSS is purged automatically by Tailwind
- Code splitting happens automatically
- Static pages are pre-rendered at build time

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
