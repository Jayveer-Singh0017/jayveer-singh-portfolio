import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="footer-layout">
          {/* Left section: Brand mark, Name, Title */}
          <div className="footer-left">
            <div className="footer-brand-badge" aria-hidden="true">
              <span className="brand-monogram">JS</span>
            </div>
            <div className="footer-brand-info">
              <div className="footer-brand-name">{personalInfo.name}</div>
              <div className="footer-brand-role">{personalInfo.role}</div>
            </div>
          </div>

          {/* Center section: Social and professional links */}
          <nav className="footer-center" aria-label="Social and professional links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Jayveer's GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Jayveer's LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Jayveer's LeetCode Profile"
              title="LeetCode"
            >
              <LeetCodeIcon size={16} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              aria-label="Send Email to Jayveer"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </nav>

          {/* Right section: Dynamic copyright & Back to top */}
          <div className="footer-right">
            <span className="footer-copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
