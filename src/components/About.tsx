
const About = () => {
  const skills = [
    'react', 'typescript', 'javascript', 'python', 'html/css', 'java', 'scala', 'SQL', 'NoSQL', 'docker', 'kubernetes', 'git',
    ,'node.js','supabase','machine learning','REST APIs','next.js','flask','ai stuff', 'data stuff','hr compliance','risk analyst','paralegal','PGP'
    ,'onions','problem sovling','analytical thinking','project planning','research & technical writing','team collaboration','communication'
    ,'critical thinking','attention to detail','time management','adaptability','etc.'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">what's going on?</h2>
        <div className="about-content">
          <div className="about-text">
            <p>i have a couple of projects i'm working on that are listed below. </p>
            <p>& please dont make me use LinkedIn.</p>
            <div className="skills">
              <h3>skills & tech</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>years in the game</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>"projects" completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>making websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;