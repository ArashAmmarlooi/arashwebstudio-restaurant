'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { MapPin, Clock, Phone, Mail, Car, Sparkles, Navigation } from 'lucide-react';

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg text-luxury-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.location.tag}
          title={t.location.title}
          subtitle={t.location.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: Contact Info & Opening Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass-panel p-8 sm:p-10 border border-luxury-border/80">
            <div>
              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-semibold mb-1">
                    {t.location.addressLabel}
                  </h4>
                  <p className="font-serif text-lg sm:text-xl text-luxury-text font-light">
                    {t.location.addressValue}
                  </p>
                  <p className="text-xs text-luxury-text-muted mt-0.5">
                    Historic Old Port / Place d&apos;Armes
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-luxury-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-semibold mb-2">
                    {t.location.hoursLabel}
                  </h4>
                  <div className="space-y-1.5 text-xs text-luxury-text-muted font-sans">
                    <div className="flex justify-between py-1 border-b border-luxury-border/30">
                      <span>{t.location.hoursMonThu}</span>
                      <span className="font-medium text-luxury-text">{t.location.hoursMonThuTime}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-luxury-border/30">
                      <span>{t.location.hoursFriSat}</span>
                      <span className="font-medium text-luxury-text">{t.location.hoursFriSatTime}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>{t.location.hoursSun}</span>
                      <span className="font-medium text-luxury-text">{t.location.hoursSunTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valet & Dress Code */}
              <div className="pt-4 border-t border-luxury-border/50 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-luxury-text-muted">
                  <Car className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>{t.location.valetValue}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-luxury-text-muted">
                  <Sparkles className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>{t.location.dressCodeValue}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <MagneticButton
                size="md"
                variant="primary"
                href="https://maps.google.com/?q=428+Rue+Saint-Pierre+Montreal+QC"
                target="_blank"
                rel="noopener noreferrer"
                dataCursorText="MAP"
                className="w-full sm:w-auto text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.location.directionsBtn}</span>
              </MagneticButton>

              <MagneticButton
                size="md"
                variant="outline"
                href={`tel:${t.location.contactPhone}`}
                dataCursorText="CALL"
                className="w-full sm:w-auto text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.location.callBtn}</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right: Stylized Luxury Architectural Map Canvas */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] rounded-none overflow-hidden border border-luxury-border/80 shadow-2xl glass-panel">
            {/* Map Background Grid & Landmark Elements */}
            <div className="absolute inset-0 bg-[#121215] dark:bg-[#0E0E11] p-6 flex flex-col justify-between">
              {/* Street Grid Graphic Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(214, 178, 101, 0.2)" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Saint-Laurent River curve aesthetic */}
                <path
                  d="M 0 320 Q 250 280 500 350 T 1000 320"
                  fill="none"
                  stroke="rgba(214, 178, 101, 0.35)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Old Montreal River Note */}
              <div className="relative z-10 flex justify-between items-start text-[10px] font-display uppercase tracking-superwide text-luxury-gold/70">
                <span>VIEUX-MONTRÉAL · SECTOR HISTORIQUE</span>
                <span>45.5017° N, 73.5574° W</span>
              </div>

              {/* Center Beacon Pin */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/15 animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full border border-luxury-gold bg-[#0A0A0B] flex items-center justify-center text-luxury-gold shadow-2xl">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                  </div>
                </div>

                <div className="mt-4 glass-panel-gold px-5 py-2.5 text-center shadow-2xl">
                  <p className="font-display text-xs uppercase tracking-widest text-luxury-gold font-bold">
                    MAISON CÉLESTE
                  </p>
                  <p className="font-serif text-[11px] italic text-neutral-300">
                    428 Rue Saint-Pierre, Old Montreal
                  </p>
                </div>
              </div>

              {/* Bottom Surroundings */}
              <div className="relative z-10 flex justify-between items-end text-[10px] text-neutral-400 font-sans">
                <span>Saint-Laurent Waterfront (3 min walk)</span>
                <span>Metro Place-d&apos;Armes (5 min walk)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
