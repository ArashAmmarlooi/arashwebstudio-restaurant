'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export function HorizontalExperience() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      act: 'ACT I',
      title: t.experience.act1Title,
      desc: t.experience.act1Desc,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
      accent: 'Candlelight & Bronze',
    },
    {
      act: 'ACT II',
      title: t.experience.act2Title,
      desc: t.experience.act2Desc,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
      accent: 'Distilled Botanicals',
    },
    {
      act: 'ACT III',
      title: t.experience.act3Title,
      desc: t.experience.act3Desc,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=85',
      accent: 'Live Birchwood Flame',
    },
    {
      act: 'ACT IV',
      title: t.experience.act4Title,
      desc: t.experience.act4Desc,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=85',
      accent: '1,400+ Vintage Vault',
    },
    {
      act: 'ACT V',
      title: t.experience.act5Title,
      desc: t.experience.act5Desc,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85',
      accent: 'Sweet Confectionery',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg text-luxury-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <SectionHeading
            tag={t.experience.tag}
            title={t.experience.title}
            subtitle={t.experience.subtitle}
            align="left"
            className="mb-0"
          />
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scroll('left')}
            data-cursor-hover
            aria-label="Scroll left"
            className="w-12 h-12 rounded-full border border-luxury-border flex items-center justify-center text-luxury-text hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300 bg-luxury-bg/60"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            data-cursor-hover
            aria-label="Scroll right"
            className="w-12 h-12 rounded-full border border-luxury-border flex items-center justify-center text-luxury-text hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300 bg-luxury-bg/60"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Cards Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8 pt-2 scroll-smooth select-none"
      >
        {chapters.map((chap, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="shrink-0 w-[85vw] sm:w-[420px] md:w-[460px] group flex flex-col glass-panel border border-luxury-border/80 overflow-hidden"
          >
            {/* Card Image */}
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={chap.image}
                alt={chap.title}
                fill
                sizes="(max-width: 768px) 85vw, 460px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 glass-panel-gold px-3 py-1">
                <span className="font-display text-[9px] uppercase tracking-superwide text-luxury-gold font-semibold">
                  {chap.act}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 text-right">
                <span className="text-[10px] font-sans text-neutral-300 italic">
                  {chap.accent}
                </span>
              </div>
            </div>

            {/* Card Narrative */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-luxury-text group-hover:text-luxury-gold transition-colors duration-300 mb-3">
                  {chap.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-luxury-text-muted leading-relaxed font-light">
                  {chap.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-luxury-border/40 flex items-center justify-between text-[10px] font-display uppercase tracking-widest text-luxury-gold">
                <span>Maison Céleste Montreal</span>
                <span>0{idx + 1} / 05</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="font-display text-[10px] uppercase tracking-superwide text-luxury-text-faint">
          {t.experience.dragPrompt}
        </p>
      </div>
    </section>
  );
}
