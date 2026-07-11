import { SKILL_CATEGORIES } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section-title">
          skills &amp; tech
        </h2>
        <div className="skills-categories">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              <ul className="skills-grid" role="list">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`skill-tag ${skill === 'onions' ? 'skill-easter-egg' : ''}`}
                    title={skill === 'onions' ? 'layers. like ogres.' : undefined}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
