'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { galleryItems } from '@/data/galleryData';
import { GalleryItem } from '@/types';
import { SectionHeading } from '@/components/common/SectionHeading';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export function GallerySection() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'cuisine' | 'cocktails' | 'cellar' | 'hearth'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredGallery = galleryItems.filter((item) =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredGallery.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredGallery.length) % filteredGallery.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredGallery.length]);

  const categories: Array<{ id: 'all' | 'interior' | 'cuisine' | 'cocktails' | 'cellar' | 'hearth'; label: string }> = [
    { id: 'all', label: t.gallery.all },
    { id: 'interior', label: t.gallery.interior },
    { id: 'cuisine', label: t.gallery.cuisine },
    { id: 'cocktails', label: t.gallery.cocktails },
    { id: 'cellar', label: t.gallery.cellar },
    { id: 'hearth', label: t.gallery.hearth },
  ];

  const currentPhoto = selectedPhotoIndex !== null ? filteredGallery[selectedPhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 md:py-40 bg-luxury-bg text-luxury-text overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t.gallery.tag}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-4 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const active = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                data-cursor-hover
                className={`px-4 sm:px-5 py-2 text-xs font-display uppercase tracking-widest shrink-0 transition-all duration-300 ${
                  active
                    ? 'bg-luxury-gold text-neutral-950 font-semibold shadow-md'
                    : 'bg-luxury-bg-secondary border border-luxury-border text-luxury-text-muted hover:text-luxury-text hover:border-luxury-gold/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, idx) => {
              // Asymmetric spanning logic
              const isColSpanned = idx % 3 === 0;
              const spanClass = isColSpanned ? 'lg:col-span-8' : 'lg:col-span-4';
              const aspectClass = isColSpanned ? 'aspect-[16/10]' : 'aspect-square sm:aspect-[4/5]';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`${spanClass} relative group cursor-pointer overflow-hidden border border-luxury-border/60`}
                  onClick={() => openLightbox(idx)}
                  data-cursor-hover
                  data-cursor-text="EXPAND"
                >
                  <div className={`relative ${aspectClass} w-full overflow-hidden`}>
                    <Image
                      src={item.image}
                      alt={item.title[language]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Hover Caption Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-end">
                        <div className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Maximize2 className="w-4 h-4 text-luxury-gold" />
                        </div>
                      </div>

                      <div className="text-white">
                        <span className="font-display text-[9px] uppercase tracking-superwide text-luxury-gold font-semibold">
                          {item.category.toUpperCase()}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-white mt-1 leading-snug">
                          {item.title[language]}
                        </h3>
                        <p className="font-sans text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                          {item.subtitle[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Lightbox Controls */}
            <div className="flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs uppercase tracking-superwide text-luxury-gold">
                  MAISON CÉLESTE ARCHIVE
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-xs text-neutral-400 font-sans">
                  {t.gallery.imageCount} {(selectedPhotoIndex ?? 0) + 1} {t.gallery.of} {filteredGallery.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                data-cursor-hover
                data-cursor-text="CLOSE"
                className="p-2.5 rounded-full border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors duration-200"
                aria-label={t.gallery.closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Center Image Stage with Navigation Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              <button
                type="button"
                onClick={prevPhoto}
                data-cursor-hover
                data-cursor-text="PREV"
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors duration-200"
                aria-label={t.gallery.prevPhoto}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh]">
                <Image
                  src={currentPhoto.image}
                  alt={currentPhoto.title[language]}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={nextPhoto}
                data-cursor-hover
                data-cursor-text="NEXT"
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 border border-white/20 hover:border-luxury-gold text-white hover:text-luxury-gold transition-colors duration-200"
                aria-label={t.gallery.nextPhoto}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center max-w-2xl mx-auto text-white z-10">
              <h4 className="font-serif text-2xl text-luxury-gold mb-1">
                {currentPhoto.title[language]}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light">
                {currentPhoto.subtitle[language]}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
