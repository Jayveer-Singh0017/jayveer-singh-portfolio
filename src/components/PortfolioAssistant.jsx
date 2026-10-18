import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ArrowRight,
  Bot,
  RotateCcw
} from 'lucide-react';
import {
  personalInfo,
  skillsData,
  projectsData,
  achievementsData,
  educationData
} from '../data/portfolioData';

// Suggested questions to guide visitors
const SUGGESTED_QUESTIONS = [
  'What technologies does Jayveer use?',
  'Tell me about his projects.',
  'Explain the AI Resume Analyzer.',
  'Tell me about his Smart Research Assistant.',
  'What is his educational background?',
  'What are his achievements?',
  'How can I contact Jayveer?'
];

// Straightforward rule-based intent and keyword matching
function getAssistantReply(query) {
  const q = query.toLowerCase().trim();

  // 1. AI Resume Analyzer
  if (
    q.includes('ai resume') ||
    q.includes('resume analyzer') ||
    q.includes('ats') ||
    (q.includes('resume') && (q.includes('analyzer') || q.includes('project') || q.includes('gemini')))
  ) {
    const proj = projectsData.find((p) => p.id === 'ai-resume-analyzer');
    return {
      text: `AI Resume Analyzer is a full-stack Java application built with Spring Boot, Google Gemini API, and Spring WebClient. It accepts PDF resume uploads, generates ATS-oriented match scoring, identifies strengths and missing keywords, suggests relevant roles, and provides an interactive AI chat interface.`,
      sectionId: 'projects',
      actionLabel: 'View AI Resume Analyzer'
    };
  }

  // 2. Smart Research Assistant
  if (
    q.includes('smart research') ||
    q.includes('research assistant') ||
    q.includes('flashcard') ||
    q.includes('hindi')
  ) {
    return {
      text: `Smart Research Assistant is a research and productivity tool built with Java, Spring Boot, and Gemini API via asynchronous Spring WebClient. It provides automated content summarization, concept suggestions, Hindi translation for bilingual accessibility, and flashcard generation for active recall.`,
      sectionId: 'projects',
      actionLabel: 'View Research Assistant'
    };
  }

  // 3. Book Store Management System
  if (
    q.includes('book store') ||
    q.includes('bookstore') ||
    q.includes('crud') ||
    q.includes('thymeleaf') ||
    q.includes('inventory')
  ) {
    return {
      text: `Book Store Management System is an enterprise CRUD web application built with Spring Boot, Spring Data JPA, Hibernate ORM, MySQL, and Thymeleaf. It supports complete transactional operations (create, read, update, delete) and inventory catalog browsing with a clean multi-tier architecture.`,
      sectionId: 'projects',
      actionLabel: 'View Bookstore Project'
    };
  }

  // 4. Projects (General)
  if (
    q.includes('project') ||
    q.includes('application') ||
    q.includes('work') ||
    q.includes('built')
  ) {
    return {
      text: `Jayveer has built 3 key full-stack software applications:
• AI Resume Analyzer (Spring Boot + Gemini API + Spring WebClient)
• Smart Research Assistant (Spring Boot + WebClient + Hindi translation)
• Book Store Management System (Spring Boot + Spring Data JPA + MySQL + Thymeleaf)`,
      sectionId: 'projects',
      actionLabel: 'Jump to Projects'
    };
  }

  // 5. Skills & Tech Stack
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('technolog') ||
    q.includes('language') ||
    q.includes('framework') ||
    q.includes('tool') ||
    q.includes('java') ||
    q.includes('spring') ||
    q.includes('backend') ||
    q.includes('frontend') ||
    q.includes('database') ||
    q.includes('sql')
  ) {
    return {
      text: `Jayveer specializes in Java Full-Stack Development:
• Languages: Java, JavaScript (ES6+), SQL
• Backend: Spring Boot, Spring Core, Spring MVC, Spring Data JPA, Hibernate, REST APIs, Spring Security & JWT
• Database: MySQL, Relational Schema Design, SQL Queries
• Frontend: HTML5, CSS3, JavaScript, Thymeleaf, React
• Tools: JUnit, Mockito, Git, GitHub, Maven, Postman, IntelliJ IDEA`,
      sectionId: 'skills',
      actionLabel: 'Jump to Skills'
    };
  }

  // 6. Education / Degree / College / University
  if (
    q.includes('education') ||
    q.includes('degree') ||
    q.includes('college') ||
    q.includes('bca') ||
    q.includes('university') ||
    q.includes('rmpsu') ||
    q.includes('cgpa') ||
    q.includes('academic') ||
    q.includes('graduate')
  ) {
    return {
      text: `Jayveer holds a Bachelor of Computer Applications (BCA) from D.S. College, Aligarh, affiliated with Raja Mahendra Pratap Singh State University (RMPSU), batch 2024–2025, graduating with a CGPA of 8.2 / 10.`,
      sectionId: 'experience',
      actionLabel: 'Jump to Education & Timeline'
    };
  }

  // 7. Achievements & LeetCode
  if (
    q.includes('achievement') ||
    q.includes('leetcode') ||
    q.includes('award') ||
    q.includes('badge') ||
    q.includes('certificate') ||
    q.includes('certification') ||
    q.includes('streak') ||
    q.includes('employability') ||
    q.includes('nsdc') ||
    q.includes('solve')
  ) {
    return {
      text: `Jayveer's verified accomplishments include:
• Solved 250+ LeetCode problems focusing on Data Structures & Algorithms
• LeetCode 50 Days Badge for daily problem-solving consistency
• 1st Place in the 7-day Employability Skills Development Program
• NSDC Domestic Data Entry Operator Certificate`,
      sectionId: 'achievements',
      actionLabel: 'Jump to Achievements'
    };
  }

  // 8. Contact & Hiring Details
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('hire') ||
    q.includes('reach') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('location') ||
    q.includes('city') ||
    q.includes('call')
  ) {
    return {
      text: `You can reach Jayveer directly:
• Email: ${personalInfo.email}
• Location: ${personalInfo.location} (open to relocation)
• GitHub: github.com/Jayveer-Singh0017
• LinkedIn: Configurable placeholder
Jayveer is actively seeking entry-level Java Developer, Java Backend, and Java Full-Stack roles!`,
      sectionId: 'contact',
      actionLabel: 'Jump to Contact Section'
    };
  }

  // 9. Resume
  if (q.includes('resume') || q.includes('cv') || q.includes('pdf')) {
    return {
      text: `Jayveer's resume can be downloaded directly from the Hero section. You can also view his verified academic record, 250+ LeetCode milestones, and full-stack projects here on this portfolio.`,
      sectionId: 'hero',
      actionLabel: 'Go to Resume Download'
    };
  }

  // 10. Greetings
  if (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.startsWith('hi ') ||
    q.startsWith('hello ') ||
    q.includes('good morning') ||
    q.includes('good afternoon') ||
    q.includes('good evening')
  ) {
    return {
      text: `Hello! I'm Jayveer's rule-based portfolio assistant. Feel free to ask about his Java & Spring Boot tech stack, projects, BCA education, or contact details.`,
      sectionId: null,
      actionLabel: null
    };
  }

  // Polite Fallback
  return {
    text: `I'm designed to answer questions about Jayveer's portfolio. Try asking about his skills, projects, education, achievements, or contact information.`,
    sectionId: null,
    actionLabel: null
  };
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hi! I'm Jayveer's rule-based portfolio assistant. Feel free to ask me anything about his technical stack, Spring Boot projects, BCA education, or how to reach him.`,
      sectionId: null,
      actionLabel: null
    }
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    // Calculate response
    const reply = getAssistantReply(query);
    const assistantMsg = {
      id: `assistant-${Date.now() + 1}`,
      sender: 'assistant',
      text: reply.text,
      sectionId: reply.sectionId,
      actionLabel: reply.actionLabel
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInputQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: `Chat reset. Ask me about Jayveer's skills, Spring Boot projects, BCA education, or contact details.`,
        sectionId: null,
        actionLabel: null
      }
    ]);
  };

  return (
    <div className="portfolio-assistant-container">
      {/* Floating Chat Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`assistant-launcher-btn ${isOpen ? 'active' : ''}`}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open Jayveer’s portfolio assistant'}
        title={isOpen ? 'Close Assistant' : 'Ask Portfolio Assistant'}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <Bot size={20} />
            <span className="launcher-text">Assistant</span>
            <span className="launcher-status-dot" aria-hidden="true" />
          </>
        )}
      </button>

      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          className="assistant-panel"
          role="dialog"
          aria-label="Jayveer's Portfolio Assistant"
          aria-modal="false"
        >
          {/* Header */}
          <div className="assistant-panel-header">
            <div className="assistant-header-title-wrap">
              <div className="assistant-avatar" aria-hidden="true">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="assistant-header-title">Jayveer's Portfolio Assistant</h3>
                <span className="assistant-header-subtitle">
                  Rule-based • Instant Portfolio Answers
                </span>
              </div>
            </div>

            <div className="assistant-header-actions">
              <button
                onClick={handleResetChat}
                className="assistant-header-btn"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RotateCcw size={14} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="assistant-header-btn"
                title="Close assistant"
                aria-label="Close assistant"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="assistant-messages-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`assistant-message-row ${
                  msg.sender === 'user' ? 'user-row' : 'bot-row'
                }`}
              >
                <div
                  className={`assistant-bubble ${
                    msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'
                  }`}
                >
                  <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>

                  {/* Section Jump Button */}
                  {msg.sectionId && (
                    <button
                      onClick={() => scrollToSection(msg.sectionId)}
                      className="assistant-section-jump-btn"
                    >
                      <span>{msg.actionLabel || 'Jump to section'}</span>
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="assistant-suggestions-bar">
            <span className="assistant-suggestions-label">Suggested:</span>
            <div className="assistant-chips-scroll">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="assistant-mini-chip"
                >
                  <Sparkles size={11} style={{ color: 'var(--accent)' }} />
                  <span>{q}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSubmit} className="assistant-input-form">
            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about skills, projects, education..."
              className="assistant-input"
              maxLength={200}
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="assistant-send-btn"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
