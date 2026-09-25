'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export function InstagramSection() {
  const { t } = useLanguage();

  const posts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
      likes: '1,420',
      caption: 'Live birch coals reaching 800° for tonight’s A5 Wagyu service.',
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=85',
      likes: '984',
      caption: 'Gaspesian giant scallops with sea buckthorn emulsion & elderberry.',
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=85',
      likes: '1,890',
      caption: 'L’Alchimiste Céleste: Botanical gin, clarified shrub & 24k gold mist.',
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85',
      likes: '2,310',
      caption: 'Late evening in the 18th-century subterranean cellar vault.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-luxury-bg-secondary text-luxury-text overflow-hidden border-t border-luxury-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          tag={t.instagram.tag}
          title={t.instagram.title}
          subtitle={t.instagram.subtitle}
        />

        <div className="mb-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            data-cursor-text="FOLLOW"
            className="inline-flex items-center gap-2 font-display text-sm tracking-widest text-luxury-gold hover:text-luxury-gold-light uppercase font-medium border-b border-luxury-gold/40 hover:border-luxury-gold pb-1 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.instagram.handle}</span>
          </a>
        </div>

        {/* 4-Column Instagram Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-luxury-border/60"
            >
              <Image
                src={post.image}
                alt="Instagram post preview"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-sans text-neutral-200 line-clamp-2 text-left">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-[10px] text-luxury-gold font-display">
                    <Heart className="w-3 h-3 fill-luxury-gold inline" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
