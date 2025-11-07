import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useParallax } from '../hooks/useScrollAnimation';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { ref: parallaxRef, offset } = useParallax(0.5);
  
  // Scroll reveal for hero elements
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollReveal();

  const content = {
    de: {
      available: '24/7 Verfügbar',
      welcome: 'Häusliche Intensivpflege mit Herz',
      welcomeHighlight: 'Intensivpflege',
      helpful: 'Hilfsbereit',
      organized: 'Organisiert',
      tolerant: 'Tolerant',
      subtitle: 'Professionelle Intensivpflege in vertrauter Umgebung. Wir unterstützen Sie mit Beatmungspflege und Tracheostoma-Versorgung.',
      subtitleDesktop: 'Professionelle Intensivpflege in vertrauter Umgebung. Wir unterstützen Sie mit Beatmungspflege, Tracheostoma-Versorgung und komplexer medizinischer Betreuung – dort, wo Sie sich am wohlsten fühlen.',
      cta: 'Jetzt Beratung anfordern',
      services: 'Unsere Leistungen',
      care: 'Betreuung',
      home: 'Zuhause',
      certified: 'Zertifiziert',
      certifiedBadge: 'IK Zertifiziert',
      experienced: 'Erfahren',
      availableBadge: '24/7 Pflege'
    },
    en: {
      available: '24/7 Available',
      welcome: 'Home Intensive Care with Heart',
      welcomeHighlight: 'Intensive Care',
      helpful: 'Helpful',
      organized: 'Organized',
      tolerant: 'Tolerant',
      subtitle: 'Professional intensive care in familiar surroundings. We support you with ventilator care and tracheostomy care.',
      subtitleDesktop: 'Professional intensive care in familiar surroundings. We support you with ventilator care, tracheostomy care and complex medical care – where you feel most comfortable.',
      cta: 'Request Consultation Now',
      services: 'Our Services',
      care: 'Care',
      home: 'At Home',
      certified: 'Certified',
      certifiedBadge: 'IK Certified',
      experienced: 'Experienced',
      availableBadge: '24/7 Care'
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
    <section id="home" className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 min-h-screen overflow-hidden">
      
      {/* Background Pattern with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-10 gpu-accelerate"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* ==================== MOBILNI LAYOUT (do 1024px) ==================== */}
      <div className="lg:hidden relative z-10">
        <div className="px-4 py-8 space-y-6">
          
          {/* Badge */}
          <div className="flex justify-center">
            <div 
              ref={badgeRef}
              className={`inline-flex items-center bg-accent-500 text-primary-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg reveal ${badgeVisible ? 'animate-fade-in' : ''}`}
            >
              <span className="w-2 h-2 bg-primary-900 rounded-full mr-2 animate-pulse"></span>
              {t.available}
            </div>
          </div>

          {/* Main Heading */}
          <h1 
            ref={titleRef}
            className={`font-heading text-3xl font-bold text-white leading-tight text-center px-2 reveal ${titleVisible ? 'animate-slide-up delay-100' : ''}`}
          >
            {language === 'de' ? (
              <>Häusliche <span className="text-accent-500">Intensivpflege</span> mit Herz</>
            ) : (
              <>Home <span className="text-accent-500">Intensive Care</span> with Heart</>
            )}
          </h1>

          {/* HOT Values - Stacked Cards */}
          <div className="space-y-3 max-w-sm mx-auto">
            <div 
              ref={card1Ref}
              className={`bg-primary-600 border-2 border-accent-500 text-white px-4 py-3 rounded-xl font-bold text-sm text-center shadow-lg reveal ${card1Visible ? 'animate-fade-in delay-200' : ''}`}
            >
              <span className="text-accent-500 text-xl">H</span> – {t.helpful}
            </div>
            <div 
              ref={card2Ref}
              className={`bg-primary-600 border-2 border-accent-500 text-white px-4 py-3 rounded-xl font-bold text-sm text-center shadow-lg reveal ${card2Visible ? 'animate-fade-in delay-300' : ''}`}
            >
              <span className="text-accent-500 text-xl">O</span> – {t.organized}
            </div>
            <div 
              ref={card3Ref}
              className={`bg-primary-600 border-2 border-accent-500 text-white px-4 py-3 rounded-xl font-bold text-sm text-center shadow-lg reveal ${card3Visible ? 'animate-fade-in delay-400' : ''}`}
            >
              <span className="text-accent-500 text-xl">T</span> – {t.tolerant}
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-primary-100 leading-relaxed text-center max-w-md mx-auto px-2">
            {language === 'de' ? (
              <>Professionelle <span className="text-accent-500 font-semibold">Intensivpflege</span> in vertrauter Umgebung. 
              Wir unterstützen Sie mit <span className="text-white font-semibold">Beatmungspflege und Tracheostoma-Versorgung</span>.</>
            ) : (
              <>Professional <span className="text-accent-500 font-semibold">intensive care</span> in familiar surroundings. 
              We support you with <span className="text-white font-semibold">ventilator care and tracheostomy care</span>.</>
            )}
          </p>

          {/* Image Section */}
          <div 
            ref={imageRef}
            className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-accent-500 max-w-md mx-auto reveal ${imageVisible ? 'animate-scale-in delay-500' : ''}`}
          >
            <div className="relative h-72">
              <img 
                src="/slikaPocetna.png" 
                alt="HOT Pflegedienst"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-primary-700/40"></div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-3 left-3 right-3 bg-primary-800/95 backdrop-blur-md rounded-xl p-4 border-2 border-accent-500 shadow-2xl">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent-500">24/7</div>
                  <div className="text-xs text-primary-200 font-medium">{t.care}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-500">100%</div>
                  <div className="text-xs text-primary-200 font-medium">{t.home}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-500">IK</div>
                  <div className="text-xs text-primary-200 font-medium">{t.certified}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
            <div className="flex flex-col items-center bg-primary-700/60 backdrop-blur-sm px-2 py-3 rounded-lg border border-accent-500/50 shadow-lg">
              <svg className="w-6 h-6 text-accent-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-white text-[10px] text-center leading-tight">
                {language === 'de' ? 'Zertifi-' : 'Certi-'}<br/>{language === 'de' ? 'ziert' : 'fied'}
              </span>
            </div>
            <div className="flex flex-col items-center bg-primary-700/60 backdrop-blur-sm px-2 py-3 rounded-lg border border-accent-500/50 shadow-lg">
              <svg className="w-6 h-6 text-accent-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-bold text-white text-[10px] text-center">{t.experienced}</span>
            </div>
            <div className="flex flex-col items-center bg-primary-700/60 backdrop-blur-sm px-2 py-3 rounded-lg border border-accent-500/50 shadow-lg">
              <svg className="w-6 h-6 text-accent-500 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-white text-[10px] text-center leading-tight">
                24/7<br/>{language === 'de' ? 'Pflege' : 'Care'}
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 max-w-sm mx-auto pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-accent-500 text-primary-900 px-6 py-4 rounded-xl font-bold text-base hover:bg-accent-600 active:scale-95 transition-all duration-300 shadow-xl"
            >
              {t.cta} →
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full bg-primary-700 text-white px-6 py-4 rounded-xl font-bold text-base border-2 border-accent-500 hover:bg-primary-600 active:scale-95 transition-all duration-300 shadow-lg"
            >
              {t.services}
            </button>
          </div>

          {/* Quick Contact */}
          <div className="text-center pt-2">
            <a 
              href="tel:03091532973" 
              className="inline-flex items-center space-x-2 text-accent-500 font-semibold text-base hover:text-accent-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>030 91532973</span>
            </a>
          </div>

        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT (1024px+) ==================== */}
      <div className="hidden lg:flex lg:items-center lg:min-h-screen">
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE - Content */}
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center bg-accent-500 text-primary-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg">
                <span className="w-2.5 h-2.5 bg-primary-900 rounded-full mr-2 animate-pulse"></span>
                {t.available} in Berlin
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-6xl xl:text-7xl font-bold text-white leading-tight">
                {language === 'de' ? (
                  <>Häusliche <span className="text-accent-500">Intensivpflege</span> mit Herz</>
                ) : (
                  <>Home <span className="text-accent-500">Intensive Care</span> with Heart</>
                )}
              </h1>

              {/* HOT Values */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary-600 border-2 border-accent-500 text-white px-5 py-3 rounded-xl font-bold text-base backdrop-blur-sm">
                  <span className="text-accent-500 text-2xl">H</span> – {t.helpful}
                </div>
                <div className="bg-primary-600 border-2 border-accent-500 text-white px-5 py-3 rounded-xl font-bold text-base backdrop-blur-sm">
                  <span className="text-accent-500 text-2xl">O</span> – {t.organized}
                </div>
                <div className="bg-primary-600 border-2 border-accent-500 text-white px-5 py-3 rounded-xl font-bold text-base backdrop-blur-sm">
                  <span className="text-accent-500 text-2xl">T</span> – {t.tolerant}
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-primary-100 leading-relaxed max-w-xl">
                {language === 'de' ? (
                  <>Professionelle <span className="text-accent-500 font-semibold">Intensivpflege</span> in vertrauter Umgebung. 
                  Wir unterstützen Sie mit <span className="text-white font-semibold">Beatmungspflege, Tracheostoma-Versorgung</span> und 
                  komplexer medizinischer Betreuung – dort, wo Sie sich am wohlsten fühlen.</>
                ) : (
                  <>Professional <span className="text-accent-500 font-semibold">intensive care</span> in familiar surroundings. 
                  We support you with <span className="text-white font-semibold">ventilator care, tracheostomy care</span> and 
                  complex medical care – where you feel most comfortable.</>
                )}
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-3 bg-primary-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-600">
                  <svg className="w-6 h-6 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-white text-sm">{t.certifiedBadge}</span>
                </div>
                <div className="flex items-center space-x-3 bg-primary-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-600">
                  <svg className="w-6 h-6 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-semibold text-white text-sm">{t.experienced}</span>
                </div>
                <div className="flex items-center space-x-3 bg-primary-700/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-600">
                  <svg className="w-6 h-6 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-white text-sm">{t.availableBadge}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent-500 text-primary-900 px-8 py-5 rounded-xl font-bold text-lg hover:bg-accent-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  {t.cta} →
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-primary-700 text-white px-8 py-5 rounded-xl font-bold text-lg border-2 border-accent-500 hover:bg-primary-600 hover:shadow-xl transition-all duration-300"
                >
                  {t.services}
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent-500 transform hover:scale-105 transition-transform duration-500">
                <div className="relative h-[600px]">
                  <img 
                    src="/slikaPocetna.png" 
                    alt="HOT Pflegedienst - Häusliche Intensivpflege"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-primary-700/20"></div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-primary-800/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-accent-500">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-accent-500">24/7</div>
                      <div className="text-sm text-primary-200 font-medium">{t.care}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-500">100%</div>
                      <div className="text-sm text-primary-200 font-medium">{t.home}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent-500">IK</div>
                      <div className="text-sm text-primary-200 font-medium">{t.certified}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-500 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary-600 rounded-full opacity-30 blur-3xl"></div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
