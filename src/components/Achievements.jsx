import React from 'react';
import { Code2, Flame, Award, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Flame: Flame,
  Award: Award,
  CheckCircle: CheckCircle
};

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-label">05 // ACHIEVEMENTS & CERTIFICATIONS</div>
      <h2 className="section-heading">Milestones and verified recognitions.</h2>
      <p className="section-description">
        Demonstrating discipline, competitive programming practice, and
        institutional skill development accomplishments.
      </p>

      <div className="achievements-grid">
        {achievementsData.map((item) => {
          const Icon = iconMap[item.iconName] || Award;
          return (
            <div className="achievement-card" key={item.id}>
              <div>
                <div className="achievement-icon-wrap">
                  <Icon size={22} />
                </div>
                <div className="achievement-badge-pill">{item.badge}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>

              <div className="achievement-metric-pill">{item.metric}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
