'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Award, Compass, Sparkles, Star } from 'lucide-react';

export function ChefSection() {
  const { t } = useLanguage();

  return (
    <section
      id="chef"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg-secondary text-luxury-text overflow-hidden border-t border-luxury-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.chef.tag}
          title={t.chef.title}
          subtitle={t.chef.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Layered Editorial Portraits */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-luxury-border/80 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
                alt="Chef Éléonore de Saint-Germain"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top filter grayscale-[25%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Layered Typography over Image */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-bold">
                  EXECUTIVE CHEF & FOUNDER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-light mt-1">
                  Éléonore de Saint-Germain
                </h3>
                <p className="font-serif text-xs italic text-neutral-300 mt-1">
                  Institut Paul Bocuse · 3-Star Parisian & Nordic Apprenticeship
                </p>
              </div>
            </motion.div>

            {/* Overlapping Secondary Card (Sommelier) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:flex absolute -bottom-8 -right-8 w-60 glass-panel-gold p-4 flex-col border border-luxury-gold/40 shadow-2xl z-20"
            >
              <div className="relative h-28 w-full mb-3 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=85"
                  alt="Marcus Weiss Master Sommelier"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-[8px] uppercase tracking-widest text-luxury-gold font-semibold">
                MAÎTRE SOMMELIER
              </span>
              <p className="font-serif text-sm text-luxury-text font-medium">Marcus Weiss</p>
              <p className="text-[9px] text-luxury-text-muted mt-0.5">Court of Master Sommeliers</p>
            </motion.div>
          </div>

          {/* Right: Narrative & Accolades */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="border-l-2 border-luxury-gold pl-6">
                <p className="font-serif text-lg sm:text-xl text-luxury-text italic leading-relaxed">
                  {t.chef.bio2}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-luxury-text-muted leading-relaxed font-light">
                {t.chef.bio1}
              </p>

              {/* Cellar Note */}
              <div className="pt-4 border-t border-luxury-border/60">
                <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-semibold mb-2">
                  {t.chef.sommelierTitle}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-luxury-text-muted leading-relaxed font-light">
                  {t.chef.sommelierBio}
                </p>
              </div>

              {/* Distinctions Grid */}
              <div className="pt-6">
                <p className="font-display text-[10px] uppercase tracking-widest text-luxury-gold font-medium mb-4">
                  {t.chef.awardsLabel}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="glass-panel p-3.5 border border-luxury-border/60 flex items-center gap-2.5">
                    <Star className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-display text-[10px] uppercase tracking-wider text-luxury-text">
                      {t.chef.award1}
                    </span>
                  </div>
                  <div className="glass-panel p-3.5 border border-luxury-border/60 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-display text-[10px] uppercase tracking-wider text-luxury-text">
                      {t.chef.award2}
                    </span>
                  </div>
                  <div className="glass-panel p-3.5 border border-luxury-border/60 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-luxury-gold shrink-0" />
                    <span className="font-display text-[10px] uppercase tracking-wider text-luxury-text">
                      {t.chef.award3}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
