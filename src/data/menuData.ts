import { MenuItem, CategoryInfo } from '@/types';

export const menuCategories: CategoryInfo[] = [
  {
    id: 'starters',
    label: { en: 'Starters & Crudo', fr: 'Entrées & Crudo' },
    subtitle: { en: 'Wild botanicals, ocean crudo & delicate extractions', fr: 'Botaniques sauvages, crudos de l’océan & extractions délicates' },
  },
  {
    id: 'mains',
    label: { en: 'Mains & Fire Hearth', fr: 'Plats & Braises' },
    subtitle: { en: 'Heritage meats & slow-roasted seasonal harvests', fr: 'Viandes d’antan & récoltes de saison rôties à la braise' },
  },
  {
    id: 'pasta',
    label: { en: 'Handmade Pasta', fr: 'Pâtes Façon Maison' },
    subtitle: { en: 'Hand-extruded semolina, wild fungi & aged broths', fr: 'Semoules artisanales, champignons sauvages & réductions nobles' },
  },
  {
    id: 'seafood',
    label: { en: 'Maritime Harvest', fr: 'Pêches Maritimes' },
    subtitle: { en: 'Diver scallops, cold-water lobster & Saint-Laurent catches', fr: 'Pétoncles de plongée, homard bleu & prises du Saint-Laurent' },
  },
  {
    id: 'grill',
    label: { en: 'Laurentian Charcoal', fr: 'Grillades Laurentiennes' },
    subtitle: { en: 'Live birchwood ember searing with mountain herb reductions', fr: 'Cuisson au feu de bois de bouleau & jus corsé aux herbes' },
  },
  {
    id: 'desserts',
    label: { en: 'Pastry & Confections', fr: 'Pâtisseries & Douceurs' },
    subtitle: { en: 'Smoked maple, grand cru cacao & forest berry infusions', fr: 'Érable fumé, cacao grand cru & infusions de baies forestières' },
  },
  {
    id: 'cocktails',
    label: { en: 'Alchemical Mixology', fr: 'Cocktails Alchimiques' },
    subtitle: { en: 'Distilled botanicals, clarified shrubs & aged spirits', fr: 'Botaniques distillées, shrubs clarifiés & spiritueux rares' },
  },
  {
    id: 'wine',
    label: { en: 'Grand Cellar Reserves', fr: 'Réserves de la Grande Cave' },
    subtitle: { en: 'Biodynamic cuvées, historic Bordeaux & rare Quebec skin-contact', fr: 'Cuvées biodynamiques, grands bordeaux & macérations du Québec' },
  },
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    category: 'starters',
    name: {
      en: 'Gaspesian Sea Scallop Crudo',
      fr: 'Crudo de Pétoncles Géants de Gaspésie',
    },
    description: {
      en: 'Hand-dived scallops, St. Lawrence sea buckthorn emulsification, pickled elderberries, finger lime pearls, kelp oil.',
      fr: 'Pétoncles de plongée, émulsion d’argousier maritime, baies de sureau au vinaigre de cidre, perles de citron caviar, huile de varech.',
    },
    price: 36,
    dietary: ['RAW', 'GF', 'CHEF_PICK'],
    pairing: {
      en: 'Domaine Vacheron, Sancerre Blanc 2022',
      fr: 'Domaine Vacheron, Sancerre Blanc 2022',
    },
    origin: {
      en: 'Gaspésie Peninsula, QC',
      fr: 'Péninsule gaspésienne, QC',
    },
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'starter-2',
    category: 'starters',
    name: {
      en: 'Laurentian Black Truffle Velouté',
      fr: 'Velouté Onctueux aux Truffes Noires & Cèpes',
    },
    description: {
      en: 'Roasted sunchoke broth, foraged pine mushrooms, 36-month Comté foam, hazelnut crunch, shaved autumn truffle.',
      fr: 'Bouillon de topinambours rôtis, cèpes des bois, émulsion de Comté 36 mois, éclats de noisettes sauvages, lamelles de truffe.',
    },
    price: 32,
    dietary: ['VG', 'GF'],
    pairing: {
      en: 'Domaine Leflaive, Puligny-Montrachet 2021',
      fr: 'Domaine Leflaive, Puligny-Montrachet 2021',
    },
    origin: {
      en: 'Laurentides, QC',
      fr: 'Laurentides, QC',
    },
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'starter-3',
    category: 'starters',
    name: {
      en: 'Smoked Venison Tartare',
      fr: 'Tartare de Cerf Fumé au Bois de Cèdre',
    },
    description: {
      en: 'Quebec red deer loin, cedar-cured quail egg yolk, spruce tip mustard, cured rye crisp, shaved bone marrow.',
      fr: 'Longe de cerf rouge du Québec, jaune de caille mariné au cèdre, moutarde aux pointes d’épinette, dentelle de seigle, moelle salée.',
    },
    price: 38,
    dietary: ['RAW', 'SIGNATURE'],
    pairing: {
      en: 'Jean-Louis Chave, Saint-Joseph Rouge 2020',
      fr: 'Jean-Louis Chave, Saint-Joseph Rouge 2020',
    },
    origin: {
      en: 'Boileau Deer Farm, QC',
      fr: 'Cerfs de Boileau, QC',
    },
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=85',
  },

  // Mains
  {
    id: 'main-1',
    category: 'mains',
    name: {
      en: 'Canard de Barbarie au Foin Doux',
      fr: 'Canard de Barbarie Affiné au Foin d’Odeur',
    },
    description: {
      en: 'Dry-aged Barbary duck breast roasted on bone, sweetgrass glaze, parsnip purée, fermented wild blackberries, jus gras.',
      fr: 'Magret de canard maturé rôti sur l’os, laque de foin d’odeur, mousseline de panais aux noisettes, mûres sauvages lactofermentées, jus gras.',
    },
    price: 68,
    dietary: ['GF', 'SIGNATURE'],
    pairing: {
      en: 'Chambolle-Musigny 1er Cru, Jacques-Frédéric Mugnier 2018',
      fr: 'Chambolle-Musigny 1er Cru, Jacques-Frédéric Mugnier 2018',
    },
    origin: {
      en: 'Canards du Lac Brome, QC',
      fr: 'Canards du Lac Brome, QC',
    },
    image: 'https://images.unsplash.com/photo-1514944298352-f472856f6723?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'main-2',
    category: 'mains',
    name: {
      en: 'Glacier Toothfish over Pine Charcoal',
      fr: 'Légine Australe aux Braises d’Épinette',
    },
    description: {
      en: 'Glazed with caramelized white miso and sweet birch syrup, braised sea succulents, roasted bone dashi broth.',
      fr: 'Laquée au miso blanc et sirop de bouleau sauvage, salicornes étuvées, bouillon dashi de carcasses rôties infusé aux algues.',
    },
    price: 74,
    dietary: ['GF', 'CHEF_PICK'],
    pairing: {
      en: 'Domaine de Chevalier Blanc, Pessac-Léognan 2019',
      fr: 'Domaine de Chevalier Blanc, Pessac-Léognan 2019',
    },
    origin: {
      en: 'Sub-Antarctic & St. Lawrence maritime partners',
      fr: 'Prises durables certifiées & partenaires du Saint-Laurent',
    },
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=85',
  },

  // Pasta
  {
    id: 'pasta-1',
    category: 'pasta',
    name: {
      en: 'Hand-Cut Truffle Tagliatelle',
      fr: 'Tagliatelles Fines à la Truffe Noire & Morilles',
    },
    description: {
      en: '36-egg yolk artisanal ribbons, braised Laurentian morels, 30-month aged Parmigiano Reggiano vacche rosse, black truffle butter.',
      fr: 'Rubans aux 36 jaunes d’œufs de ferme, morilles fraîches des Laurentides, Parmigiano Reggiano vacche rosse 30 mois, beurre truffé.',
    },
    price: 48,
    dietary: ['VG', 'SIGNATURE'],
    pairing: {
      en: 'Gaja, Barbaresco DOCG 2019',
      fr: 'Gaja, Barbaresco DOCG 2019',
    },
    origin: {
      en: 'Organic Kamouraska Heritage Wheat Flour',
      fr: 'Farines de grains ancestraux de Kamouraska',
    },
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'pasta-2',
    category: 'pasta',
    name: {
      en: 'Smoked Lobster & Chanterelle Agnolotti',
      fr: 'Agnolotti au Homard Fumé & Chanterelles Dorées',
    },
    description: {
      en: 'Pillows filled with sweet Gaspesian lobster and ricotta, roasted chanterelle reduction, tarragon oil, crispy lobster coral.',
      fr: 'Pâtes farcies au homard doux de Gaspésie et ricotta maison, réduction de chanterelles dorées, huile d’estragon, corail croustillant.',
    },
    price: 52,
    dietary: ['CHEF_PICK'],
    pairing: {
      en: 'Meursault, Domaine des Comtes Lafon 2020',
      fr: 'Meursault, Domaine des Comtes Lafon 2020',
    },
    origin: {
      en: 'Îles-de-la-Madeleine, QC',
      fr: 'Îles-de-la-Madeleine, QC',
    },
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=85',
  },

  // Seafood
  {
    id: 'seafood-1',
    category: 'seafood',
    name: {
      en: 'Wood-Roasted Blue Lobster',
      fr: 'Homard Bleu Rôti au Four à Bois',
    },
    description: {
      en: 'Split Magdalen Islands lobster, sea-urchin coral butter, charred sweet leeks, sea asparagus, smoked lobster essence.',
      fr: 'Homard entier des Îles-de-la-Madeleine, beurre d’oursin sauvage du Saint-Laurent, poireaux doux braisés, salicornes croquantes.',
    },
    price: 88,
    dietary: ['GF', 'SIGNATURE'],
    pairing: {
      en: 'Corton-Charlemagne Grand Cru, Louis Jadot 2019',
      fr: 'Corton-Charlemagne Grand Cru, Louis Jadot 2019',
    },
    origin: {
      en: 'Îles-de-la-Madeleine sustainable catch',
      fr: 'Pêche durable des Îles-de-la-Madeleine',
    },
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'seafood-2',
    category: 'seafood',
    name: {
      en: 'Turbot Sauvage & Caviar Osciètre',
      fr: 'Turbot Sauvage Nappé de Caviar Osciètre',
    },
    description: {
      en: 'Steamed line-caught turbot, Champagne and dashi velouté, royal sturgeon caviar, sea greens, crispy sunchoke scales.',
      fr: 'Filet de turbot sauvage étuvé aux vapeurs d’algues, velouté de Champagne et dashi noble, caviar Osciètre royal, écailles croustillantes.',
    },
    price: 82,
    dietary: ['GF', 'CHEF_PICK'],
    pairing: {
      en: 'Dom Pérignon Vintage 2013',
      fr: 'Dom Pérignon Vintage 2013',
    },
    origin: {
      en: 'Gulf of St. Lawrence & Royal Caviar Co.',
      fr: 'Golfe du Saint-Laurent & Caviar Royal',
    },
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1000&q=85',
  },

  // Grill
  {
    id: 'grill-1',
    category: 'grill',
    name: {
      en: 'A5 Wagyu Tenderloin on Birch Charcoal',
      fr: 'Filet Mignon Wagyu A5 au Charbon de Bouleau',
    },
    description: {
      en: 'Seared over 800° Laurentian hardwood embers, 72-hour bone marrow jus, smoked shallot purée, glazed wild matsutake mushrooms.',
      fr: 'Saisi sur braises ardentes de bouleau laurentien, jus de carcasse réduit 72 heures, mousseline d’échalotes confites, matsutakés glacés.',
    },
    price: 110,
    dietary: ['GF', 'SIGNATURE'],
    pairing: {
      en: 'Château Margaux, 1er Grand Cru Classé 2015',
      fr: 'Château Margaux, 1er Grand Cru Classé 2015',
    },
    origin: {
      en: 'Miyazaki Prefecture & Laurentian finishing',
      fr: 'Préfecture de Miyazaki & élevage d’exception',
    },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'grill-2',
    category: 'grill',
    name: {
      en: 'Dry-Aged Laurentian Prime Rib (For Two)',
      fr: 'Côte de Bœuf des Laurentides Maturée 60 Jours (Pour Deux)',
    },
    description: {
      en: 'Smoked over wild cherry wood, charcoal-roasted bone marrow, black garlic chimichurri, pommes Robuchon infused with truffle.',
      fr: 'Fumée au bois de cerisier sauvage, os à moelle rôti à la flamme, chimichurri à l’ail noir du Québec, purée Robuchon truffée.',
    },
    price: 195,
    dietary: ['GF'],
    pairing: {
      en: 'Tenuta San Guido, Sassicaia Bolgheri 2019',
      fr: 'Tenuta San Guido, Sassicaia Bolgheri 2019',
    },
    origin: {
      en: 'Ferme des Sommets, Laurentides, QC',
      fr: 'Ferme des Sommets, Laurentides, QC',
    },
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=85',
  },

  // Desserts
  {
    id: 'dessert-1',
    category: 'desserts',
    name: {
      en: 'Smoked Laurentian Maple Sphere',
      fr: 'Sphère d’Érable Laurentien Fumé & Vanille Bourbon',
    },
    description: {
      en: 'Crisp amber sugar crystal sphere, smoked maple mousseline, birch sap caramel, hazelnut praline crisp, Madagascar vanilla cloud.',
      fr: 'Sphère soufflée en sucre ambré, mousseline d’érable fumé au feu de bois, coulis d’eau d’érable réduite, praliné noisette, crème bourbon.',
    },
    price: 24,
    dietary: ['VG', 'SIGNATURE'],
    pairing: {
      en: 'Château d’Yquem, Sauternes 2015',
      fr: 'Château d’Yquem, Sauternes 2015',
    },
    origin: {
      en: 'Érablière Ancestrale des Laurentides',
      fr: 'Érablière Ancestrale des Laurentides',
    },
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'dessert-2',
    category: 'desserts',
    name: {
      en: 'Guanaja 70% Chocolate & Pine Embers',
      fr: 'Crémeux Chocolat Guanaja 70% & Cèdre Brûlé',
    },
    description: {
      en: 'Smoked dark single-origin chocolate ganache, charred pine cone ice cream, cocoa nib streusel, Maldon sea salt flakes.',
      fr: 'Ganache de cacao d’origine fumée au cèdre sauvage, glace infusée aux aiguilles de pin rôties, streusel fleur de sel de Maldon.',
    },
    price: 26,
    dietary: ['VG'],
    pairing: {
      en: 'Taylor Fladgate 30 Year Tawny Port',
      fr: 'Porto Taylor Fladgate 30 Ans d’Âge',
    },
    origin: {
      en: 'Valrhona Grand Cru & Mont-Tremblant Foraged Fir',
      fr: 'Valrhona Grand Cru & Cueillette du Mont-Tremblant',
    },
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=85',
  },

  // Cocktails
  {
    id: 'cocktail-1',
    category: 'cocktails',
    name: {
      en: 'L’Alchimiste Céleste',
      fr: 'L’Alchimiste Céleste',
    },
    description: {
      en: 'Quebec St. Laurent gin, clarified sea buckthorn shrub, chartreuse verte, charred cedar smoke, 24k gold leaf mist.',
      fr: 'Gin québécois St. Laurent, shrub d’argousier clarifié, Chartreuse verte, fumée de bois de cèdre, brume d’or 24 carats.',
    },
    price: 26,
    dietary: ['V', 'SIGNATURE'],
    origin: {
      en: 'Maison Céleste Botanical Laboratory',
      fr: 'Laboratoire Botanique Maison Céleste',
    },
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'cocktail-2',
    category: 'cocktails',
    name: {
      en: 'Smoked Old Fashioned du Terroir',
      fr: 'Old Fashioned Fumé du Terroir',
    },
    description: {
      en: '12-Year Canadian Rye, reduction of wild Laurentian dark maple, forest mushroom bitters, torched orange peel.',
      fr: 'Rye canadien affiné 12 ans, réduction d’érable noir des Laurentides, bitters de champignons des sous-bois, zeste flambé.',
    },
    price: 28,
    dietary: ['V', 'SIGNATURE'],
    origin: {
      en: 'Distillerie Laurentienne & House Barrel Blend',
      fr: 'Distillerie Laurentienne & Fûts Privés',
    },
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1000&q=85',
  },

  // Wine
  {
    id: 'wine-1',
    category: 'wine',
    name: {
      en: 'Château Margaux 2010 (1er Grand Cru)',
      fr: 'Château Margaux 2010 (1er Grand Cru Classé)',
    },
    description: {
      en: 'Violets, cassis, cedar box, black truffles. Sourced directly from the estate cellars with pristine provenance.',
      fr: 'Notes envoûtantes de violette, cassis sauvage, boîte de cigare, truffe noire. Provenance directe de la propriété.',
    },
    price: 1850,
    dietary: ['SIGNATURE'],
    origin: {
      en: 'Margaux, Bordeaux, France',
      fr: 'Margaux, Bordeaux, France',
    },
  },
  {
    id: 'wine-2',
    category: 'wine',
    name: {
      en: 'Pinot Noir Cuvée Ancestrale 2021',
      fr: 'Pinot Noir Cuvée Ancestrale 2021',
    },
    description: {
      en: 'Unfiltered, biodynamic natural fermentation in amphora, wild mountain cranberry, forest floor minerality.',
      fr: 'Non filtré, vinifié en amphore de grès en biodynamie, canneberge des bois, minéralité calcaire et sous-bois.',
    },
    price: 165,
    dietary: ['CHEF_PICK'],
    origin: {
      en: 'Vignoble Les Pervenches, Farnham, QC',
      fr: 'Vignoble Les Pervenches, Farnham, QC',
    },
  },
];
