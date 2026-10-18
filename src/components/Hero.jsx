import React, { useState, useMemo } from 'react';
import {
  FileText,
  Mail,
  MapPin,
  Phone,
  Code2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Search,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';
import {
  personalInfo,
  heroStats,
  assistantSuggestions
} from '../data/portfolioData';

export default function Hero() {
  const [activeSuggestion, setActiveSuggestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);

  // Dynamic greeting based on current local hour
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopyEmailSuccess(true);
    setTimeout(() => setCopyEmailSuccess(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter suggestions based on query
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return assistantSuggestions;
    return assistantSuggestions.filter(
      (s) =>
        s.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="hero-section" id="hero">
      {/* Availability Pill */}
      <div className="hero-status-pill">
        <span className="status-dot-pulse" aria-hidden="true"></span>
        <span>{personalInfo.availabilityText}</span>
      </div>

      {/* Main Editorial Heading */}
      <h1 className="hero-heading">
        {greeting}, I'm{' '}
        <span className="name-accent">{personalInfo.name}</span>
      </h1>

      {/* Professional Title */}
      <h2 className="hero-role">{personalInfo.role}</h2>

      {/* Tagline */}
      <p className="hero-tagline">“{personalInfo.tagline}”</p>

      {/* Interactive Quick Navigator Box (Inspired by Reference) */}
      <div className="assistant-box-wrapper">
        <div className="assistant-box">
          <div className="assistant-prompt-header">
            <span>How can Jayveer help you today?</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Quick Profile Navigator
            </span>
          </div>

          {/* Quick Filter Chips */}
          <div className="assistant-chips-row">
            {assistantSuggestions.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  setActiveSuggestion(
                    activeSuggestion?.id === item.id ? null : item
                  )
                }
                className={`assistant-chip ${
                  activeSuggestion?.id === item.id ? 'active' : ''
                }`}
              >
                <Sparkles size={13} style={{ color: 'var(--accent)' }} />
                <span>{item.prompt}</span>
              </button>
            ))}
          </div>

          {/* Answer Bubble when an item is selected */}
          {activeSuggestion && (
            <div className="assistant-answer-bubble">
              <div>{activeSuggestion.answer}</div>
              <button
                onClick={() => {
                  scrollTo(activeSuggestion.sectionId);
                }}
                className="assistant-jump-link"
              >
                <span>Jump to section</span>
                <ArrowRight size={13} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stat Cards Row */}
      <div className="hero-stats-grid">
        {heroStats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-card-value">
              {stat.value}
              <span style={{ fontSize: '1.25rem' }}>{stat.suffix}</span>
            </div>
            <div className="stat-card-label">{stat.label}</div>
            <div className="stat-card-desc">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Contact & Location Strip */}
      <div className="contact-pill-strip">
        <a
          href={`mailto:${personalInfo.email}`}
          className="contact-strip-item"
          title="Click to email"
        >
          <Mail size={15} style={{ color: 'var(--accent)' }} />
          <span>{personalInfo.email}</span>
        </a>
        <span style={{ opacity: 0.3 }}>•</span>
        <span className="contact-strip-item">
          <MapPin size={15} style={{ color: 'var(--accent)' }} />
          <span>{personalInfo.location}</span>
        </span>
        <span style={{ opacity: 0.3 }}>•</span>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-strip-item"
        >
          <GithubIcon size={15} style={{ color: 'var(--accent)' }} />
          <span>GitHub</span>
        </a>
      </div>

      {/* Action Buttons Row */}
      <div className="hero-actions-row">
        <button onClick={() => scrollTo('projects')} className="btn btn-primary">
          <span>View Projects</span>
          <ArrowRight size={16} />
        </button>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download={personalInfo.resumeAvailable ? 'Jayveer_Singh_Resume.pdf' : undefined}
          className="btn btn-secondary"
          onClick={(e) => {
            if (!personalInfo.resumeAvailable) {
              e.preventDefault();
              alert(
                'Resume PDF Placeholder: To configure your resume, place your resume.pdf into the /public/ folder and set resumeAvailable: true in src/data/portfolioData.js.'
              );
            }
          }}
          title={
            personalInfo.resumeAvailable
              ? 'Download Jayveer’s Resume PDF'
              : 'Resume placeholder (add resume.pdf to /public)'
          }
        >
          <FileText size={16} />
          <span>Download Resume</span>
        </a>

        {/* GitHub Icon Link */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon-circle"
          aria-label="GitHub Profile"
          title="GitHub Profile (Jayveer-Singh0017)"
        >
          <GithubIcon size={18} />
        </a>

        {/* LinkedIn Icon Link */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon-circle"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile (Configurable Placeholder)"
        >
          <LinkedinIcon size={18} />
        </a>

        {/* LeetCode Icon Link */}
        <a
          href={personalInfo.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon-circle"
          aria-label="LeetCode Profile"
          title="LeetCode Profile (250+ Solved)"
        >
          <LeetCodeIcon size={18} />
        </a>
      </div>
    </section>
  );
}
