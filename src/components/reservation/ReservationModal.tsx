'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useReservationModal } from '@/context/ReservationModalContext';
import { ReservationFormData } from '@/types';
import { MagneticButton } from '@/components/common/MagneticButton';
import {
  X,
  Users,
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Utensils,
  Wine,
  Phone,
  Mail,
  User,
} from 'lucide-react';

export function ReservationModal() {
  const { language, t } = useLanguage();
  const { isOpen, closeReservation, initialOptions } = useReservationModal();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [formData, setFormData] = useState<ReservationFormData>({
    guests: initialOptions?.guests || 2,
    seatingArea: 'main',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '19:30',
    service: 'dinner',
    occasion: 'Romantic Evening',
    dietaryRestrictions: [],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [bookingRef, setBookingRef] = useState('');

  // Synchronize initial options if passed
  useEffect(() => {
    if (initialOptions) {
      if (initialOptions.guests) {
        setFormData((prev) => ({ ...prev, guests: initialOptions.guests! }));
      }
      if (initialOptions.service) {
        setFormData((prev) => ({ ...prev, occasion: initialOptions.service! }));
      }
    }
  }, [initialOptions]);

  // Reset steps on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

  const timeSlots = [
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ];

  const handleNext = () => {
    if (step < 4) {
      setStep((step + 1) as any);
    } else if (step === 4) {
      // Validate contact fields
      if (!formData.firstName || !formData.email || !formData.phone) {
        alert(language === 'fr' ? 'Veuillez remplir vos coordonnées obligatoires.' : 'Please fill in required contact fields.');
        return;
      }
      // Generate booking reference code
      const randomCode = `MC-${Math.floor(1000 + Math.random() * 9000)}-${language === 'fr' ? 'MTL' : 'MTL'}`;
      setBookingRef(randomCode);
      setStep(5);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as any);
    }
  };

  const toggleDietary = (item: string) => {
    setFormData((prev) => {
      const exists = prev.dietaryRestrictions.includes(item);
      return {
        ...prev,
        dietaryRestrictions: exists
          ? prev.dietaryRestrictions.filter((d) => d !== item)
          : [...prev.dietaryRestrictions, item],
      };
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-luxury-bg border border-luxury-border/90 shadow-2xl rounded-none text-luxury-text overflow-hidden my-auto"
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-luxury-border/60 flex items-center justify-between">
          <div>
            <span className="font-display text-[9px] uppercase tracking-superwide text-luxury-gold font-semibold">
              {t.reservation.subtitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-luxury-text font-normal mt-0.5">
              {t.reservation.modalTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={closeReservation}
            data-cursor-hover
            data-cursor-text="CLOSE"
            className="p-2 rounded-full border border-luxury-border text-luxury-text-muted hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-200"
            aria-label={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Progress Tracker */}
        {step < 5 && (
          <div className="px-6 sm:px-8 py-3 bg-luxury-bg-secondary border-b border-luxury-border/40 flex items-center justify-between text-[10px] font-display uppercase tracking-wider text-luxury-text-muted">
            <span className={step >= 1 ? 'text-luxury-gold font-semibold' : ''}>
              1. {t.reservation.step1}
            </span>
            <span className="text-luxury-border">/</span>
            <span className={step >= 2 ? 'text-luxury-gold font-semibold' : ''}>
              2. {t.reservation.step2}
            </span>
            <span className="text-luxury-border">/</span>
            <span className={step >= 3 ? 'text-luxury-gold font-semibold' : ''}>
              3. {t.reservation.step3}
            </span>
            <span className="text-luxury-border">/</span>
            <span className={step >= 4 ? 'text-luxury-gold font-semibold' : ''}>
              4. {t.reservation.step4}
            </span>
          </div>
        )}

        {/* Step Contents */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">
            {/* STEP 1: Guests Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif text-xl text-luxury-text mb-2">
                    {t.reservation.guestPrompt}
                  </h3>
                  <p className="text-xs text-luxury-text-muted">
                    {formData.guests > 8 ? t.reservation.privateRoomNotice : 'Select how many guests will be joining us this evening.'}
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                  {guestOptions.map((num) => {
                    const selected = formData.guests === num;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guests: num })}
                        data-cursor-hover
                        className={`py-3.5 text-center font-display text-sm uppercase transition-all duration-200 border ${
                          selected
                            ? 'bg-luxury-gold text-neutral-950 border-luxury-gold font-bold shadow-md'
                            : 'bg-luxury-bg-secondary border-luxury-border text-luxury-text hover:border-luxury-gold/60'
                        }`}
                      >
                        <span className="block font-serif text-lg leading-none">{num}</span>
                        <span className="text-[9px] tracking-wider opacity-80">
                          {num === 1 ? 'Guest' : 'Guests'}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {formData.guests > 8 && (
                  <div className="glass-panel-gold p-4 text-xs text-luxury-gold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{t.reservation.privateRoomNotice}</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 2: Seating Area */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-serif text-xl text-luxury-text mb-2">
                    Select Your Dining Atmosphere
                  </h3>
                  <p className="text-xs text-luxury-text-muted">
                    Each chamber offers a bespoke acoustic and culinary vantage point.
                  </p>
                </div>

                <div className="space-y-3">
                  {(['main', 'counter', 'hearth', 'private'] as const).map((area) => {
                    const selected = formData.seatingArea === area;
                    const info = t.reservation.seatingOptions[area];
                    return (
                      <div
                        key={area}
                        onClick={() => setFormData({ ...formData, seatingArea: area })}
                        data-cursor-hover
                        className={`p-4 border cursor-pointer transition-all duration-200 flex items-start justify-between gap-4 ${
                          selected
                            ? 'bg-luxury-gold/10 border-luxury-gold shadow-md'
                            : 'bg-luxury-bg-secondary border-luxury-border hover:border-luxury-gold/50'
                        }`}
                      >
                        <div>
                          <h4 className="font-serif text-lg text-luxury-text font-medium">
                            {info.name}
                          </h4>
                          <p className="text-xs text-luxury-text-muted mt-0.5">
                            {info.desc}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                            selected
                              ? 'border-luxury-gold bg-luxury-gold text-neutral-950'
                              : 'border-luxury-border'
                          }`}
                        >
                          {selected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Date, Service & Time Slot */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif text-xl text-luxury-text mb-2">
                    {t.reservation.step3}
                  </h3>
                  <p className="text-xs text-luxury-text-muted">
                    Evening seatings are spaced to ensure serene hospitality.
                  </p>
                </div>

                {/* Date Picker Input */}
                <div>
                  <label className="block font-display text-[10px] uppercase tracking-wider text-luxury-gold font-medium mb-1.5">
                    {t.reservation.dateLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold px-4 py-3 text-xs text-luxury-text focus:outline-none"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block font-display text-[10px] uppercase tracking-wider text-luxury-gold font-medium mb-2">
                    {t.reservation.timeLabel}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => {
                      const selected = formData.timeSlot === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: time })}
                          data-cursor-hover
                          className={`py-2.5 text-center font-display text-xs tracking-wider uppercase transition-all duration-200 border ${
                            selected
                              ? 'bg-luxury-gold text-neutral-950 border-luxury-gold font-bold shadow-md'
                              : 'bg-luxury-bg-secondary border-luxury-border text-luxury-text hover:border-luxury-gold/60'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Occasion / Dietary */}
                <div>
                  <label className="block font-display text-[10px] uppercase tracking-wider text-luxury-gold font-medium mb-2">
                    {t.reservation.dietaryLabel}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.reservation.dietaryOptions.map((opt) => {
                      const selected = formData.dietaryRestrictions.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleDietary(opt)}
                          data-cursor-hover
                          className={`px-3 py-1.5 text-[10px] font-display uppercase tracking-wider border transition-colors ${
                            selected
                              ? 'bg-luxury-gold text-neutral-950 border-luxury-gold font-semibold'
                              : 'bg-luxury-bg-secondary border-luxury-border text-luxury-text-muted hover:border-luxury-gold/50'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Guest Contact Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-serif text-xl text-luxury-text mb-1">
                    Guest & Arrival Details
                  </h3>
                  <p className="text-xs text-luxury-text-muted">
                    Your direct point of contact for confirmation & valet coordinates.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-display uppercase tracking-wider text-luxury-gold mb-1">
                      {t.reservation.formLabels.firstName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Éléonore"
                      className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold px-3.5 py-2.5 text-xs text-luxury-text focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-display uppercase tracking-wider text-luxury-gold mb-1">
                      {t.reservation.formLabels.lastName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="de Saint-Germain"
                      className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold px-3.5 py-2.5 text-xs text-luxury-text focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-display uppercase tracking-wider text-luxury-gold mb-1">
                      {t.reservation.formLabels.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="guest@domain.com"
                      className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold px-3.5 py-2.5 text-xs text-luxury-text focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-display uppercase tracking-wider text-luxury-gold mb-1">
                      {t.reservation.formLabels.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (514) 000-0000"
                      className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold px-3.5 py-2.5 text-xs text-luxury-text focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-display uppercase tracking-wider text-luxury-gold mb-1">
                    {t.reservation.formLabels.specialRequests}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="E.g., Window table, anniversary champagne, sommelier greeting..."
                    className="w-full bg-luxury-bg-secondary border border-luxury-border focus:border-luxury-gold p-3 text-xs text-luxury-text focus:outline-none"
                  />
                </div>

                <div className="p-3 bg-luxury-bg-secondary border border-luxury-border/40 text-[11px] text-luxury-text-muted flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-luxury-gold shrink-0" />
                  <span>{t.reservation.depositNote}</span>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Instant Confirmation */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold flex items-center justify-center mx-auto text-luxury-gold shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="font-display text-[10px] uppercase tracking-superwide text-luxury-gold font-semibold">
                    {t.reservation.confirmedTag}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-luxury-text font-normal mt-1">
                    {t.reservation.confirmedTitle}
                  </h3>
                  <p className="font-serif text-sm italic text-neutral-400 mt-1">
                    &ldquo;Your table at Maison Céleste awaits.&rdquo;
                  </p>
                </div>

                {/* Booking Code Card */}
                <div className="glass-panel-gold p-5 border border-luxury-gold/40 max-w-sm mx-auto text-center">
                  <p className="font-display text-[10px] uppercase tracking-widest text-luxury-gold font-medium">
                    {t.reservation.bookingRef}
                  </p>
                  <p className="font-serif text-2xl text-luxury-text font-bold tracking-widest mt-0.5">
                    {bookingRef}
                  </p>
                </div>

                {/* Reservation Summary */}
                <div className="max-w-md mx-auto grid grid-cols-2 gap-3 text-left text-xs bg-luxury-bg-secondary p-4 border border-luxury-border">
                  <div>
                    <span className="text-luxury-text-muted block text-[10px] font-display uppercase">Guests:</span>
                    <span className="font-medium">{formData.guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-luxury-text-muted block text-[10px] font-display uppercase">Atmosphere:</span>
                    <span className="font-medium">{t.reservation.seatingOptions[formData.seatingArea].name}</span>
                  </div>
                  <div>
                    <span className="text-luxury-text-muted block text-[10px] font-display uppercase">Date:</span>
                    <span className="font-medium">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-luxury-text-muted block text-[10px] font-display uppercase">Time:</span>
                    <span className="font-medium">{formData.timeSlot}</span>
                  </div>
                </div>

                <p className="text-xs text-luxury-text-muted max-w-md mx-auto leading-relaxed">
                  {t.reservation.confirmationSentTo} <strong className="text-luxury-text">{formData.email}</strong>.
                </p>

                <div className="pt-2">
                  <MagneticButton
                    size="md"
                    variant="primary"
                    onClick={closeReservation}
                    className="w-full sm:w-auto"
                  >
                    <span>{t.reservation.doneBtn}</span>
                  </MagneticButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Bottom Actions */}
        {step < 5 && (
          <div className="p-6 sm:p-8 bg-luxury-bg-secondary border-t border-luxury-border/60 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                data-cursor-hover
                className="font-display text-xs uppercase tracking-widest text-luxury-text-muted hover:text-luxury-text flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.reservation.backBtn}</span>
              </button>
            ) : (
              <div />
            )}

            <MagneticButton
              size="md"
              variant="primary"
              onClick={handleNext}
              dataCursorText="NEXT"
            >
              <span>{step === 4 ? t.reservation.confirmBtn : t.reservation.nextBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        )}
      </motion.div>
    </div>
  );
}
