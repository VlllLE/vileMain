import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { projectRoute } from '../utils/helpers';
import ProjectImage from './ProjectImage';

interface SecondaryProjectCardProps {
  project: Project;
}

export default function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <ProjectImage src={project.image} alt={project.imageAlt} />
        <span className={`status-badge status-${project.status}`}>{project.statusLabel}</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.summary}</p>
        <div className="project-technologies" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="project-link primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
          ) : project.status === 'coming-soon' ? (
            <span className="project-link primary disabled">Coming soon</span>
          ) : (
            <span className="project-link primary disabled">No live demo</span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="project-link secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          <Link to={projectRoute(project.slug)} className="project-link case-study">
            Case study
          </Link>
        </div>
      </div>
    </article>
  );
}
