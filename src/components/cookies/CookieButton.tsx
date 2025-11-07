import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CookieSettingsModal from './CookieSettingsModal';

const CookieButton: React.FC = () => {
  const { language } = useLanguage();
  
  const content = {
    de: {
      settings: 'Cookie-Einstellungen'
    },
    en: {
      settings: 'Cookie Settings'
    }
  };

  const t = content[language];
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveSettings = (settings: any) => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    console.log('Cookie settings saved:', settings);
  };

  return (
    <>
      {/* Floating Cookie Button - responsivno */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-primary-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all transform hover:scale-110 z-40 group focus:outline-none focus:ring-0"
        title={t.settings}
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"/>
        </svg>
        
        {/* Tooltip - samo na desktop */}
        <div className="hidden md:block absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {t.settings}
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveSettings}
      />
    </>
  );
};

export default CookieButton;