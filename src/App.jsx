import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioAssistant from './components/PortfolioAssistant';
import CustomCursor from './components/CustomCursor';

export default function App() {
  // Theme state: dark by default as requested, with localStorage persistence
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jayveer_portfolio_theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jayveer_portfolio_theme', theme);

    // Update meta theme-color for mobile address bars
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === 'dark' ? '#171615' : '#fbfaf7'
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll spy for active section detection
  useEffect(() => {
    const sectionIds = [
      'about',
      'experience',
      'projects',
      'skills',
      'achievements',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }

      // If at very top, default to 'about' or no highlight
      if (window.scrollY < 250) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      {/* Floating Navigation Pill */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="site-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Floating Portfolio Assistant */}
      <PortfolioAssistant />

      <Footer />
    </div>
  );
}
