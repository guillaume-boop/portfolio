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
  ticketEasy: { fr: 'TICKET EASY', en: 'TICKET EASY' },
  step: { fr: 'STEP', en: 'STEP' },
  linkedin: { fr: 'LINKEDIN', en: 'LINKEDIN' },
  github: { fr: 'GITHUB', en: 'GITHUB' },
  contact: { fr: 'CONTACT', en: 'CONTACT' },
  view: { fr: 'VOIR', en: 'VIEW' },
  itsWhat: { fr: "C'EST_QUOI", en: "IT'S_WHAT" },
  stepDesc: {
    fr: "STEP est une application de gestion de projets personnels. Elle permet de suivre l'avancement de vos projets, de définir des étapes clés et de visualiser votre progression de manière intuitive.",
    en: "STEP is a personal project management application. It allows you to track your project progress, define key milestones, and visualize your progress intuitively."
  },
  ticketEasyDesc: {
    fr: "Ticket Easy est une solution professionnelle de billetterie événementielle. Développée pour simplifier la gestion des événements et la vente de billets en ligne.",
    en: "Ticket Easy is a professional event ticketing solution. Developed to simplify event management and online ticket sales."
  },
  profileDesc: {
    fr: "Développeur passionné par les interfaces utilisateur et les expériences interactives. Spécialisé dans le développement front-end avec une attention particulière au design.",
    en: "Developer passionate about user interfaces and interactive experiences. Specialized in front-end development with particular attention to design."
  },
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
