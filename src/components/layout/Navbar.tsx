'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { Sun, Moon, Menu as MenuIcon, X, Calendar, Phone, MapPin } from 'lucide-react';
import { MagneticButton } from '@/components/common/MagneticButton';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { openReservation } = useReservationModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.story, href: '#story' },
    { label: t.nav.signature, href: '#signatures' },
    { label: t.nav.chef, href: '#chef' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.location, href: '#location' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Over the cinematic hero the background is always dark — use light nav chrome
  // even in light mode so links stay readable (theme tokens alone are too dark).
  const overHero = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-panel py-3.5 border-b border-luxury-border shadow-2xl'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            data-cursor-hover
            data-cursor-text="HOME"
            className={`group flex items-center gap-3 focus:outline-none transition-colors duration-300 ${
              overHero ? 'text-white' : 'text-luxury-text'
            }`}
          >
            <div
              className={`relative w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-300 ${
                overHero
                  ? 'border-white/35 group-hover:border-luxury-gold-light'
                  : 'border-luxury-gold/40 group-hover:border-luxury-gold'
              }`}
            >
              <span
                className={`font-serif text-lg tracking-widest italic font-light ${
                  overHero ? 'text-luxury-gold-light' : 'text-luxury-gold'
                }`}
              >
                M
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-sm sm:text-base tracking-superwide uppercase font-medium leading-none transition-colors duration-300 ${
                  overHero ? 'group-hover:text-luxury-gold-light' : 'group-hover:text-luxury-gold'
                }`}
              >
                Maison Céleste
              </span>
              <span
                className={`font-serif text-[9px] tracking-widest uppercase mt-0.5 ${
                  overHero ? 'text-luxury-gold-light' : 'text-luxury-gold'
                }`}
              >
                Montréal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                data-cursor-hover
                className={`group relative font-display text-[11px] uppercase tracking-superwide transition-colors duration-300 py-1 ${
                  overHero
                    ? 'text-white/80 hover:text-white'
                    : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Controls (Language, Theme, Reserve CTA) */}
          <div className="hidden lg:flex items-center gap-4 sm:gap-5">
            {/* Language Switcher */}
            <div
              className={`flex items-center rounded-full border p-1 backdrop-blur-sm text-[11px] font-display font-medium transition-colors duration-300 ${
                overHero
                  ? 'border-white/25 bg-black/25'
                  : 'border-luxury-border bg-luxury-bg/50'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                data-cursor-hover
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-luxury-gold text-neutral-950 font-semibold shadow-sm'
                    : overHero
                      ? 'text-white/75 hover:text-white'
                      : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('fr')}
                data-cursor-hover
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-luxury-gold text-neutral-950 font-semibold shadow-sm'
                    : overHero
                      ? 'text-white/75 hover:text-white'
                      : 'text-luxury-text-muted hover:text-luxury-text'
                }`}
              >
                FR
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              data-cursor-hover
              data-cursor-text="THEME"
              aria-label="Toggle luxury theme"
              className={`p-2 rounded-full border transition-colors duration-300 ${
                overHero
                  ? 'border-white/25 bg-black/25 text-white/80 hover:text-luxury-gold-light hover:border-luxury-gold-light'
                  : 'border-luxury-border bg-luxury-bg/50 text-luxury-text-muted hover:text-luxury-gold hover:border-luxury-gold'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Reserve CTA */}
            <MagneticButton
              size="sm"
              variant="primary"
              onClick={() => openReservation()}
              dataCursorText="BOOK"
              className="hidden xl:inline-flex"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.reserveTable}</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger & Quick Actions */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="px-2.5 py-1 rounded-full border border-luxury-border text-[10px] font-display uppercase tracking-wider text-luxury-gold"
            >
              {language.toUpperCase()}
            </button>

            {/* Theme Toggle Mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full border ${
                overHero
                  ? 'border-white/25 text-white/80'
                  : 'border-luxury-border text-luxury-text-muted'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Burger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className={`p-2 focus:outline-none transition-colors ${
                overHero ? 'text-white hover:text-luxury-gold-light' : 'text-luxury-text hover:text-luxury-gold'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-luxury-bg flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden overflow-y-auto"
          >
            {/* Top Tag */}
            <div className="text-center">
              <span className="font-display text-[10px] tracking-superwide uppercase text-luxury-gold">
                HAUTE GASTRONOMIE · MONTRÉAL
              </span>
            </div>

            {/* Links List */}
            <nav className="flex flex-col items-center gap-5 my-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  className="font-serif text-2xl sm:text-3xl text-luxury-text hover:text-luxury-gold transition-colors tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Actions & Quick Info */}
            <div className="flex flex-col items-center gap-6 border-t border-luxury-border/60 pt-6">
              <MagneticButton
                size="md"
                variant="primary"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openReservation();
                }}
                className="w-full max-w-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.reserveTable}</span>
              </MagneticButton>

              <div className="flex flex-col items-center gap-2 text-center text-xs text-luxury-text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>{t.nav.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                  <a href={`tel:${t.nav.phone}`} className="hover:text-luxury-gold transition-colors">
                    {t.nav.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
