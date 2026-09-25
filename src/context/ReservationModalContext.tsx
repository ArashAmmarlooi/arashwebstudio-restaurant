'use client';

import React, { createContext, useContext, useState } from 'react';

interface ReservationModalContextType {
  isOpen: boolean;
  openReservation: (options?: { guests?: number; service?: string; date?: string }) => void;
  closeReservation: () => void;
  initialOptions: { guests?: number; service?: string; date?: string } | null;
}

const ReservationModalContext = createContext<ReservationModalContextType | undefined>(undefined);

export function ReservationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialOptions, setInitialOptions] = useState<{ guests?: number; service?: string; date?: string } | null>(null);

  const openReservation = (options?: { guests?: number; service?: string; date?: string }) => {
    if (options) {
      setInitialOptions(options);
    }
    setIsOpen(true);
    // disable body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeReservation = () => {
    setIsOpen(false);
    setInitialOptions(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <ReservationModalContext.Provider value={{ isOpen, openReservation, closeReservation, initialOptions }}>
      {children}
    </ReservationModalContext.Provider>
  );
}

export function useReservationModal() {
  const context = useContext(ReservationModalContext);
  if (!context) {
    throw new Error('useReservationModal must be used within a ReservationModalProvider');
  }
  return context;
}
