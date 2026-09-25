'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  dataCursorText?: string;
}

export function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
  dataCursorText,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Magnetic pull strength
    const strength = 0.35;
    setPosition({
      x: (clientX - centerX) * strength,
      y: (clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base styling
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-widest',
    md: 'px-7 py-3.5 text-xs tracking-widest',
    lg: 'px-9 py-4.5 text-sm tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-luxury-gold text-neutral-950 hover:bg-luxury-gold-light shadow-[0_4px_24px_rgba(214,178,101,0.25)] hover:shadow-[0_6px_32px_rgba(214,178,101,0.4)] border border-luxury-gold-light/40 font-medium',
    secondary:
      'bg-neutral-900/80 dark:bg-neutral-100/10 text-luxury-text hover:border-luxury-gold border border-luxury-border backdrop-blur-md hover:bg-luxury-gold/15',
    outline:
      'bg-transparent text-luxury-text border border-luxury-gold/60 hover:border-luxury-gold hover:bg-luxury-gold hover:text-neutral-950 transition-all duration-300',
    text: 'bg-transparent text-luxury-text hover:text-luxury-gold p-0 border-b border-transparent hover:border-luxury-gold',
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.5 }}
      className="inline-block relative"
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        data-cursor-hover
        data-cursor-text={dataCursorText}
        className={`group relative overflow-hidden rounded-none font-display uppercase transition-all duration-300 inline-flex items-center justify-center gap-3 select-none disabled:opacity-40 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {/* Subtle Shimmer Ray */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
