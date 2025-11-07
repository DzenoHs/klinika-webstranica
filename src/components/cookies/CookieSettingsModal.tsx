import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: CookieSettings) => void;
}

export interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieSettingsModal: React.FC<CookieSettingsProps> = ({ isOpen, onClose, onSave }) => {
  const { language } = useLanguage();
  
  const content = {
    de: {
      title: 'Cookie-Einstellungen verwalten',
      description: 'Wählen Sie aus, welche Cookies Sie zulassen möchten. Diese Einstellungen werden in Ihrem Browser gespeichert.',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden.',
      analytics: 'Analyse-Cookies',
      analyticsDesc: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
      marketing: 'Marketing-Cookies',
      marketingDesc: 'Diese Cookies werden verwendet, um relevante Werbung anzuzeigen.',
      preferences: 'Einstellungs-Cookies',
      preferencesDesc: 'Diese Cookies speichern Ihre Präferenzen und Einstellungen.',
      acceptAll: 'Alle akzeptieren',
      saveSettings: 'Einstellungen speichern',
      close: 'Schließen',
      cancel: 'Abbrechen'
    },
    en: {
      title: 'Manage Cookie Settings',
      description: 'Choose which cookies you want to allow. These settings will be saved in your browser.',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'These cookies are required for the website to function and cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'These cookies help us understand how visitors interact with the website.',
      marketing: 'Marketing Cookies',
      marketingDesc: 'These cookies are used to display relevant advertising.',
      preferences: 'Preference Cookies',
      preferencesDesc: 'These cookies store your preferences and settings.',
      acceptAll: 'Accept All',
      saveSettings: 'Save Settings',
      close: 'Close',
      cancel: 'Cancel'
    }
  };

  const t = content[language];
  
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false
  });

  if (!isOpen) return null;

  const handleToggle = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAcceptAll = () => {
    const allAccepted: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    onSave(allAccepted);
  };

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>
      
      {/* MOBILNA VERZIJA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white z-50 max-h-[90vh] overflow-y-auto rounded-t-2xl shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="font-heading text-xl font-bold text-gray-800 pr-4">
              {t.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {t.description}
          </p>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-6">
            
            {/* Necessary Cookies */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">{t.necessary}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{t.necessaryDesc}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-800">{t.analytics}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t.analyticsDesc}</p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      settings.analytics 
                        ? 'bg-primary-500 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-800">{t.marketing}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t.marketingDesc}</p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      settings.marketing 
                        ? 'bg-primary-500 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold text-gray-800">{t.preferences}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t.preferencesDesc}</p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleToggle('preferences')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      settings.preferences 
                        ? 'bg-primary-500 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleSave}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {t.saveSettings}
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAcceptAll}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={onClose}
                className="bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                {t.cancel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VERZIJA */}
      <div className="hidden md:block fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-heading text-2xl font-bold text-gray-800">
                {t.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {t.description}
            </p>

            {/* Cookie Categories */}
            <div className="space-y-6 mb-8">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{t.necessary}</h3>
                    <p className="text-gray-600">{t.necessaryDesc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{t.analytics}</h3>
                    <p className="text-gray-600">{t.analyticsDesc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleToggle('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        settings.analytics 
                          ? 'bg-primary-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{t.marketing}</h3>
                    <p className="text-gray-600">{t.marketingDesc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleToggle('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        settings.marketing 
                          ? 'bg-primary-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-6">
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">{t.preferences}</h3>
                    <p className="text-gray-600">{t.preferencesDesc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleToggle('preferences')}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        settings.preferences 
                          ? 'bg-primary-500 justify-end' 
                          : 'bg-gray-300 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow mx-1"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                {t.saveSettings}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieSettingsModal;