import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

const translations: Translations = {
  home: { fr: 'ACCUEIL', en: 'HOME' },
  profile: { fr: 'PROFIL', en: 'PROFILE' },
  ticketEasy: { fr: 'TICKET-EASY', en: 'TICKET-EASY' },
  step: { fr: 'STEP', en: 'STEP' },
  linkedin: { fr: 'LINKEDIN', en: 'LINKEDIN' },
  github: { fr: 'GITHUB', en: 'GITHUB' },
  contact: { fr: 'CONTACT', en: 'CONTACT' },
  view: { fr: 'VOIR', en: 'VIEW' },
  open: { fr: 'OUVRIR', en: 'OPEN' },
  description: { fr: 'DESCRIPTION', en: 'DESCRIPTION' },
  realisation: { fr: 'RÉALISATION', en: 'REALIZATION' },
  dashboard: { fr: 'DASHBOARD', en: 'DASHBOARD' },
  interface: { fr: 'KIOSK', en: 'KIOSK' },
  kiosk3d: { fr: 'KIOSK 3D', en: 'KIOSK 3D' },
  realizationDesc: {
    fr: "Création d'une nouvelle version de la borne avec une nouvelle interface client et un dashboard d'administration.",
    en: "Creation of a new kiosk version with a new client interface and administration dashboard."
  },
  itsWhat: { fr: "C'EST_QUOI", en: "ABOUT THIS" },
  theProject: { fr: 'LE PROJET', en: 'THE PROJECT' },
  openTheProject: { fr: 'OUVRIR LE PROJET', en: 'OPEN THE PROJECT' },
  blockchainAdvantages: { fr: 'BLOCKCHAIN', en: 'BLOCKCHAIN' },
  blockchainDesc: {
    fr: "Toutes les transactions sont gérées de manière transparente et sécurisée grâce à la technologie blockchain à travers des smart contracts sur Ethereum.",
    en: "All transactions are managed transparently and securely using blockchain technology through smart contracts on Ethereum."
  },
  investmentAdvantages: { fr: 'AVANTAGES', en: 'ADVANTAGES' },
  investmentDesc: {
    fr: "Investir dans des packages tech offre une liquidité supérieure, des rendements potentiels plus élevés et une accessibilité plus grande comparé aux biens immobiliers.",
    en: "Investing in tech packages offers superior liquidity, higher potential returns, and greater accessibility compared to real estate."
  },
  stepDesc: {
    fr: "STEP est une application d'investissement dans l'immobilier tokenisé, permettant aux utilisateurs d'investir facilement dans des biens immobiliers via la technologie blockchain.",
    en: "STEP is an investment application in tokenized real estate, allowing users to easily invest in real estate through blockchain technology."
  },
  ticketEasyDesc: {
    fr: "Ticket-Easy est une solution professionnelle au service des magasins proposant une solution hardware et software pour lutter contre le vol de produits.",
    en: "Ticket-Easy is a professional solution serving stores by offering a hardware and software solution to combat product theft."
  },
  position: { fr: 'MON RÔLE', en: 'MY ROLE' },
  ticketEasyPosition: {
    fr: "Alternant en développement full-stack depuis septembre 2024, contribuant au développement et à l'amélioration des solutions Ticket-Easy.",
    en: "Full-stack development intern since September 2024, contributing to the development and improvement of Ticket-Easy solutions."
  },
  profileDesc: {
    fr: "Développeur blockchain passionné par les interfaces utilisateur et les expériences interactives. Spécialisé dans le développement front-end et smart contracts.",
    en: "Blockchain developer passionate about user interfaces and interactive experiences. Specialized in front-end development and smart contracts."
  },
  profileTitle: { fr: 'Etudiant en développement blockchain à l\'ESGI / Tech-Lead à Ticket-Easy', en: 'Blockchain Development Student at ESGI / Tech-Lead at Ticket-Easy' },
  backend: { fr: 'BACK-END', en: 'BACK-END' },
  backendDesc: { fr: 'Back-end et API en PHP, Node.js, Python et gestion BDD (SQL & MongoDB)', en: 'Back-end and API in PHP, Node.js, Python & Database management (SQL & MongoDB)' },
  frontend: { fr: 'FRONT-END', en: 'FRONT-END' },
  frontendDesc: { fr: 'React, Next.js et CSS Framework (Tailwind)', en: 'React, Next.js & CSS Framework (Tailwind)' },
  blockchain: { fr: 'BLOCKCHAIN', en: 'BLOCKCHAIN' },
  blockchainSkills: { fr: 'Smart Contracts en Solidity et connaissance en Technologies Blockchain', en: 'Smart Contracts in Solidity & Blockchain Technology knowledge' },
  location: { fr: 'LOCALISATION', en: 'LOCATION' },
  locationDesc: { fr: 'Paris, France', en: 'Paris, France' },
  contactInfo: { fr: 'CONTACT', en: 'CONTACT' },
  email: { fr: 'guillaume.alameda@gmail.com', en: 'guillaume.alameda@gmail.com' },
  design: { fr: 'DESIGN', en: 'DESIGN' },
  presentations: { fr: 'PRÉSENTATIONS', en: 'PRESENTATIONS' },
  website: { fr: 'SITE WEB', en: 'WEBSITE' },
  maquettes: { fr: 'MAQUETTES', en: 'MOCKUPS' },
  modelling3d: { fr: 'MODÉLISATION 3D', en: '3D MODELLING' },
  resume: { fr: 'RÉSUMÉ', en: 'SUMMARY' },
  resumeDesc: {
    fr: 'Au cours de mes projets, j\'ai travaillé sur l\'UX et l\'UI de sites web, en réalisant des maquettes pour concevoir des interfaces claires et cohérentes. Récemment, j\'ai commencé à m\'intéresser à la 3D afin d\'élargir mes compétences en conception visuelle.',
    en: 'Throughout my projects, I have worked on UX and UI design for websites, creating mockups to design clear and coherent interfaces. Recently, I have started to take interest in 3D design to expand my visual design skills.'
  },
  michelin: { fr: 'MICHELIN', en: 'MICHELIN' },
  guideMichelin: { fr: 'GUIDE MICHELIN', en: 'GUIDE MICHELIN' },
  graphic: { fr: 'GRAPHIC', en: 'GRAPHIC' },
  feed: { fr: 'FEED', en: 'FEED' },
  map: { fr: 'MAP', en: 'MAP' },
  post: { fr: 'POST', en: 'POST' },
  profile: { fr: 'PROFILE', en: 'PROFILE' },
  search: { fr: 'SEARCH', en: 'SEARCH' },
  contexte: { fr: 'CONTEXTE', en: 'CONTEXT' },
  contexteDesc: {
    fr: 'Lors d\'un hackathon organisé par mon école, nous avions 4 jours pour proposer une solution au guide Michelin pour gagner du terrain face aux réseaux sociaux auprès des 25-30 ans. La solution devait être mobile first.',
    en: 'During a hackathon organized by my school, we had 4 days to propose a solution for the Michelin guide to compete with social networks among 25-30 year olds. The solution had to be mobile first.'
  },
  solution: { fr: 'SOLUTION', en: 'SOLUTION' },
  solutionDesc: {
    fr: 'Notre solution était une application de réseau social moderne pour découvrir de la nourriture autour de nous et partager nos expériences avec notre communauté.',
    en: 'Our solution was a modern social network application to discover food around us and share our experiences with our community.'
  },
  project: { fr: 'PROJET', en: 'PROJECT' },
  view: { fr: 'VOIR', en: 'VIEW' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
