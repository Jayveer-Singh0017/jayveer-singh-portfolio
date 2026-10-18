import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'experience', num: '02', label: 'Career Journey & Education' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'skills', num: '04', label: 'Skills' },
  { id: 'achievements', num: '05', label: 'Achievements' },
  { id: 'contact', num: '06', label: 'Contact' }
];

export default function Navbar({ activeSection, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="floating-nav-container" aria-label="Main Navigation">
        <nav className="floating-nav">
          {/* Brand Logo & Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="brand-pill"
            aria-label="Back to top"
          >
            {/* Stylized 8-pointed starburst matching reference */}
            <span className="brand-icon-star" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
              </svg>
            </span>
            <span>Jayveer</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-num">{link.num}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={17} strokeWidth={2} />
            ) : (
              <Moon size={17} strokeWidth={2} />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                <span className="brand-icon-star" style={{ color: 'var(--accent)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
                  </svg>
                </span>
                <span>{personalInfo.name}</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="theme-toggle-btn"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  <span className="nav-num">{link.num}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
