import { SITE } from '../data/site';
import { TIMELINE } from '../data/timeline';

const About = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section-title">
          about me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I&apos;m based in <strong>Glasgow</strong>, studying{' '}
              <strong>{SITE.degree}</strong> at {SITE.university}. I entered directly into
              Year 3 after completing an HND in Software Development.
            </p>
            <p>
              I build full-stack applications, AI tools and machine-learning systems — with a
              particular interest in product development, explainable AI and startup work. I
              co-founded{' '}
              <a href={SITE.pleiades} target="_blank" rel="noopener noreferrer">
                Pleiades
              </a>
              , and I&apos;m currently working on my dissertation: an explainable ML platform
              for HR attrition prediction.
            </p>
            <p className="about-humour">
              &amp; please don&apos;t make me use LinkedIn.
            </p>

            <div className="timeline">
              <h3>Timeline</h3>
              <ol className="timeline-list">
                {TIMELINE.map((entry) => (
                  <li key={entry.year + entry.title} className="timeline-item">
                    <span className="timeline-year">{entry.year}</span>
                    <div className="timeline-content">
                      <strong>{entry.title}</strong>
                      <p>{entry.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="about-evidence" aria-label="Quick facts">
            <div className="evidence-card">
              <h3>Education</h3>
              <p>{SITE.degree}</p>
              <p className="evidence-detail">{SITE.university}</p>
            </div>
            <div className="evidence-card">
              <h3>Focus areas</h3>
              <ul>
                <li>Full-stack development</li>
                <li>Applied machine learning</li>
                <li>Explainable AI</li>
                <li>Product development</li>
              </ul>
            </div>
            <div className="evidence-card">
              <h3>Current work</h3>
              <p>Final-year dissertation — HR Decision Support Tool with explainable ML</p>
            </div>
            <div className="evidence-card">
              <h3>Co-founder</h3>
              <p>
                <a href={SITE.pleiades} target="_blank" rel="noopener noreferrer">
                  Pleiades
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
