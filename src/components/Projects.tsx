
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Booking System',
      description: 'full CRUD system with auth',
      image: '',
      technologies: ['React', 'TS', 'Supabase'],
      liveUrl: 'https://wad-2-sigma.vercel.app/',
      githubUrl: 'https://github.com/VlllLE/WAD2',
      featured: true
    },
    {
      id: 2,
      title: 'Therapy Bot',
      description: 'Mistral7B directed to speak like a therapist',
      image: '',
      technologies: ['Python', 'HuggingFace', 'React/TS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'CanUMix',
      description: 'Substance dosage/interaction calculator. For harm reduction. Obviously.',
      image: '',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
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
                  <a href={project.liveUrl} className="project-link primary">
                    Live Demo
                  </a>
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
