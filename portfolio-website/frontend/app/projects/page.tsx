import type { Metadata } from 'next';
import Link from 'next/link';
import { PROJECTS } from '@/utils/constants';
import { findSkillBySlug, toSlug } from '@/utils/skills';
import { generateMetadata as generateMetaData } from '@/utils/seo';

export const metadata: Metadata = generateMetaData(
  'Projects',
  'Showcase of my portfolio projects - web development, machine learning, and system design',
  '/projects'
);

export default function ProjectsPage({
  searchParams,
}: {
  searchParams?: {
    skill?: string;
  };
}) {
  const skillSlug = typeof searchParams?.skill === 'string' ? searchParams.skill : undefined;
  const selectedSkill = skillSlug ? findSkillBySlug(skillSlug) : undefined;

  const filteredProjects = selectedSkill
    ? PROJECTS.filter((p) => p.skills?.includes(selectedSkill.name))
    : PROJECTS;

  return (
    <div className="pt-28 pb-16 container">
      <div className="section-rule mb-10" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="mono-title text-6xl mb-3">Projects</h1>
          <p className="text-white/75 max-w-2xl">
            A quick look at product, research, and engineering work.
          </p>
        </div>

        {selectedSkill ? (
          <div className="flex flex-wrap gap-3 md:justify-end text-sm text-white/70">
            <span>Filter: {selectedSkill.name}</span>
            <Link href="/projects" className="hover:text-white transition-colors uppercase tracking-[0.14em] text-xs">
              Clear
            </Link>
          </div>
        ) : null}
      </div>

      <div className="mt-8 mb-8">
        <Link href="/skills" className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white">
          Browse Skills
        </Link>
      </div>

      <div className="project-detail-grid">
        {filteredProjects.map((project) => (
          <article key={project.title} className="ascii-panel project-detail-card">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/60">{project.category}</span>
            <h3 className="project-title-link">{project.title}</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
            <ul className="project-bullets">
              {project.details?.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
              {project.skills?.map((skill) => (
                <Link
                  key={skill}
                  href={`/skills/${toSlug(skill)}`}
                  className="text-[12px] text-white/70 hover:text-white transition-colors"
                >
                  {skill}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-[11px] text-white/52">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              {project.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors inline-flex items-center"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
