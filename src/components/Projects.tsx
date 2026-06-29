
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'booking system',
      description: 'full CRUD with auth. Used for a local yoga studio.',
      image: '',
      technologies: ['React', 'TS', 'Supabase'],
      liveUrl: 'https://wad-2-sigma.vercel.app/',
      githubUrl: 'https://github.com/VlllLE/WAD2',
      featured: true
    },
    {
      id: 2,
      title: 'mirror',
      description: 'Mistral7B directed to speak like a therapist.',
      image: '',
      technologies: ['Python', 'HuggingFace', 'React/TS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      comingSoon: true,
    },
    {
      id: 3,
      title: 'CanUMix',
      description: 'Substance dosage/interaction calculator. For harm reduction. Obviously.',
      image: '',
      technologies: ['Next.js', 'TypeScript', 'Drugs.com API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      comingSoon: true,
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">what i've been up to</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.comingSoon ? (
                    <span className="project-link primary disabled">Coming Soon</span>
                  ) : (
                    <a href={project.liveUrl} className="project-link primary" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} className="project-link secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
