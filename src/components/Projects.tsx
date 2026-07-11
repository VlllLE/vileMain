import { getFeaturedProjects, getSecondaryProjects } from '../data/projects';
import FeaturedProjectCard from './FeaturedProjectCard';
import SecondaryProjectCard from './SecondaryProjectCard';

const Projects = () => {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-title">
          what I&apos;ve been building
        </h2>

        <div className="featured-projects">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {secondary.length > 0 && (
          <>
            <h3 className="subsection-title">Other projects</h3>
            <div className="projects-grid">
              {secondary.map((project) => (
                <SecondaryProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
