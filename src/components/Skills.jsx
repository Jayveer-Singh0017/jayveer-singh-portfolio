import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">04 // TECHNICAL SKILLS</div>
      <h2 className="section-heading">Technologies and tools I work with.</h2>
      <p className="section-description">
        Organized by domain, representing hands-on competencies developed through
        academic projects, independent full-stack applications, and continuous
        problem-solving.
      </p>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skill-category-card" key={index}>
            {/* Header with Colored Category Indicator Dot */}
            <div className="skill-category-header">
              <span
                className="category-dot"
                style={{ backgroundColor: category.color }}
                aria-hidden="true"
              />
              <h3 className="skill-category-title">{category.category}</h3>
            </div>

            {/* Badges List */}
            <div className="skills-tags-wrap">
              {category.skills.map((skill, sIdx) => (
                <span className="skill-pill" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
