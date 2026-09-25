export type Language = 'en' | 'fr';
export type Theme = 'dark' | 'light';

export interface MenuItem {
  id: string;
  name: { en: string; fr: string };
  category: MenuCategory;
  description: { en: string; fr: string };
  price: number;
  dietary?: ('GF' | 'VG' | 'V' | 'SIGNATURE' | 'RAW' | 'CHEF_PICK')[];
  pairing?: { en: string; fr: string };
  image?: string;
  calories?: string;
  origin?: { en: string; fr: string };
}

export type MenuCategory = 
  | 'starters'
  | 'mains'
  | 'pasta'
  | 'seafood'
  | 'grill'
  | 'desserts'
  | 'cocktails'
  | 'wine';

export interface CategoryInfo {
  id: MenuCategory;
  label: { en: string; fr: string };
  subtitle: { en: string; fr: string };
}

export interface GalleryItem {
  id: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  category: 'interior' | 'cuisine' | 'cocktails' | 'cellar' | 'hearth';
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: { en: string; fr: string };
  author: string;
  title: { en: string; fr: string };
  rating?: number;
  publication: string;
}

export interface SignatureDishData {
  id: string;
  title: { en: string; fr: string };
  subtitle: { en: string; fr: string };
  tagline: { en: string; fr: string };
  description: { en: string; fr: string };
  price: string;
  image: string;
  ingredients: {
    name: { en: string; fr: string };
    origin: { en: string; fr: string };
    x: string;
    y: string;
  }[];
  tastingNotes: { en: string; fr: string }[];
  sommelierPairing: { en: string; fr: string };
}

export interface ReservationFormData {
  guests: number;
  seatingArea: 'main' | 'counter' | 'hearth' | 'private';
  date: string;
  timeSlot: string;
  service: 'dinner' | 'tasting' | 'late';
  occasion: string;
  dietaryRestrictions: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface StoryChapter {
  id: string;
  title: { en: string; fr: string };
  tag: { en: string; fr: string };
  description: { en: string; fr: string };
  image: string;
}
