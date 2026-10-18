import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'input'
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const initialized = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad) and no touch
    const finePointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const isTouchOnly = 'ontouchstart' in window && !finePointerMedia.matches;

    if (!finePointerMedia.matches || isTouchOnly) {
      return;
    }

    setEnabled(true);
    document.body.classList.add('custom-cursor-enabled');

    const handleTouchStart = () => {
      // If a touch is registered, disable custom cursor to preserve native touch experience
      setEnabled(false);
      document.body.classList.remove('custom-cursor-enabled');
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };

    const handleMouseMove = (e) => {
      if (!initialized.current) {
        mousePos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
        initialized.current = true;
      } else {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
      }

      if (!visible) setVisible(true);

      // Instantly position the dot for precise, zero-latency feedback
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (!target) return;

      // Preserve native cursor on text input fields
      const isInput = target.closest(
        'input, textarea, [contenteditable="true"], .assistant-input'
      );
      if (isInput) {
        setCursorState('input');
        return;
      }

      // Detect interactive targets (buttons, links, cards, tags, chips)
      const isInteractive = target.closest(
        'a, button, [role="button"], .btn, .project-card, .skill-pill, .tech-badge, ' +
        '.stat-card, .achievement-card, .timeline-card, .contact-card, .contact-pill, ' +
        '.contact-email-btn, .assistant-mini-chip, .assistant-chip, .assistant-launcher-btn, ' +
        '.theme-toggle-btn, .brand-pill, .nav-item, .footer-social-btn, .footer-back-to-top'
      );

      if (isInteractive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    // Smooth lerp loop for outer ring
    const render = () => {
      // 0.2 factor gives smooth, responsive trailing
      const factor = 0.2;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor-container ${visible ? 'is-visible' : ''} state-${cursorState} ${
        isClicking ? 'is-clicking' : ''
      }`}
      aria-hidden="true"
    >
      <div ref={ringRef} className="custom-cursor-ring-wrap">
        <div className="custom-cursor-ring" />
      </div>
      <div ref={dotRef} className="custom-cursor-dot-wrap">
        <div className="custom-cursor-dot" />
      </div>
    </div>
  );
}
