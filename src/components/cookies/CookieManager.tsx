import React, { useState, useEffect } from 'react';
import CookieConsent from './CookieConsent';
import CookieSettingsModal, { type CookieSettings } from './CookieSettingsModal';

const CookieManager: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Show consent after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const defaultSettings: CookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieSettings', JSON.stringify(defaultSettings));
    setShowConsent(false);
  };

  const handleDecline = () => {
    const minimalSettings: CookieSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieSettings', JSON.stringify(minimalSettings));
    setShowConsent(false);
  };

  const handleShowSettings = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = (settings: CookieSettings) => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setShowConsent(false);
    setShowSettings(false);
  };

  return (
    <>
      {showConsent && (
        <CookieConsent
          onAccept={handleAccept}
          onDecline={handleDecline}
          onSettings={handleShowSettings}
        />
      )}
      
      <CookieSettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={handleSaveSettings}
      />
    </>
  );
};

export default CookieManager;