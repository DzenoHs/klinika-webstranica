import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load language from localStorage or default to 'de'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('hot-language');
    return (savedLang === 'de' || savedLang === 'en' || savedLang === 'tr') ? savedLang : 'de';
  });

  const handleSetLanguage = (lang: Language) => {
    console.log('Changing language from', language, 'to:', lang);
    localStorage.setItem('hot-language', lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};