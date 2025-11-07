import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ErrorHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search + location.hash;
    
    // Problematic URL patterns
    const problematicPatterns = [
      'impressum-%2F-kontakt',
      'impressum-/-kontakt',
      'impressum-%252F-kontakt',
      'impressum-kontakt',
      'impressum_kontakt',
      'kontakt',
      'contact'
    ];

    // Check if current URL is problematic
    const isProblematic = problematicPatterns.some(pattern => 
      currentPath.toLowerCase().includes(pattern.toLowerCase())
    );

    if (isProblematic) {
      console.log('🚨 Problematic URL caught by ErrorHandler:', currentPath);
      
      // Track the redirect
      if ((window as any).gtag) {
        (window as any).gtag('event', 'error_handler_redirect', {
          'page_title': 'Error Handler Redirect',
          'page_location': window.location.href,
          'redirect_reason': 'problematic_url'
        });
      }
      
      // Redirect to homepage
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <img 
          src="/hotLOGO.jpg" 
          alt="HOT Pflegedienst Logo" 
          className="mx-auto mb-4 w-32 h-32 object-contain"
        />
        <h1 className="text-2xl font-bold text-primary-700 mb-4">
          Weiterleitung...
        </h1>
        <p className="text-gray-600 mb-4">
          Sie werden zur Hauptseite von HOT Pflegedienst weitergeleitet.
        </p>
        <div className="animate-pulse">
          <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;