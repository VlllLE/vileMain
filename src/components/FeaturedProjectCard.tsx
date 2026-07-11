import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { projectRoute } from '../utils/helpers';
import ProjectImage from './ProjectImage';

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="project-card featured">
      <div className="project-image">
        <ProjectImage src={project.image} alt={project.imageAlt} />
        <span className="featured-badge">Featured</span>
        <span className={`status-badge status-${project.status}`}>{project.statusLabel}</span>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.summary}</p>

        <dl className="project-meta">
          <div className="meta-row">
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div className="meta-row">
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <div className="project-technologies" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <ul className="feature-list">
          {project.keyFeatures.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
          {project.keyFeatures.length > 4 && (
            <li className="feature-more">
              +{project.keyFeatures.length - 4} more in case study
            </li>
          )}
        </ul>

        <div className="project-links">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              className="project-link primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.liveUrlLabel ?? 'Live demo'}
            </a>
          ) : (
            <span className="project-link primary disabled">No live demo</span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="project-link secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : (
            <span className="project-link secondary disabled">Repo private</span>
          )}
          <Link to={projectRoute(project.slug)} className="project-link case-study">
            Case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
