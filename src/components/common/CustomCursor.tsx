'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring for outer ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on devices with a fine (mouse) pointer, and respect reduced-motion preference
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track interactive elements
    const handleInteractiveEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest('button, a, input, select, textarea, [data-cursor-hover], [role="button"]');
      if (interactiveEl) {
        setIsHovered(true);
        const textAttr = interactiveEl.getAttribute('data-cursor-text');
        if (textAttr) {
          setCursorText(textAttr);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleInteractiveEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleInteractiveEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-luxury-gold/50 bg-luxury-gold/5 backdrop-blur-[1px] transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 54) : 32,
          height: isHovered ? (cursorText ? 80 : 54) : 32,
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered ? 'var(--accent-gold)' : 'rgba(214, 178, 101, 0.45)',
          backgroundColor: isHovered ? 'rgba(214, 178, 101, 0.12)' : 'rgba(214, 178, 101, 0.03)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {cursorText && (
          <span className="font-display text-[9px] uppercase tracking-widest text-luxury-gold font-medium">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-luxury-gold shadow-[0_0_12px_rgba(214,178,101,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 0 : 6) : 4,
          height: isHovered ? (cursorText ? 0 : 6) : 4,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
