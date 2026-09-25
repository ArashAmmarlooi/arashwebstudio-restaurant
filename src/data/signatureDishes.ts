import { SignatureDishData } from '@/types';

export const signatureDishes: SignatureDishData[] = [
  {
    id: 'wagyu-a5',
    title: {
      en: 'A5 Wagyu Tenderloin',
      fr: 'Filet Mignon Wagyu A5',
    },
    subtitle: {
      en: 'LAURENTIAN BIRCH CHARCOAL & 72-HOUR TRUFFLE JUS',
      fr: 'CHARBON DE BOULEAU LAURENTIEN & JUS TRUFFÉ 72 HEURES',
    },
    tagline: {
      en: 'The pinnacle of fire alchemy & marbling harmony',
      fr: 'Le sommet de l’alchimie du feu et du persillage d’exception',
    },
    description: {
      en: 'Carefully seared at 800° over sustainably harvested Laurentian birch embers. The intense exterior crust yields to an ultra-tender core of buttery richness, complemented by roasted bone marrow extraction and foraged mountain matsutake.',
      fr: 'Saisi avec précision à 800° sur des braises de bouleau laurentien sélectionnées. La croûte caramélisée dévoile un cœur fondant d’une infinie tendreté, sublimé par un jus d’os à moelle réduit 72 heures et des matsutakés sauvages.',
    },
    price: '$110',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      {
        name: { en: 'A5 Miyazaki Wagyu', fr: 'Wagyu Miyazaki A5' },
        origin: { en: 'Hand-selected BMS 11 cut', fr: 'Sélection persillée BMS 11' },
        x: '20%',
        y: '25%',
      },
      {
        name: { en: 'Laurentian Birch Embers', fr: 'Braises de Bouleau' },
        origin: { en: 'Aged 18 months, woodfire heat', fr: 'Bois séché 18 mois' },
        x: '75%',
        y: '20%',
      },
      {
        name: { en: 'Black Truffle Reduction', fr: 'Réduction de Truffe' },
        origin: { en: '72-hour slow extraction', fr: 'Extraction lente 72h' },
        x: '22%',
        y: '75%',
      },
      {
        name: { en: 'Foraged Wild Matsutake', fr: 'Matsutakés Sauvages' },
        origin: { en: 'Harvested in Mont-Tremblant', fr: 'Cueillette du Mont-Tremblant' },
        x: '78%',
        y: '72%',
      },
    ],
    tastingNotes: [
      { en: 'Velvety Umami', fr: 'Umami Velouté' },
      { en: 'Smoky Sweetness', fr: 'Douceur Boisée' },
      { en: 'Earth & Truffle', fr: 'Terre & Truffe' },
      { en: 'Melting Finish', fr: 'Texture Fondante' },
    ],
    sommelierPairing: {
      en: 'Château Margaux 1er Grand Cru Classé 2015 — Notes of dark cassis, graphite minerality, and silky aristocratic tannins that complement the Wagyu marbling.',
      fr: 'Château Margaux 1er Grand Cru Classé 2015 — Notes de cassis sauvage, minéralité de graphite et tanins aristocratiques soyeux qui subliment le persillage.',
    },
  },
  {
    id: 'blue-lobster',
    title: {
      en: 'Wood-Roasted Blue Lobster',
      fr: 'Homard Bleu Rôti au Feu de Bois',
    },
    subtitle: {
      en: 'MAGDALEN ISLANDS HARVEST & SEA-URCHIN CORAL BUTTER',
      fr: 'PÊCHE DES ÎLES-DE-LA-MADELEINE & BEURRE D’OURSIN NOBLE',
    },
    tagline: {
      en: 'The deep cold-water sweetness of the Atlantic coast',
      fr: 'La douceur marine des profondeurs de l’Atlantique Nord',
    },
    description: {
      en: 'Plunged briefly in aromatic seawater then roasted in our wood hearth with cold-pressed sea urchin butter. Garnished with wild coastal samphire, braised baby leeks, and a crisp tuile made from toasted lobster coral.',
      fr: 'Saisi délicatement puis rôti au foyer de bois avec un beurre monté aux oursins sauvages du Saint-Laurent. Accompagné de salicornes croquantes des battures, de poireaux fondants et d’une tuile au corail doré.',
    },
    price: '$88',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      {
        name: { en: 'Magdalen Islands Lobster', fr: 'Homard Bleu des Îles' },
        origin: { en: 'Line-caught cold water', fr: 'Pêche artisanale côtière' },
        x: '22%',
        y: '22%',
      },
      {
        name: { en: 'St. Lawrence Urchin Butter', fr: 'Beurre d’Oursin Sauvage' },
        origin: { en: 'Freshly shucked daily', fr: 'Oursin frais du Saint-Laurent' },
        x: '75%',
        y: '24%',
      },
      {
        name: { en: 'Coastal Sea Succulents', fr: 'Salicornes Maritimes' },
        origin: { en: 'Tidal marsh foraging', fr: 'Battures du Bas-Saint-Laurent' },
        x: '24%',
        y: '74%',
      },
      {
        name: { en: 'Smoked Shellfish Essence', fr: 'Essence de Carapaces' },
        origin: { en: 'Infused with roasted kelp', fr: 'Infusé au kombu royal' },
        x: '76%',
        y: '70%',
      },
    ],
    tastingNotes: [
      { en: 'Brine & Ocean Sweetness', fr: 'Iode & Douceur Marine' },
      { en: 'Rich Coral Cream', fr: 'Onctuosité du Corail' },
      { en: 'Charred Leek Smoke', fr: 'Fumé de Poireau Braisé' },
      { en: 'Citrus Minerality', fr: 'Tension Minérale' },
    ],
    sommelierPairing: {
      en: 'Corton-Charlemagne Grand Cru 2019 — Vibrant acidity, toasted brioche notes, hazelnut, and flint that cuts through the rich sea-urchin butter.',
      fr: 'Corton-Charlemagne Grand Cru 2019 — Acidité vibrante, notes de brioche toastée, noisette et pierre à fusil qui équilibrent l’onctuosité du beurre.',
    },
  },
  {
    id: 'truffle-tagliatelle',
    title: {
      en: 'Hand-Cut Truffle Tagliatelle',
      fr: 'Tagliatelles à la Truffe Noire',
    },
    subtitle: {
      en: '36-EGG YOLK RIBBONS & 30-MONTH VACCHE ROSSE REGGIANO',
      fr: '36 JAUNES D’ŒUFS & PARMIGIANO VACCHE ROSSE 30 MOIS',
    },
    tagline: {
      en: 'Sublime artisanal pasta made fresh twice every evening',
      fr: 'Pâtes d’orfèvre confectionnées deux fois par service',
    },
    description: {
      en: 'Rolled and cut by hand using heirloom Kamouraska flour and golden heritage egg yolks. Tossed in brown butter emulsion, braised mountain morels, and generous shavings of fresh black Périgord winter truffles.',
      fr: 'Façonnées et découpées au couteau avec de la farine de blé ancien de Kamouraska et des jaunes d’œufs de ferme. Liées à l’émulsion de beurre noisette, morilles sauvages et truffes noires fraîches râpées en salle.',
    },
    price: '$48',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=1400&q=85',
    ingredients: [
      {
        name: { en: 'Organic Heritage Flour', fr: 'Farine Ancestrale Bio' },
        origin: { en: 'Stone-milled in Kamouraska', fr: 'Moulue sur pierre à Kamouraska' },
        x: '20%',
        y: '22%',
      },
      {
        name: { en: 'Black Périgord Truffle', fr: 'Truffe Noire du Périgord' },
        origin: { en: 'Freshly flown weekly', fr: 'Truffes fraîches entières' },
        x: '76%',
        y: '22%',
      },
      {
        name: { en: 'Vacche Rosse Parmigiano', fr: 'Parmigiano Vacche Rosse' },
        origin: { en: 'Aged 30 months', fr: 'Affiné 30 mois' },
        x: '22%',
        y: '72%',
      },
      {
        name: { en: 'Laurentian Morels', fr: 'Morilles des Laurentides' },
        origin: { en: 'Spring forest harvest', fr: 'Récolte printanière des bois' },
        x: '76%',
        y: '74%',
      },
    ],
    tastingNotes: [
      { en: 'Nutty Brown Butter', fr: 'Beurre Noisette Cacao' },
      { en: 'Deep Woodland Earth', fr: 'Arômes de Sous-Bois' },
      { en: 'Silken Al Dente', fr: 'Texture Soyeuse Al Dente' },
      { en: 'Aged Cheese Umami', fr: 'Persistance Saline Noble' },
    ],
    sommelierPairing: {
      en: 'Gaja Barbaresco DOCG 2019 — Dried rose petals, tar, wild red cherries, and refined structure that elevate the earthiness of black truffles.',
      fr: 'Gaja Barbaresco DOCG 2019 — Pétales de rose séchés, cerise noire sauvage et structure aristocratique qui transcendent la terre et la truffe.',
    },
  },
];
