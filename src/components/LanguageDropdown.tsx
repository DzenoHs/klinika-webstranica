import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageDropdown: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'de' as const, flag: '🇩🇪', name: 'Deutsch' },
    { code: 'en' as const, flag: '🇬🇧', name: 'English' },
    { code: 'tr' as const, flag: '🇹🇷', name: 'Türkçe' }
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: 'de' | 'en' | 'tr') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-primary-100 rounded-lg font-bold transition-all duration-300 shadow-md"
        aria-label="Select Language"
      >
        <span>{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl border-2 border-primary-200 overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left flex items-center space-x-3 transition-colors ${
                language === lang.code 
                  ? 'bg-accent-500 text-primary-900 font-bold' 
                  : 'hover:bg-primary-50 text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
