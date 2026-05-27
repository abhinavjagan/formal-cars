'use client';

import { SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-10 relative z-10">
      <div className="container">
        <div className="section-rule mb-8" />
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-sm">
          <p className="text-white/60">(c) {currentYear} Abhinav Jagan Polimera</p>
          <div className="flex gap-5 text-white/70 uppercase tracking-[0.12em] text-xs">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
