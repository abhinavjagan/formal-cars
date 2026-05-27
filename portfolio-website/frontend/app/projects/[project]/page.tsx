import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetaData } from '@/utils/seo';
import { PROJECTS } from '@/utils/constants';

// Slugify function
function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Find project by slug
function findProjectBySlug(slug: string) {
  return PROJECTS.find((p) => toSlug(p.title) === slug);
}

export const metadata: Metadata = generateMetaData(
  'Project',
  'Detailed project information',
  '/projects'
);

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    project: toSlug(project.title),
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: {
    project: string;
  };
}) {
  const project = findProjectBySlug(params.project);
  if (!project) notFound();

  return (
    <div className="pt-28 pb-16 container">
      <div className="section-rule mb-10" />
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="mono-title text-6xl mb-3">{project.title}</h1>
          <p className="text-white/75 max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 border border-white/30 text-white hover:bg-white/5 transition-colors"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}

      {project.skills && (
        <div className="mt-12">
          <h2 className="text-lg font-mono mb-4 text-white/75">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm border border-white/20 text-white/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
