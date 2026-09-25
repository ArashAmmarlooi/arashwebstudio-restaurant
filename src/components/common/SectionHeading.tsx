'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} mb-12 sm:mb-16 md:mb-20 ${className}`}>
      {/* Category Tag with Gold Accent Lines */}
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-3.5"
        >
          <span className="w-6 sm:w-10 h-[1px] bg-luxury-gold/50" />
          <span className="font-display text-[10px] sm:text-xs uppercase tracking-superwide text-luxury-gold font-medium">
            {tag}
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-luxury-gold/50" />
        </motion.div>
      )}

      {/* Main Editorial Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-luxury-text font-normal tracking-tight leading-[1.15] max-w-4xl"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Poetic Line */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 font-display text-[11px] sm:text-xs uppercase tracking-widest text-luxury-text-muted max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
