'use client';

import { useState } from 'react';
import { PROJECTS } from '@/utils/constants';

export default function ProjectAccordion() {
  const [activeProject, setActiveProject] = useState('');

  return (
    <div className="project-accordion">
      {PROJECTS.map((project, index) => {
        const isOpen = activeProject === project.slug;

        return (
          <article key={project.slug} className={`project-fold ${isOpen ? 'is-open' : ''}`}>
            <button type="button" onClick={() => setActiveProject(isOpen ? '' : project.slug)}>
              <span>0{index + 1}</span>
              <strong>{project.title}</strong>
              <small>{project.category}</small>
            </button>

            <div className="project-fold-body">
              <p>{project.description}</p>
              <ul className="project-bullets">
                {project.details?.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="project-actions">
                {project.links?.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
