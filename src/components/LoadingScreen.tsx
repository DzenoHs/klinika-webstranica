import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200); // 1.2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative">
        {/* Logo container with pulse effect */}
        <div className="animate-pulse-glow">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
          >
            {/* Background circle with gradient */}
            <circle cx="60" cy="60" r="58" fill="url(#grad1)" />
            <circle cx="60" cy="60" r="58" fill="url(#grad2)" opacity="0.5" />
            
            {/* Medical cross */}
            <rect x="52" y="35" width="16" height="50" rx="2" fill="white" opacity="0.9" />
            <rect x="35" y="52" width="50" height="16" rx="2" fill="white" opacity="0.9" />
            
            {/* Heart pulse line */}
            <path 
              d="M25 60 L35 60 L42 45 L48 75 L54 60 L95 60" 
              stroke="#F59E0B" 
              strokeWidth="3" 
              strokeLinecap="round"
              fill="none"
              className="animate-pulse-line"
            />
            
            {/* IK letters */}
            <text 
              x="60" 
              y="105" 
              fontSize="18" 
              fontWeight="bold" 
              fill="white" 
              textAnchor="middle"
              fontFamily="Poppins, sans-serif"
            >
              IK
            </text>

            {/* Gradients */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-semibold animate-pulse">
            HOT Intensivpflege
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
