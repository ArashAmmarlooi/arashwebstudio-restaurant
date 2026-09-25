'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { signatureDishes } from '@/data/signatureDishes';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { Wine, Flame, Sparkles, Compass } from 'lucide-react';

export function SignatureDishScroll() {
  const { language, t } = useLanguage();
  const { openReservation } = useReservationModal();
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);

  const currentDish = signatureDishes[selectedDishIndex];

  return (
    <section
      id="signatures"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg-secondary text-luxury-text overflow-hidden border-y border-luxury-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.signature.tag}
          title={t.signature.sectionTitle}
          subtitle={t.signature.sectionSubtitle}
        />

        {/* Masterpiece Dish Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {signatureDishes.map((dish, idx) => {
            const isActive = idx === selectedDishIndex;
            return (
              <button
                key={dish.id}
                type="button"
                onClick={() => setSelectedDishIndex(idx)}
                data-cursor-hover
                data-cursor-text="VIEW"
                className={`relative px-5 py-3 rounded-none font-display text-xs uppercase tracking-superwide transition-all duration-300 ${
                  isActive
                    ? 'bg-luxury-gold text-neutral-950 font-semibold shadow-lg'
                    : 'bg-luxury-bg/80 border border-luxury-border text-luxury-text-muted hover:text-luxury-text hover:border-luxury-gold/50'
                }`}
              >
                <span>{dish.title[language]}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDishIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-luxury-gold rotate-45"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Masterpiece Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Interactive Image with Floating Terroir Ingredients */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDish.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-square sm:aspect-[4/3] rounded-none overflow-hidden border border-luxury-border/80 shadow-2xl glass-panel group"
              >
                <Image
                  src={currentDish.image}
                  alt={currentDish.title[language]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Floating Ingredient Callouts on Desktop */}
                {currentDish.ingredients.map((ing, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    style={{ left: ing.x, top: ing.y }}
                    className="absolute hidden sm:flex items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 group/pin z-20"
                  >
                    <div className="w-4 h-4 rounded-full bg-luxury-gold flex items-center justify-center shadow-[0_0_12px_rgba(214,178,101,0.8)] cursor-pointer">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                    </div>
                    <div className="glass-panel-gold px-3 py-1.5 text-left pointer-events-none opacity-90 group-hover/pin:opacity-100 transition-opacity">
                      <p className="font-display text-[9px] uppercase tracking-wider text-luxury-gold font-bold">
                        {ing.name[language]}
                      </p>
                      <p className="text-[8px] text-neutral-300 font-sans">
                        {ing.origin[language]}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Price & Signature Tag */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <span className="glass-panel-gold px-3.5 py-1 text-xs font-serif text-luxury-gold font-bold">
                    {currentDish.price}
                  </span>
                  <span className="glass-panel px-3 py-1 text-[9px] font-display uppercase tracking-widest text-luxury-text-muted">
                    {t.menu.dietaryLegend.SIGNATURE}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Ingredient Chips List */}
            <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
              {currentDish.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[9px] font-display uppercase tracking-wider bg-luxury-bg border border-luxury-border text-luxury-gold"
                >
                  {ing.name[language]} · {ing.origin[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Rich Narrative, Sensory Notes & Pairing */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDish.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <p className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-medium mb-1">
                    {currentDish.subtitle[language]}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-luxury-text font-normal leading-tight">
                    {currentDish.title[language]}
                  </h3>
                  <p className="font-serif text-sm italic text-luxury-text-muted mt-2">
                    &ldquo;{currentDish.tagline[language]}&rdquo;
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-luxury-text-muted leading-relaxed font-light">
                  {currentDish.description[language]}
                </p>

                {/* Sensory Notes Badges */}
                <div>
                  <p className="font-display text-[10px] uppercase tracking-widest text-luxury-gold font-medium mb-2.5">
                    {t.signature.tastingNotesLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentDish.tastingNotes.map((note, idx) => (
                      <span
                        key={idx}
                        className="glass-panel px-3 py-1.5 text-xs font-sans text-luxury-text border border-luxury-border/60"
                      >
                        {note[language]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sommelier Pairing Callout */}
                <div className="glass-panel p-5 border-l-2 border-l-luxury-gold border-luxury-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Wine className="w-4 h-4 text-luxury-gold" />
                    <span className="font-display text-[10px] uppercase tracking-wider text-luxury-gold font-semibold">
                      {t.signature.pairingLabel}
                    </span>
                  </div>
                  <p className="text-xs text-luxury-text-muted leading-relaxed font-sans">
                    {currentDish.sommelierPairing[language]}
                  </p>
                </div>

                {/* CTA Action */}
                <div className="pt-2">
                  <MagneticButton
                    size="md"
                    variant="primary"
                    onClick={() => openReservation({ service: currentDish.title[language] })}
                    dataCursorText="BOOK"
                    className="w-full sm:w-auto"
                  >
                    <span>{t.signature.exploreMore}</span>
                  </MagneticButton>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
