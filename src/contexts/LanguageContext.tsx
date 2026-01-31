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
  interface: { fr: 'INTERFACE', en: 'INTERFACE' },
  kiosk3d: { fr: 'KIOSK 3D', en: 'KIOSK 3D' },
  realizationDesc: {
    fr: "Création d'une nouvelle version de la borne avec une nouvelle interface client et un dashboard d'administration.",
    en: "Creation of a new version of the kiosk with a new client interface and an admin dashboard."
  },
  itsWhat: { fr: "C'EST_QUOI", en: "IT'S_WHAT" },
  theProject: { fr: 'LE PROJET', en: 'THE PROJECT' },
  openTheProject: { fr: 'OUVRIR LE PROJET', en: 'OPEN THE PROJECT' },
  blockchainAdvantages: { fr: 'BLOCKCHAIN', en: 'BLOCKCHAIN' },
  blockchainDesc: {
    fr: "La blockchain offre une transparence totale, une sécurité décentralisée et une immuabilité des données. Elle révolutionne les transactions et la confiance numérique.",
    en: "Blockchain offers complete transparency, decentralized security, and data immutability. It revolutionizes transactions and digital trust."
  },
  investmentAdvantages: { fr: 'AVANTAGES', en: 'ADVANTAGES' },
  investmentDesc: {
    fr: "Investir dans des packages tech offre une liquidité supérieure, des rendements potentiels plus élevés et une accessibilité plus grande comparé aux biens immobiliers.",
    en: "Investing in tech packages offers superior liquidity, higher potential returns, and greater accessibility compared to real estate."
  },
  stepDesc: {
    fr: "STEP est une application de gestion de projets personnels. Elle permet de suivre l'avancement de vos projets, de définir des étapes clés et de visualiser votre progression de manière intuitive.",
    en: "STEP is a personal project management application. It allows you to track your project progress, define key milestones, and visualize your progress intuitively."
  },
  ticketEasyDesc: {
    fr: "Ticket-Easy est une solution professionnelle au service des magasins proposant une solution hardware et software pour lutter contre le vol de produits.",
    en: "Ticket-Easy is a professional solution serving stores by offering a hardware and software solution to combat product theft."
  },
  profileDesc: {
    fr: "Développeur blockchain passionné par les interfaces utilisateur et les expériences interactives. Spécialisé dans le développement front-end et smart contracts.",
    en: "Blockchain developer passionate about user interfaces and interactive experiences. Specialized in front-end development and smart contracts."
  },
  profileTitle: { fr: 'Etudiant en développement blockchain à l\'ESGI / Tech-Lead à Ticket-Easy', en: 'Blockchain developer student at ESGI / Tech-Lead at Ticket-Easy' },
  backend: { fr: 'BACK-END', en: 'BACK-END' },
  backendDesc: { fr: 'Back-end et API en PHP, Node.js, Python et gestion BDD (SQL & MongoDB)', en: 'Back-end and API in PHP, Node.js, Python & Database management (SQL & MongoDB)' },
  frontend: { fr: 'FRONT-END', en: 'FRONT-END' },
  frontendDesc: { fr: 'React, Next.js et CSS Framework (Tailwind)', en: 'React, Next.js & CSS Framework (Tailwind)' },
  blockchain: { fr: 'BLOCKCHAIN', en: 'BLOCKCHAIN' },
  blockchainSkills: { fr: 'Smart Contracts en Solidity et connaissance en Technologies Blockchain', en: 'Smart Contracts in Solidity & knowledge in Blockchain Technologies' },
  location: { fr: 'LOCALISATION', en: 'LOCATION' },
  locationDesc: { fr: 'Paris, France', en: 'Paris, France' },
  contactInfo: { fr: 'CONTACT', en: 'CONTACT' },
  email: { fr: 'guillaume.alameda@gmail.com', en: 'guillaume.alameda@gmail.com' },
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
