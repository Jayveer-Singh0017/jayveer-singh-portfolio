import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleResumeClick = (e) => {
    if (!personalInfo.resumeAvailable) {
      e.preventDefault();
      alert(
        'Resume PDF Placeholder: To configure your resume, place your resume.pdf into the /public/ folder and set resumeAvailable: true in src/data/portfolioData.js.'
      );
    }
  };

  return (
    <section className="section contact-section" id="contact">
      {/* Top Tag Divider: —— CONTACT —— */}
      <div className="contact-divider-wrap">
        <span className="contact-divider-line" aria-hidden="true" />
        <span className="contact-tag">CONTACT</span>
        <span className="contact-divider-line" aria-hidden="true" />
      </div>

      {/* Main Title: Let's work together. */}
      <h2 className="contact-title">
        Let's <span className="contact-title-accent">work together.</span>
      </h2>

      {/* Description text */}
      <p className="contact-subtitle">
        {personalInfo.contactSubtitle ||
          "I'm open to software developer roles where I can work with Java, Spring Boot, MySQL and modern web technologies. Email me and I'll get back to you."}
      </p>

      {/* Primary CTA: Email me button */}
      <div className="contact-cta-wrap">
        <a
          href={`mailto:${personalInfo.email}`}
          className="contact-email-btn"
          aria-label="Email Jayveer"
        >
          <Mail size={18} />
          <span>Email me</span>
        </a>
      </div>

      {/* Direct Info Cards Row: EMAIL & PHONE */}
      <div className="contact-cards-row">
        {/* Email Card */}
        <div
          className="contact-card"
          onClick={() => handleCopy(personalInfo.email, 'email')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopy(personalInfo.email, 'email');
            }
          }}
          title="Click to copy email address"
          aria-label={`Copy email address ${personalInfo.email}`}
        >
          <div className="contact-card-icon-box" aria-hidden="true">
            <Mail size={18} />
          </div>
          <div className="contact-card-info">
            <span className="contact-card-label">EMAIL</span>
            <span className="contact-card-value">{personalInfo.email}</span>
          </div>
          {copiedKey === 'email' && (
            <span className="contact-copied-badge">Copied!</span>
          )}
        </div>

        {/* Phone Card */}
        <div
          className="contact-card"
          onClick={() => handleCopy(personalInfo.phone, 'phone')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCopy(personalInfo.phone, 'phone');
            }
          }}
          title="Click to copy phone number"
          aria-label={`Copy phone number ${personalInfo.phone}`}
        >
          <div className="contact-card-icon-box" aria-hidden="true">
            <Phone size={18} />
          </div>
          <div className="contact-card-info">
            <span className="contact-card-label">PHONE</span>
            <span className="contact-card-value">{personalInfo.phone}</span>
          </div>
          {copiedKey === 'phone' && (
            <span className="contact-copied-badge">Copied!</span>
          )}
        </div>
      </div>

      {/* Social & Location Pills Row */}
      <div className="contact-pills-row">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-pill"
          title="Jayveer's GitHub Profile"
        >
          <GithubIcon size={15} />
          <span>GitHub</span>
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-pill"
          title="Jayveer's LinkedIn Profile"
        >
          <LinkedinIcon size={15} />
          <span>LinkedIn</span>
        </a>

        <a
          href={personalInfo.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-pill"
          title="Jayveer's LeetCode Profile"
        >
          <LeetCodeIcon size={15} />
          <span>LeetCode</span>
        </a>

        <span className="contact-pill contact-pill-location" title="Current Location">
          <MapPin size={15} />
          <span>{personalInfo.location}</span>
        </span>
      </div>

      {/* Bottom Resume Links Row */}
      <div className="contact-resume-links-row">
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download={personalInfo.resumeAvailable ? 'Jayveer_Singh_Resume.pdf' : undefined}
          onClick={handleResumeClick}
          className="contact-resume-link"
        >
          Resume — Java / Full-stack (PDF)
        </a>

        <span className="contact-resume-separator" aria-hidden="true">•</span>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download={personalInfo.resumeAvailable ? 'Jayveer_Singh_Resume.pdf' : undefined}
          onClick={handleResumeClick}
          className="contact-resume-link"
        >
          Resume — Spring Boot / Backend (PDF)
        </a>
      </div>
    </section>
  );
}
