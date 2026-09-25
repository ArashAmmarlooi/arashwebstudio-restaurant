'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { menuCategories, menuItems } from '@/data/menuData';
import { MenuCategory, MenuItem } from '@/types';
import { SectionHeading } from '@/components/common/SectionHeading';
import { MagneticButton } from '@/components/common/MagneticButton';
import { Search, Sparkles, Utensils, Wine, Check, ArrowRight } from 'lucide-react';

export function MenuSection() {
  const { language, t } = useLanguage();
  const { openReservation } = useReservationModal();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDietaryFilter, setActiveDietaryFilter] = useState<string | null>(null);

  // Desktop Floating Cursor Hover Preview
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const mouseX = useSpring(0, { stiffness: 300, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    // Only track the cursor (for the floating dish preview) while an item is
    // actually hovered, and never on touch devices. Attaching this globally
    // for the entire page lifetime was unnecessary main-thread work.
    if (!hoveredItem) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 24);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredItem, mouseX, mouseY]);

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.name[language].toLowerCase().includes(query) ||
      item.description[language].toLowerCase().includes(query) ||
      (item.pairing && item.pairing[language].toLowerCase().includes(query)) ||
      (item.origin && item.origin[language].toLowerCase().includes(query));

    const matchesDietary =
      !activeDietaryFilter ||
      (item.dietary && item.dietary.includes(activeDietaryFilter as any));

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const dietaryFilterOptions: Array<{ key: string; label: string }> = [
    { key: 'SIGNATURE', label: t.menu.dietaryLegend.SIGNATURE },
    { key: 'CHEF_PICK', label: t.menu.dietaryLegend.CHEF_PICK },
    { key: 'GF', label: t.menu.dietaryLegend.GF },
    { key: 'VG', label: t.menu.dietaryLegend.VG },
    { key: 'RAW', label: t.menu.dietaryLegend.RAW },
  ];

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg text-luxury-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag={t.menu.tag}
          title={t.menu.title}
          subtitle={t.menu.subtitle}
        />

        {/* Search & Dietary Filters Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-luxury-gold absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold rounded-none pl-10 pr-4 py-2.5 text-xs text-luxury-text placeholder-luxury-text-faint focus:outline-none transition-colors"
            />
          </div>

          {/* Quick Dietary Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
            {dietaryFilterOptions.map((filter) => {
              const active = activeDietaryFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveDietaryFilter(active ? null : filter.key)}
                  data-cursor-hover
                  className={`px-3 py-1.5 text-[10px] font-display uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-luxury-gold text-neutral-950 font-semibold'
                      : 'bg-luxury-bg-secondary border border-luxury-border text-luxury-text-faint hover:text-luxury-gold hover:border-luxury-gold/60'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-4 mb-14 border-b border-luxury-border/60">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                data-cursor-hover
                data-cursor-text="MENU"
                className={`relative px-4 sm:px-6 py-3 shrink-0 font-display text-xs uppercase tracking-superwide transition-all duration-300 ${
                  isActive
                    ? 'text-luxury-gold font-semibold'
                    : 'text-luxury-text-faint hover:text-luxury-gold'
                }`}
              >
                <span>{cat.label[language]}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Chef's Degustation Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-gold p-6 sm:p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-luxury-gold/5 blur-2xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-semibold">
                  {t.menu.chefNoteTitle}
                </span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-luxury-text mb-2">
                &ldquo;Voyage Sensoriel en Huit Temps&rdquo;
              </h4>
              <p className="font-sans text-xs sm:text-sm text-luxury-text-muted max-w-2xl leading-relaxed">
                {t.menu.chefNoteDesc}
              </p>
              <p className="font-serif text-sm text-luxury-gold font-semibold mt-2">
                {t.menu.chefNotePrice}
              </p>
            </div>

            <MagneticButton
              size="md"
              variant="primary"
              onClick={() => openReservation({ service: "Chef's 8-Course Blind Tasting" })}
              dataCursorText="DEGUSTATION"
              className="shrink-0"
            >
              <span>{t.menu.reserveMenuBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onMouseEnter={() => item.image && setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative pb-8 border-b border-luxury-border/60 hover:border-luxury-gold/50 transition-colors duration-300"
                >
                  {/* Top: Name & Price */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-luxury-text group-hover:text-luxury-gold transition-colors duration-200">
                      {item.name[language]}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-serif text-lg sm:text-xl text-luxury-gold font-light">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Dietary Badges */}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {item.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[8px] font-display uppercase tracking-wider bg-luxury-bg-secondary text-luxury-gold border border-luxury-border/60"
                        >
                          {t.menu.dietaryLegend[tag] || tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-luxury-text-muted leading-relaxed font-light mb-3">
                    {item.description[language]}
                  </p>

                  {/* Origin / Pairing Footer */}
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-luxury-text-faint font-sans">
                    {item.origin && (
                      <span className="italic">
                        {t.menu.originPrefix}: {item.origin[language]}
                      </span>
                    )}
                    {item.pairing && (
                      <span className="text-luxury-gold/90 flex items-center gap-1 font-serif italic">
                        <Wine className="w-3 h-3 text-luxury-gold inline" />
                        {item.pairing[language]}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-16">
                <p className="font-serif text-lg text-luxury-text-muted mb-4">
                  {t.menu.emptySearch}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveDietaryFilter(null);
                  }}
                  className="font-display text-xs uppercase tracking-wider text-luxury-gold underline hover:text-luxury-gold-light"
                >
                  {t.menu.clearSearch}
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating Desktop Hover Image Preview */}
        <AnimatePresence>
          {hoveredItem && hoveredItem.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                x: mouseX,
                y: mouseY,
              }}
              className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block w-64 h-44 rounded-none overflow-hidden border border-luxury-gold/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={hoveredItem.image}
                alt={hoveredItem.name[language]}
                fill
                sizes="256px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 text-white">
                <p className="font-serif text-xs italic font-medium leading-tight">
                  {hoveredItem.name[language]}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
