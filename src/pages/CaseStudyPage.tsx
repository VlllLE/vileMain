import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { SITE } from '../data/site';
import ProjectImage from '../components/ProjectImage';
import NotFound from '../components/NotFound';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${SITE.tagline}`;
    }
    return () => {
      document.title = SITE.title;
    };
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const { caseStudy: cs } = project;

  return (
    <article className="case-study">
      <header className="case-study-hero">
        <div className="container">
          <Link to="/" state={{ scrollTo: 'projects' }} className="back-link">
            ← Back to projects
          </Link>
          <p className={`status-badge status-${project.status}`}>{project.statusLabel}</p>
          <h1>{project.title}</h1>
          <p className="case-study-summary">{project.summary}</p>
          <div className="case-study-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveUrlLabel ?? 'Live demo'}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container case-study-body">
        <section className="case-study-section">
          <h2>Overview</h2>
          <p>{cs.overview}</p>
        </section>

        <section className="case-study-section">
          <h2>Problem</h2>
          <p>{cs.problem}</p>
        </section>

        <section className="case-study-section">
          <h2>My contribution</h2>
          <p>{cs.contribution}</p>
        </section>

        <section className="case-study-section">
          <h2>Architecture</h2>
          <p>{cs.architecture}</p>
        </section>

        <section className="case-study-section">
          <h2>Major features</h2>
          <ul>
            {cs.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Technical decisions</h2>
          <ul>
            {cs.technicalDecisions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Challenges</h2>
          <ul>
            {cs.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            {cs.screenshots.map((shot) => (
              <figure key={shot.src} className="screenshot-figure">
                <ProjectImage src={shot.src} alt={shot.alt} width={800} height={450} />
                {shot.caption && <figcaption>{shot.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>

        <section className="case-study-section">
          <h2>Current limitations</h2>
          <ul className="limitations-list">
            {cs.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Future improvements</h2>
          <ul>
            {cs.futureImprovements.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <h2>Technology stack</h2>
          <div className="project-technologies">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-links-section">
          <h2>Links</h2>
          <ul className="links-list">
            {project.liveUrl && (
              <li>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  {project.liveUrlLabel ?? 'Live demo'}
                </a>
              </li>
            )}
            {project.githubUrl && (
              <li>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub repository
                </a>
              </li>
            )}
            <li>
              <Link to="/" state={{ scrollTo: 'contact' }}>
                Contact me about this project
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
