import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
  onSettings: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline, onSettings }) => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Sie können wählen, welche Cookies Sie zulassen möchten.',
      accept: 'Alle akzeptieren',
      decline: 'Alle ablehnen',
      settings: 'Einstellungen',
      moreInfo: 'Mehr erfahren'
    },
    en: {
      title: 'Cookie Settings',
      description: 'This website uses cookies to improve your experience. You can choose which cookies you want to allow.',
      accept: 'Accept All',
      decline: 'Decline All',
      settings: 'Settings',
      moreInfo: 'Learn More'
    }
  };

  const t = content[language];

  return (
    <>
      {/* MOBILNA VERZIJA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-4 border-primary-500">
        <div className="p-4">
          {/* Header sa ikonom */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-primary-100 p-2 rounded-full flex-shrink-0">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
              </svg>
            </div>
            <h3 className="font-heading text-base font-bold text-gray-800">
              {t.title}
            </h3>
          </div>

          {/* Opis */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {t.description}
          </p>

          {/* Dugmad - mobilni layout */}
          <div className="space-y-2">
            <button
              onClick={onAccept}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors focus:outline-none focus:ring-0"
            >
              {t.accept}
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={onDecline}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-0"
              >
                {t.decline}
              </button>
              <button
                onClick={onSettings}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors focus:outline-none focus:ring-0"
              >
                {t.settings}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERZIJA */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-4 border-primary-500">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex items-center gap-6">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div className="bg-primary-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-gray-800 mb-2">
                {t.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onSettings}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium focus:outline-none focus:ring-0"
              >
                {t.settings}
              </button>
              <button
                onClick={onDecline}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium focus:outline-none focus:ring-0"
              >
                {t.decline}
              </button>
              <button
                onClick={onAccept}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium focus:outline-none focus:ring-0"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;