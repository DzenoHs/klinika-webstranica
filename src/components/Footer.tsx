import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const content = {
    de: {
      motto: 'H – Hilfsbereit | O – Organisiert | T – Tolerant',
      description: 'Professionelle häusliche Intensivpflege in Berlin – mit Herz und Kompetenz für Ihre Gesundheit.',
      quickLinks: 'Schnellzugriff',
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen', 
      contact: 'Kontakt',
      contactInfo: 'Kontakt',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      emergency: 'Notfall (24/7)',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      copyright: '© 2024 HOT Pflegedienst GmbH. Alle Rechte vorbehalten.',
      language: 'Sprache',
      followUs: 'Folgen Sie uns',
      servicesTitle: 'Unsere Dienstleistungen',
      intensive: 'Intensivpflege',
      terms: 'AGB',
      ventilation: 'Beatmungspflege',
      tracheostomy: 'Tracheostomapflege',
      homeService: '24h-Betreuung'
    },
    en: {
      motto: 'H – Helpful | O – Organized | T – Tolerant',
      description: 'Professional home intensive care in Berlin – with heart and competence for your health.',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact', 
      contactInfo: 'Contact Info',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      emergency: 'Emergency (24/7)',
      legal: 'Legal',
      impressum: 'Imprint',
      privacy: 'Privacy Policy',
      copyright: '© 2024 HOT Pflegedienst GmbH. All rights reserved.',
      language: 'Language',
      followUs: 'Follow Us',
      servicesTitle: 'Our Services',
      intensive: 'Intensive Care',
      terms: 'Terms',
      ventilation: 'Ventilator Care',
      tracheostomy: 'Tracheostomy Care',
      homeService: '24/7 Care'
    }
  };

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full opacity-5 blur-3xl"></div>

      {/* ==================== MOBILNI LAYOUT ==================== */}
      <div className="lg:hidden relative z-10">
        <div className="px-4 sm:px-6 py-8 sm:py-10 space-y-6 sm:space-y-8 max-w-md mx-auto">
          
          {/* Company Info */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/hotLOGO.jpg" 
                alt="HOT Pflegedienst Logo" 
                className="h-12 w-12 object-contain rounded-full border-2 border-accent-500 shadow-lg"
              />
              <div className="text-left">
                <h3 className="font-heading text-base font-bold text-white">
                  HOT Pflegedienst GmbH
                </h3>
                <p className="text-[10px] text-accent-500 font-semibold uppercase tracking-wide">
                  H • O • T
                </p>
              </div>
            </div>
            <p className="text-xs text-primary-200 leading-relaxed max-w-xs mx-auto">
              {t.motto}
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => scrollToSection('home')}
              className="bg-primary-700/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary-600 transition-all border border-primary-600"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-primary-700/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary-600 transition-all border border-primary-600"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-primary-700/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary-600 transition-all border border-primary-600"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-700/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary-600 transition-all border border-primary-600"
            >
              {t.contact}
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-700/30 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-accent-500/50">
            <h4 className="font-bold text-sm sm:text-base text-accent-500 mb-4 text-center">{t.contactInfo}</h4>
            <div className="space-y-3 text-xs sm:text-sm text-primary-100">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-3.5 h-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Koloniestraße 139, 13359 Berlin</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-3.5 h-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:03091532973" className="hover:text-accent-500 transition-colors">030 91532973</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-3.5 h-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@hotpflegedienst.de" className="hover:text-accent-500 transition-colors">info@hotpflegedienst.de</a>
              </div>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="text-center">
            <button
              onClick={toggleLanguage}
              className="bg-accent-500 text-primary-900 px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-accent-600 transition-all shadow-lg inline-flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
              </svg>
              <span>{language === 'de' ? 'English' : 'Deutsch'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden lg:block relative z-10">
        <div className="container mx-auto px-8 py-12">
          <div className="max-w-6xl mx-auto">
            
            <div className="grid grid-cols-4 gap-8 mb-10">
              
              {/* Company Info */}
              <div className="col-span-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/hotLOGO.jpg" 
                    alt="HOT Pflegedienst Logo" 
                    className="h-14 w-14 object-contain rounded-full border-2 border-accent-500 shadow-lg"
                  />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      HOT Pflegedienst
                    </h3>
                    <p className="text-[10px] text-accent-500 font-bold uppercase tracking-wide">
                      H • O • T
                    </p>
                  </div>
                </div>
                <p className="text-xs text-primary-200 leading-relaxed">
                  Hilfsbereit, Organisiert, Tolerant – Ihre Intensivpflege mit Herz in Berlin
                </p>
              </div>

              {/* Quick Links */}
              <div className="col-span-1 space-y-3">
                <h4 className="font-bold text-sm text-accent-500 mb-4">{t.quickLinks}</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="block text-xs text-primary-100 hover:text-accent-500 transition-colors"
                  >
                    {t.home}
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block text-xs text-primary-100 hover:text-accent-500 transition-colors"
                  >
                    {t.about}
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="block text-xs text-primary-100 hover:text-accent-500 transition-colors"
                  >
                    {t.services}
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block text-xs text-primary-100 hover:text-accent-500 transition-colors"
                  >
                    {t.contact}
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-span-1 space-y-3">
                <h4 className="font-bold text-sm text-accent-500 mb-4">{t.contactInfo}</h4>
                <div className="space-y-2 text-xs text-primary-100">
                  <div className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <span>Koloniestraße 139<br/>13359 Berlin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <a href="tel:03091532973" className="hover:text-accent-500 transition-colors">030 91532973</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href="mailto:info@hotpflegedienst.de" className="hover:text-accent-500 transition-colors">info@hotpflegedienst.de</a>
                  </div>
                </div>
              </div>

              {/* Services & Language */}
              <div className="col-span-1 space-y-4">
                <h4 className="font-bold text-sm text-accent-500 mb-4">{t.servicesTitle}</h4>
                <ul className="space-y-1 text-sm">
                  <li>• {t.intensive}</li>
                  <li>• {t.ventilation}</li>
                  <li>• {t.tracheostomy}</li>
                  <li>• {t.homeService}</li>
                </ul>
                
                <button
                  onClick={toggleLanguage}
                  className="bg-accent-500 text-primary-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-accent-600 transition-all shadow-lg inline-flex items-center space-x-2 mt-4"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
                  </svg>
                  <span>{language === 'de' ? 'English' : 'Deutsch'}</span>
                </button>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <p className="text-xs text-primary-200">
                {t.copyright}
              </p>
              <div className="flex items-center space-x-4 text-xs text-primary-200">
                <Link to="/impressum" className="hover:text-accent-500 transition-colors">{t.impressum}</Link>
                <span>•</span>
                <Link to="/datenschutz" className="hover:text-accent-500 transition-colors">{t.privacy}</Link>
                <span>•</span>
                <a href="#" className="hover:text-accent-500 transition-colors">{t.terms}</a>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
