'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export function AudioAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft warm harmonic drone chords (representing dining room warmth, low hearth & acoustic resonance)
      const freqs = [110, 164.81, 220, 329.63]; // A major 7th warmth
      oscillatorRefs.current = freqs.map((freq) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        osc.connect(filter);
        filter.connect(masterGain);
        osc.start();
        return osc;
      });

      setIsPlaying(true);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const stopAmbientSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
      setTimeout(() => {
        oscillatorRefs.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorRefs.current = [];
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      oscillatorRefs.current.forEach((osc) => {
        try {
          osc.stop();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3">
      <button
        type="button"
        onClick={toggleSound}
        data-cursor-hover
        data-cursor-text={isPlaying ? 'MUTE' : 'SOUND'}
        className="glass-panel group flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-luxury-border/60 hover:border-luxury-gold/60 text-luxury-text-muted hover:text-luxury-gold transition-all duration-300 shadow-lg text-[10px] font-display uppercase tracking-widest"
        title="Atmospheric Soundscape"
      >
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5" />
        )}
        
        {/* Equalizer bars animation when playing */}
        <div className="flex items-end gap-[2px] h-3">
          {[1, 2, 3, 4].map((bar) => (
            <motion.span
              key={bar}
              animate={{
                height: isPlaying ? [4, 12, 6, 10, 4][bar % 5] : 3,
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8 + bar * 0.2,
                ease: 'easeInOut',
              }}
              className={`w-[2px] rounded-full ${
                isPlaying ? 'bg-luxury-gold' : 'bg-luxury-text-faint'
              }`}
            />
          ))}
        </div>

        <span className="hidden md:inline font-medium">
          {isPlaying ? 'Ambiance On' : 'Sound'}
        </span>
      </button>
    </div>
  );
}
