'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { MagneticButton } from '@/components/common/MagneticButton';
import { ArrowDown, Award, Sparkles, Utensils } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const { openReservation } = useReservationModal();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const statsY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center overflow-hidden pt-28 pb-12 sm:pb-16 select-none bg-[#09090A]"
    >
      {/* Background Cinematic Visual with Parallax & Dark Grading */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Maison Céleste Culinary Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 brightness-75 contrast-110"
        />
        {/* Cinematic Vignette & Radial Light Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-[#0A0A0B]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,178,101,0.08)_0%,transparent_70%)]" />
      </motion.div>

      {/* Top Accolades Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-4"
      >
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-display uppercase tracking-widest text-luxury-gold/90">
          <Award className="w-3.5 h-3.5" />
          <span>{t.hero.badge1}</span>
        </div>
        <span className="hidden sm:inline text-luxury-gold/40">·</span>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-display uppercase tracking-widest text-luxury-gold/90">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.hero.badge2}</span>
        </div>
      </motion.div>

      {/* Main Center Editorial Title & Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center my-auto"
      >
        {/* Subtitle / Location */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <span className="font-display text-[10px] sm:text-xs uppercase text-luxury-gold tracking-superwide font-medium">
            {t.hero.subtitle}
          </span>
        </motion.div>

        {/* Large Restaurant Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F8F5EE] font-normal tracking-tight leading-[0.95]"
        >
          <span className="block">{t.hero.titleLine1}</span>
          <span className="block italic text-luxury-gold font-light mt-1 sm:mt-2">
            {t.hero.titleLine2}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 font-serif text-xl sm:text-2xl md:text-3xl text-[#E8E1D5] italic font-light max-w-2xl"
        >
          &ldquo;{t.hero.tagline}&rdquo;
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* Dual Luxury Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            size="lg"
            variant="primary"
            onClick={() => openReservation()}
            dataCursorText="RESERVE"
            className="w-full sm:w-auto shadow-2xl"
          >
            <span>{t.hero.reserveBtn}</span>
          </MagneticButton>

          <MagneticButton
            size="lg"
            variant="outline"
            onClick={scrollToMenu}
            dataCursorText="MENU"
            className="w-full sm:w-auto border-white/20 text-white hover:text-black"
          >
            <Utensils className="w-4 h-4" />
            <span>{t.hero.viewMenuBtn}</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Bottom Distinction Indicators & Scroll Prompt */}
      <motion.div
        style={{ y: statsY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10"
      >
        {/* Left Feature */}
        <div className="hidden md:flex items-center gap-3 text-left">
          <span className="w-2 h-2 rounded-full bg-luxury-gold animate-ping" />
          <div>
            <p className="font-display text-[10px] uppercase tracking-wider text-luxury-gold">
              {t.hero.stats.stars}
            </p>
            <p className="text-[11px] text-neutral-400">
              Laurentian Fire & Nordic Foraging
            </p>
          </div>
        </div>

        {/* Center Scroll Down Indicator */}
        <button
          type="button"
          onClick={scrollToStory}
          data-cursor-hover
          className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-luxury-gold transition-colors focus:outline-none"
        >
          <span className="font-display text-[10px] tracking-superwide uppercase">
            {t.hero.scrollPrompt}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full border border-luxury-gold/30 flex items-center justify-center group-hover:border-luxury-gold"
          >
            <ArrowDown className="w-3.5 h-3.5 text-luxury-gold" />
          </motion.div>
        </button>

        {/* Right Feature */}
        <div className="hidden md:flex items-center gap-3 text-right">
          <div>
            <p className="font-display text-[10px] uppercase tracking-wider text-luxury-gold">
              {t.hero.stats.bottles}
            </p>
            <p className="text-[11px] text-neutral-400">
              Grand Cru & Biodynamic Vault
            </p>
          </div>
          <span className="w-2 h-2 rounded-full bg-luxury-gold/50" />
        </div>
      </motion.div>
    </section>
  );
}
