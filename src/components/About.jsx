import React from 'react';
import { Server, Cpu, Globe, CheckCircle2 } from 'lucide-react';
import { aboutNarrative, personalInfo } from '../data/portfolioData';

const pillarIcons = [Server, Cpu, Globe, CheckCircle2];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-label">01 // ABOUT ME</div>
      <h2 className="section-heading">
        Engineered with focus, curiosity, and code.
      </h2>
      <p className="section-description">
        A BCA graduate and aspiring Java Full-Stack Developer driven to build
        practical web applications, master core computer science principles, and
        solve complex real-world problems.
      </p>

      <div className="about-card">
        {aboutNarrative.paragraphs.map((para, index) => (
          <p key={index} className="about-paragraph">
            {para}
          </p>
        ))}

        {/* Engineering Pillars */}
        <div className="about-pillars-grid">
          {aboutNarrative.corePillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div key={idx} className="pillar-item">
                <div className="pillar-title">
                  <Icon size={18} style={{ color: 'var(--accent)' }} />
                  <span>{pillar.title}</span>
                </div>
                <div className="pillar-desc">{pillar.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
