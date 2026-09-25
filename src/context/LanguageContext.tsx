'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';
import { translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('maison_celeste_lang') as Language;
      if (saved === 'en' || saved === 'fr') {
        setLanguageState(saved);
      } else {
        const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
        setLanguageState(browserLang);
      }
    } catch {
      // fallback
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('maison_celeste_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fr' : 'en';
    setLanguage(next);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
