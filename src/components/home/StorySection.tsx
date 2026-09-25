'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Sparkles, Quote } from 'lucide-react';

export function StorySection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const image1Y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const image2Y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg text-luxury-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag={t.story.tag}
          title={t.story.title}
          subtitle={t.story.subtitle}
        />

        {/* Asymmetric Chapter 1: The Hearth & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-36">
          {/* Left Large Photography with Parallax */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ y: image1Y }}
              className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden rounded-none border border-luxury-border/60 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                alt="Chef preparing live fire hearth"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel-gold p-4 backdrop-blur-md">
                <p className="font-display text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
                  L&apos;ART DE LA BRAISE
                </p>
                <p className="font-serif text-sm italic text-luxury-text mt-0.5">
                  Laurentian birch coals seasoned over 18 months
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Narrative Copy & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-medium mb-3 block">
                01 · THE ORIGIN
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-luxury-text leading-tight mb-6">
                Culinary intimacy born from wild landscapes and timeless discipline.
              </h3>
              <p className="font-sans text-sm sm:text-base text-luxury-text-muted leading-relaxed mb-6 font-light">
                {t.story.para1}
              </p>
              <p className="font-sans text-sm sm:text-base text-luxury-text-muted leading-relaxed font-light">
                {t.story.para2}
              </p>

              {/* Key Figures Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-luxury-border/60">
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-luxury-gold font-light">
                    {t.story.stat1Number}
                  </p>
                  <p className="font-display text-[9px] uppercase tracking-wider text-luxury-text-muted mt-1 leading-tight">
                    {t.story.stat1Label}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-luxury-gold font-light">
                    {t.story.stat2Number}
                  </p>
                  <p className="font-display text-[9px] uppercase tracking-wider text-luxury-text-muted mt-1 leading-tight">
                    {t.story.stat2Label}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl sm:text-3xl text-luxury-gold font-light">
                    {t.story.stat3Number}
                  </p>
                  <p className="font-display text-[9px] uppercase tracking-wider text-luxury-text-muted mt-1 leading-tight">
                    {t.story.stat3Label}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Asymmetric Chapter 2: The Chef’s Quote & Cellar (Reversed Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text / Quote Banner */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 sm:p-10 border border-luxury-gold/30 relative"
            >
              <Quote className="w-10 h-10 text-luxury-gold/30 mb-4" />
              <blockquote className="font-serif text-xl sm:text-2xl text-luxury-text italic leading-snug mb-6">
                &ldquo;{t.story.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-luxury-border/50">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-luxury-gold/40 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=85"
                    alt="Chef Éléonore"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-wider text-luxury-text font-medium">
                    {t.story.quoteAuthor}
                  </p>
                  <p className="text-[10px] text-luxury-gold font-display uppercase tracking-widest">
                    Maison Céleste Montréal
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              style={{ y: image2Y }}
              className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden rounded-none border border-luxury-border/60 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85"
                alt="Historic limestone wine cellar"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 right-6 glass-panel-gold p-4 text-right backdrop-blur-md">
                <p className="font-display text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">
                  LA CRYPTE SECRÈTE
                </p>
                <p className="font-serif text-sm italic text-luxury-text mt-0.5">
                  1,400+ Bottles preserved in 18th-century stone vaults
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
