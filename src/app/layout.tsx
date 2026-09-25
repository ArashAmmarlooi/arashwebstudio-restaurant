import type { Metadata } from 'next';
import { Cormorant_Garamond, Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReservationModalProvider } from '@/context/ReservationModalContext';
import { CustomCursor } from '@/components/common/CustomCursor';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { LoadingVeil } from '@/components/common/LoadingVeil';
import { AudioAmbiance } from '@/components/common/AudioAmbiance';
import { ReservationModal } from '@/components/reservation/ReservationModal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maison Céleste | Haute Gastronomie Montréal',
  description:
    'An intimate temple of French-Nordic culinary artistry, wood-fired hearth alchemy, and rare cellar vintages in the historic heart of Old Montreal.',
  keywords: [
    'Maison Céleste',
    'Montreal fine dining',
    'Haute Gastronomie Montreal',
    'Old Montreal luxury restaurant',
    'Michelin Montreal restaurant',
    'Live fire dining Montreal',
    'Wagyu Montreal',
    'Grand Cru wine cellar Montreal',
  ],
  authors: [{ name: 'Maison Céleste' }],
  openGraph: {
    title: 'Maison Céleste | Haute Gastronomie Montréal',
    description:
      'An experience beyond the plate. French-Nordic culinary mastery, live birch hearth & 1,400+ cellar references in Old Montreal.',
    url: 'https://maisonceleste.ca',
    siteName: 'Maison Céleste',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Maison Céleste Haute Gastronomie',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Céleste | Haute Gastronomie Montréal',
    description:
      'An experience beyond the plate. French-Nordic culinary mastery & live birch hearth in Old Montreal.',
    images: ['https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'en-CA': 'https://maisonceleste.ca',
      'fr-CA': 'https://maisonceleste.ca/fr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Maison Céleste',
    image: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    ],
    '@id': 'https://maisonceleste.ca',
    url: 'https://maisonceleste.ca',
    telephone: '+15148409920',
    priceRange: '$$$$',
    menu: 'https://maisonceleste.ca#menu',
    servesCuisine: ['French Haute Gastronomie', 'Nordic Wild Foraging', 'Live Charcoal Hearth'],
    acceptsReservations: 'True',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '428 Rue Saint-Pierre',
      addressLocality: 'Vieux-Montréal',
      addressRegion: 'QC',
      postalCode: 'H2Y 2M5',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5017,
      longitude: -73.5574,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '17:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '17:00',
        closes: '01:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '17:00',
        closes: '22:00',
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${jakarta.variable} font-sans bg-luxury-bg text-luxury-text antialiased selection:bg-luxury-gold selection:text-neutral-950`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <ReservationModalProvider>
              <SmoothScroll>
                {/* Background Noise Texture */}
                <div className="luxury-noise" />

                {/* Custom Magnetic Cursor */}
                <CustomCursor />

                {/* Luxury Initial Entrance Veil */}
                <LoadingVeil />

                {/* Atmospheric Lounge Soundscape Player */}
                <AudioAmbiance />

                {/* Main Viewport Content */}
                <div className="flex flex-col min-h-screen">
                  {children}
                </div>

                {/* Global Luxury Reservation Modal */}
                <ReservationModal />
              </SmoothScroll>
            </ReservationModalProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
