import type { Metadata } from 'next';
import Link from 'next/link';
import AsciiImage from '@/components/AsciiImage';
import ProjectAccordion from '@/components/ProjectAccordion';
import { generateMetadata as generateMetaData, structuredData } from '@/utils/seo';
import { EXPERIENCE, SKILLS, SOCIAL_LINKS } from '@/utils/constants';

export const metadata: Metadata = generateMetaData(
  'Home',
  'Software Engineer building AI-powered developer platforms, LLM infrastructure, agentic AI systems, and distributed networking software',
  '/'
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData('person', {})),
        }}
      />
      <div id="top" className="scroll-mt-24 pt-12 pb-6">
        <section className="container hero-grid pt-10">
          <div className="hero-copy">
            <div className="hero-badges">
              <span>U.S. Citizen</span>
            </div>
            <h1 className="mono-title hero-title">
              BUILDING
              <br />
              SYSTEMS
            </h1>
            <p className="mt-8 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
              Software engineer building AI-powered developer platforms, LLM infrastructure, agentic AI systems, distributed networking software, and high-performance router operating systems at Cisco.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-white/70">
              <Link href="/#projects">Projects</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/resume.pdf" target="_blank" rel="noreferrer">Resume</Link>
            </div>
          </div>
          <AsciiImage src="/ascii-new.png" alt="Porsche image" />
        </section>

        <section id="about" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <div className="grid md:grid-cols-12 gap-8">
            <h2 className="mono-title text-5xl md:text-6xl md:col-span-4">About</h2>
            <div className="md:col-span-8 ascii-panel">
              <pre>{String.raw`> boot profile
> role: software engineer
> citizenship: U.S. citizen
> mode: ai platforms / llm infra / distributed systems`}</pre>
              <div className="space-y-4 text-white/75 leading-relaxed mt-6">
                <p>Software Engineer with experience building AI-powered developer platforms, LLM infrastructure, Agentic AI systems, distributed networking software, and high-performance router operating systems at Cisco.</p>
                <p>
                  I bridge low-level systems work with modern AI tooling, turning complex infrastructure into reliable,
                  developer-friendly platforms with measurable impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cisco" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mono-title text-5xl md:text-6xl">Cisco SDE</h2>
              <p className="mt-4 max-w-2xl text-white/72">
                Distributed systems and AI platform work across Cisco 8000 Silicon One routers, packet mirroring,
                developer tooling, agentic AI infrastructure, and high-performance router operating systems.
              </p>
            </div>
            <span className="ascii-stamp">/experience/cisco</span>
          </div>
          <div className="timeline-grid mt-10">
            {EXPERIENCE.map((role) => (
              <article key={`${role.company}-${role.position}`} className="ascii-panel role-card">
                <div className="role-meta">
                  <span>{role.duration}</span>
                  <span>{role.location}</span>
                </div>
                <h3>{role.position}</h3>
                <p>{role.company}</p>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <h2 className="mono-title text-5xl md:text-6xl mb-8">Skills</h2>
          <div className="ascii-skill-grid">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="ascii-panel">
                <h3 className="text-white/60 uppercase tracking-[0.2em] text-xs mb-4">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="skill-cloud">
                  {items.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <h2 className="mono-title text-5xl md:text-6xl">Projects</h2>
          <p className="mt-6 text-white/72 max-w-xl">
            Selected work spanning AI/ML, agentic systems, distributed networking, and product-minded engineering.
          </p>
          <ProjectAccordion />
        </section>


        <section id="contact" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <h2 className="mono-title text-5xl md:text-6xl mb-5">Contact</h2>
          <p className="text-white/75 mb-8 max-w-xl">
            Open to software roles and high-impact product collaborations.
          </p>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-white/70">
            <a href={`mailto:${SOCIAL_LINKS.email}`}>Email</a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </>
  );
}
