import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  // Track expanded state for each project
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="section" id="projects">
      <div className="section-label">03 // FEATURED PROJECTS</div>
      <h2 className="section-heading">Applications built for real utility.</h2>
      <p className="section-description">
        Practical full-stack software built using Java, Spring Boot, relational
        databases, and modern API integrations. Each project is implemented with
        clean architecture and tested workflows.
      </p>

      <div className="projects-list">
        {projectsData.map((project) => {
          const isExpanded = !!expandedProjects[project.id];
          const visibleFeatures = isExpanded
            ? project.features
            : project.features.slice(0, 3);
          const hiddenCount = project.features.length - 3;

          return (
            <article className="project-card" key={project.id}>
              {/* Category / Architecture Tag */}
              <div className="project-tag">{project.tag}</div>

              {/* Title & Subtitle */}
              <h3 className="project-title">{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Feature Points */}
              <div className="project-bullets-list">
                {visibleFeatures.map((feat, idx) => (
                  <div className="project-bullet-item" key={idx}>
                    <span className="project-bullet-marker" aria-hidden="true" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Show more / Show less Toggle Button (Matching Reference) */}
              {project.features.length > 3 && (
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="show-more-btn"
                  aria-expanded={isExpanded}
                >
                  <span>
                    {isExpanded ? 'Show less' : `Show ${hiddenCount} more`}
                  </span>
                  {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>
              )}

              {/* Technology Badges */}
              <div className="project-tech-badges">
                {project.technologies.map((tech, idx) => (
                  <span className="tech-badge" key={idx}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Card Footer */}
              <div className="project-footer-actions">
                <div className="project-action-buttons">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub Code</span>
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="project-status-note">
                      • {project.status}
                    </span>
                  )}
                </div>

                {project.notes && (
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                      maxWidth: '460px'
                    }}
                  >
                    Note: {project.notes}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
