import type { ContentTextAlignment, Project } from '../../types';
import { ProjectCard } from './ProjectCard';

export interface ProjectsGridProps {
  projects: Project[];
  contentAlignment: ContentTextAlignment;
}

export function ProjectsGrid({ projects, contentAlignment }: ProjectsGridProps) {
  return (
    <div className="projects-grid" role="list" aria-label="Lista de proyectos">
      {projects.map((project) => (
        <div key={project.id} role="listitem">
          <ProjectCard project={project} contentAlignment={contentAlignment} />
        </div>
      ))}
    </div>
  );
}
