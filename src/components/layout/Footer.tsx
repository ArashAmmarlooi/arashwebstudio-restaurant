'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { ArrowUpRight, Award, Compass, Heart, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';

export function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const { openReservation } = useReservationModal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navLinks = [
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.signature, href: '#signatures' },
    { label: t.nav.chef, href: '#chef' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.location, href: '#location' },
  ];

  return (
    <footer className="relative bg-luxury-bg-secondary text-luxury-text border-t border-luxury-border/60 overflow-hidden pt-20 sm:pt-28 pb-12">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-luxury-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter & VIP Table Circle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 sm:pb-20 border-b border-luxury-border/60">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-luxury-gold" />
              <span className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-medium">
                {t.newsletter.tag}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-text font-normal leading-tight">
              {t.newsletter.title}
            </h3>
            <p className="mt-3 font-sans text-sm text-luxury-text-muted max-w-lg leading-relaxed">
              {t.newsletter.subtitle}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {subscribed ? (
              <div className="glass-panel-gold p-6 rounded-none border border-luxury-gold/40 text-luxury-gold font-display text-xs tracking-wider flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>{t.newsletter.successMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  className="flex-1 bg-luxury-bg border border-luxury-border focus:border-luxury-gold px-5 py-3.5 text-xs font-sans text-luxury-text placeholder-luxury-text-faint focus:outline-none transition-colors duration-300"
                />
                <MagneticButton size="md" variant="primary" type="submit">
                  <span>{t.newsletter.button}</span>
                </MagneticButton>
              </form>
            )}
            <p className="mt-2.5 text-[11px] text-luxury-text-faint">
              {t.newsletter.disclaimer}
            </p>
          </div>
        </div>

        {/* Middle Navigation & Information Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 py-16 sm:py-20 border-b border-luxury-border/60">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-luxury-gold/50 flex items-center justify-center">
                <span className="font-serif text-base text-luxury-gold italic">M</span>
              </div>
              <span className="font-display text-sm uppercase tracking-widest text-luxury-text font-medium">
                MAISON CÉLESTE
              </span>
            </div>
            <p className="font-serif text-sm italic text-luxury-text-muted leading-relaxed mb-6">
              {t.footer.quote}
            </p>
            <div className="flex items-center gap-4 text-xs font-display text-luxury-gold">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Michelin Selection</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Old Montreal</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-medium mb-5">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-3 font-display text-xs tracking-wider uppercase text-luxury-text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    className="hover:text-luxury-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Booking */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-medium mb-5">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-3 text-xs text-luxury-text-muted font-sans">
              <div className="flex justify-between">
                <span>{t.location.hoursMonThu}:</span>
                <span className="font-medium text-luxury-text">{t.location.hoursMonThuTime}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.location.hoursFriSat}:</span>
                <span className="font-medium text-luxury-text">{t.location.hoursFriSatTime}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.location.hoursSun}:</span>
                <span className="font-medium text-luxury-text">{t.location.hoursSunTime}</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-luxury-border/40">
              <button
                type="button"
                onClick={() => openReservation()}
                data-cursor-hover
                data-cursor-text="BOOK"
                className="font-display text-xs tracking-superwide uppercase text-luxury-gold hover:text-luxury-gold-light font-semibold inline-flex items-center gap-2"
              >
                <span>{t.hero.reserveBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Private Dining & Concierge */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-superwide text-luxury-gold font-medium mb-5">
              {t.footer.privateEventsTitle}
            </h4>
            <p className="text-xs text-luxury-text-muted leading-relaxed mb-4">
              {t.footer.privateEventsDesc}
            </p>
            <div className="space-y-2 text-xs text-luxury-text-muted">
              <a
                href={`mailto:${t.footer.inquiriesEmail}`}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{t.footer.inquiriesEmail}</span>
              </a>
              <a
                href={`tel:${t.location.contactPhone}`}
                className="flex items-center gap-2 hover:text-luxury-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{t.location.contactPhone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{t.location.addressValue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Typographic Banner */}
        <div className="pt-12 sm:pt-16 pb-8 text-center select-none overflow-hidden">
          <p className="font-display text-[9vw] font-light tracking-[0.18em] uppercase text-luxury-text/10 hover:text-luxury-gold/20 transition-colors duration-700 whitespace-nowrap leading-none">
            MAISON CÉLESTE
          </p>
        </div>

        {/* Copyright, Language Selector & Legal */}
        <div className="pt-8 border-t border-luxury-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-luxury-text-faint font-sans">
          <p>
            © {new Date().getFullYear()} Maison Céleste Inc. {t.footer.allRights}
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="font-display uppercase tracking-widest text-luxury-gold hover:text-luxury-gold-light"
            >
              {language === 'en' ? 'Passer en Français (FR)' : 'Switch to English (EN)'}
            </button>
            <a href="#hero" className="hover:text-luxury-text transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#hero" className="hover:text-luxury-text transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
