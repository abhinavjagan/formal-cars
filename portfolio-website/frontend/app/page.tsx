import type { Metadata } from 'next';
import Link from 'next/link';
import AsciiImage from '@/components/AsciiImage';
import ProjectAccordion from '@/components/ProjectAccordion';
import { generateMetadata as generateMetaData, structuredData } from '@/utils/seo';
import { EXPERIENCE, SKILLS, SOCIAL_LINKS } from '@/utils/constants';

export const metadata: Metadata = generateMetaData(
  'Home',
  'Software Developer specializing in distributed systems, machine learning, and full-stack development',
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
              Software developer focused on distributed systems, machine learning, and practical product engineering.
            </p>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-white/70">
              <Link href="/#projects">Projects</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/resume.pdf" target="_blank" rel="noreferrer">Resume</Link>
            </div>
          </div>
          <AsciiImage src="/ascii.png" alt="ASCII manga racing scene" />
        </section>

        <section id="about" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <div className="grid md:grid-cols-12 gap-8">
            <h2 className="mono-title text-5xl md:text-6xl md:col-span-4">About</h2>
            <div className="md:col-span-8 ascii-panel">
              <pre>{String.raw`> boot profile
> role: software developer
> citizenship: U.S. citizen
> mode: distributed systems / ai-ml / product engineering`}</pre>
              <div className="space-y-4 text-white/75 leading-relaxed mt-6">
                <p>I design and ship scalable systems with a strong emphasis on reliability and measurable outcomes.</p>
                <p>
                  My work combines network/distributed backend depth with modern product-facing development, while keeping
                  architecture clean and maintainable.
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
                Distributed systems work across Cisco 8000 Silicon One routers, packet mirroring, automation,
                and AI-assisted network infrastructure prototypes.
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
            Click a project to open the full case notes, stack, and publication or source links inline.
          </p>
          <ProjectAccordion />
        </section>

        <section id="extra" className="container py-20 scroll-mt-24">
          <div className="section-rule mb-10" />
          <div className="extra-hero">
            <div>
              <h2 className="mono-title text-5xl md:text-6xl">
                Beyond Software
              </h2>
              <p className="mt-4 text-white/72 max-w-3xl">
                Competitive discipline, visual craft, and adventure off the clock. State-level sport.
                Karate training. Visual design. Photography. Himalayas. Vietnam cave expedition.
              </p>
            </div>
            <span className="ascii-stamp">/range/off-clock</span>
          </div>

          <div className="extra-grid mt-10">
            <div className="ascii-panel extra-card">
              <h3>How I build range beyond software.</h3>
              <ul>
                <li>Represented school at the state-level CBSE Clusters South Zone tournament.</li>
                <li>Karate blue belt.</li>
                <li>Artist, graphic designer, and photographer.</li>
                <li>Trekked the Himalayas and the world&apos;s largest cave ecosystem in Vietnam.</li>
              </ul>
            </div>
            <div className="extra-copy">
              <p>
                Beyond my professional work, what truly sets me apart is the intensity and curiosity I bring to
                everything I pursue. I do not just do things. I go deep, get obsessed, and build. Whether it is setting
                up a 3D printing workflow at home, creating across mediums from digital art to 3D modelling, or
                designing and experimenting with new ideas, I treat every interest like a craft to be mastered.
              </p>
              <p>
                That same drive shows up in how I approach challenges. Competitive chess and karate built discipline,
                strategic thinking, and resilience early on, while high-altitude Himalayan treks and extreme
                environments shaped my ability to stay calm and push limits.
              </p>
              <p>
                I care about how things are built, how they can be improved, and what more they can become. That
                curiosity and ownership translate directly into my work: energy, creativity, and a genuine passion for
                building things that stand out, not just function.
              </p>
            </div>
          </div>
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
