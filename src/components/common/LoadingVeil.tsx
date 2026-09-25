'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingVeil() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant entrance timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.2 },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0B] text-[#F8F5EE] select-none"
        >
          {/* Top Curtain Reveal */}
          <motion.div
            initial={{ height: '50%' }}
            exit={{ height: 0, transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute top-0 left-0 right-0 bg-[#0A0A0B] border-b border-[#D6B265]/20 z-0"
          />

          {/* Bottom Curtain Reveal */}
          <motion.div
            initial={{ height: '50%' }}
            exit={{ height: 0, transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute bottom-0 left-0 right-0 bg-[#0A0A0B] border-t border-[#D6B265]/20 z-0"
          />

          {/* Center Luxury Monogram & Progress */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Monogram Crest */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-20 h-20 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-[#D6B265]/40 animate-spin-slow" />
              <div className="absolute inset-2 rounded-full border border-[#D6B265]/20" />
              <span className="font-serif text-3xl tracking-widest text-[#D6B265] italic font-light">
                MC
              </span>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-center"
            >
              <h1 className="font-display text-xs tracking-superwide text-[#D6B265] uppercase font-medium">
                MAISON CÉLESTE
              </h1>
              <p className="mt-1 font-serif text-[11px] tracking-widest text-neutral-400 italic">
                Haute Gastronomie · Montréal
              </p>
            </motion.div>

            {/* Subtle Gold Progress Line */}
            <div className="mt-8 w-32 h-[1px] bg-neutral-800 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#D6B265] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
