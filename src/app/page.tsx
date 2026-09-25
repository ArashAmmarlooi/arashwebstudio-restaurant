import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { StorySection } from '@/components/home/StorySection';
import { SignatureDishScroll } from '@/components/home/SignatureDishScroll';
import { HorizontalExperience } from '@/components/home/HorizontalExperience';
import { MenuSection } from '@/components/home/MenuSection';
import { ChefSection } from '@/components/home/ChefSection';
import { GallerySection } from '@/components/home/GallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { InstagramSection } from '@/components/home/InstagramSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-luxury-bg text-luxury-text overflow-x-hidden selection:bg-luxury-gold selection:text-neutral-950">
      {/* Floating Dynamic Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Story & Philosophy Section */}
      <StorySection />

      {/* Signature Dish Interactive Stage */}
      <SignatureDishScroll />

      {/* Horizontal Sensory Chronicle */}
      <HorizontalExperience />

      {/* Digital Interactive Menu */}
      <MenuSection />

      {/* Chef & Sommelier Story */}
      <ChefSection />

      {/* Visual Archive Gallery & Lightbox */}
      <GallerySection />

      {/* Press & Michelin Testimonials */}
      <TestimonialsSection />

      {/* Visit Us & Location */}
      <LocationSection />

      {/* Instagram & Social Feed */}
      <InstagramSection />

      {/* Editorial Footer */}
      <Footer />
    </main>
  );
}
