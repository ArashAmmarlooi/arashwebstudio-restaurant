'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { testimonials } from '@/data/testimonialsData';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialsSection() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg-secondary text-luxury-text overflow-hidden border-t border-luxury-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading
          tag={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Oversized Quote Mark */}
        <div className="flex justify-center mb-6">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-luxury-gold/20" />
        </div>

        {/* Testimonial Quote Stage */}
        <div className="min-h-[220px] sm:min-h-[200px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1.5 mb-6">
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-luxury-gold fill-luxury-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-text italic leading-relaxed font-light">
                &ldquo;{current.quote[language]}&rdquo;
              </blockquote>

              {/* Author & Publication */}
              <div className="mt-8">
                <p className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-bold">
                  {current.author}
                </p>
                <p className="font-sans text-xs text-luxury-text-muted mt-1">
                  {current.title[language]} · {current.publication}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots & Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            type="button"
            onClick={prevTestimonial}
            data-cursor-hover
            aria-label="Previous quote"
            className="p-2.5 rounded-full border border-luxury-border text-luxury-text-muted hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                data-cursor-hover
                aria-label={`Go to quote ${idx + 1}`}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 h-1 bg-luxury-gold'
                    : 'w-2 h-1 bg-luxury-border hover:bg-luxury-gold/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextTestimonial}
            data-cursor-hover
            aria-label="Next quote"
            className="p-2.5 rounded-full border border-luxury-border text-luxury-text-muted hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
