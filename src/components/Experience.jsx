import React from 'react';
import { GraduationCap, Code2, Terminal, Check } from 'lucide-react';
import { careerTimeline } from '../data/portfolioData';

const timelineIcons = {
  education: GraduationCap,
  projects: Code2,
  learning: Terminal
};

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-label">02 // CAREER JOURNEY & EDUCATION</div>
      <h2 className="section-heading">
        Learning by building, testing, and solving.
      </h2>
      <p className="section-description">
        An honest, transparent timeline of my academic background in Computer
        Applications, hands-on full-stack software development projects, and
        algorithmic problem-solving practice.
      </p>

      <div className="timeline-list">
        {careerTimeline.map((item) => {
          const Icon = timelineIcons[item.type] || Code2;
          return (
            <div className="timeline-card" key={item.id}>
              {/* Badge Row */}
              <div className="timeline-badge-row">
                <span className="timeline-period-badge">{item.period}</span>
                <span className="timeline-score-badge">{item.score}</span>
              </div>

              {/* Title & Organization */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.2rem'
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="timeline-title">{item.role}</h3>
                  <div className="timeline-org">
                    <strong>{item.organization}</strong> • {item.university}
                  </div>
                </div>
              </div>

              {/* Detailed Points */}
              <div className="timeline-points" style={{ marginTop: '1.25rem' }}>
                {item.points.map((point, idx) => (
                  <div className="timeline-point-item" key={idx}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent)',
                        marginTop: '0.45rem',
                        flexShrink: 0
                      }}
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
