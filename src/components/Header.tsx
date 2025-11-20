import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageDropdown from './LanguageDropdown';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    de: {
      home: 'Startseite',
      about: 'Über uns', 
      services: 'Leistungen',
      contact: 'Kontakt',
      motto: 'H – Hilfsbereit | O – Organisiert | T – Tolerant'
    },
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services', 
      contact: 'Contact',
      motto: 'H – Helpful | O – Organized | T – Tolerant'
    },
    tr: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      contact: 'İletişim',
      motto: 'H – Yardımsever | O – Organize | T – Hoşgörülü'
    }
  };

  const t = content[language] || content.de;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-primary-700 shadow-xl sticky top-0 z-50 border-b-2 border-accent-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/hotLOGO.jpg" 
              alt="HOT Pflegedienst Logo" 
              className="h-12 w-auto sm:h-14 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="font-heading text-base sm:text-xl font-bold text-accent-500 tracking-wide leading-tight">
                HOT Pflegedienst
              </h1>
              <p className="hidden sm:block text-xs text-primary-200 font-medium tracking-wider">
                {t.motto}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-primary-100 hover:text-accent-500 font-semibold transition-all duration-300 uppercase tracking-wider text-sm xl:text-base relative group"
            >
              {t.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-primary-100 hover:text-accent-500 font-semibold transition-all duration-300 uppercase tracking-wider text-sm xl:text-base relative group"
            >
              {t.about}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-primary-100 hover:text-accent-500 font-semibold transition-all duration-300 uppercase tracking-wider text-sm xl:text-base relative group"
            >
              {t.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-primary-100 hover:text-accent-500 font-semibold transition-all duration-300 uppercase tracking-wider text-sm xl:text-base relative group"
            >
              {t.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Language Dropdown - Desktop */}
            <div className="ml-4">
              <LanguageDropdown />
            </div>
            {/* Uncomment to use dropdown instead of buttons
            <div className="relative ml-4" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-primary-100 rounded-lg font-bold transition-all duration-300 shadow-md"
              >
                <span>
                  {language === 'de' && '🇩🇪 DE'}
                  {language === 'en' && '🇬🇧 EN'}
                  {language === 'tr' && '🇹🇷 TR'}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-2xl border-2 border-primary-200 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      setLanguage('de');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-2 transition-colors ${
                      language === 'de' ? 'bg-accent-500 text-primary-900 font-bold' : 'hover:bg-primary-50 text-gray-700'
                    }`}
                  >
                    <span>🇩🇪</span>
                    <span>Deutsch</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-2 transition-colors ${
                      language === 'en' ? 'bg-accent-500 text-primary-900 font-bold' : 'hover:bg-primary-50 text-gray-700'
                    }`}
                  >
                    <span>🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('tr');
                      setIsLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center space-x-2 transition-colors ${
                      language === 'tr' ? 'bg-accent-500 text-primary-900 font-bold' : 'hover:bg-primary-50 text-gray-700'
                    }`}
                  >
                    <span>🇹🇷</span>
                    <span>Türkçe</span>
                  </button>
                </div>
              )}
            </div>
            */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Language Dropdown - Mobile */}
            <LanguageDropdown />

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-100 hover:text-accent-500 focus:outline-none transition-colors duration-300"
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Slide Down Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-primary-800 text-primary-100 px-4 py-6 space-y-4 border-t border-primary-600">
          <button
            onClick={() => scrollToSection('home')}
            className="w-full text-center py-3 px-4 hover:bg-primary-700 hover:text-accent-500 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg"
          >
            {t.home}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="w-full text-center py-3 px-4 hover:bg-primary-700 hover:text-accent-500 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg"
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full text-center py-3 px-4 hover:bg-primary-700 hover:text-accent-500 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg"
          >
            {t.services}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-center py-3 px-4 hover:bg-primary-700 hover:text-accent-500 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg"
          >
            {t.contact}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
