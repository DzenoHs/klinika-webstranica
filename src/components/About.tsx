import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { language } = useLanguage();
  
  // Multiple reveal hooks for different sections
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollReveal();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollReveal();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollReveal();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollReveal();

  const content = {
    de: {
      badge: 'Über uns',
      title: 'Menschen pflegen.',
      titleHighlight: 'Herzen berühren.',
      subtitle: 'Bei HOT Pflegedienst stehen Sie im Mittelpunkt. Wir bieten Ihnen professionelle häusliche Intensivpflege mit menschlicher Wärme und fachlicher Kompetenz.',
      experience: 'Jahre Erfahrung',
      patients: 'Zufriedene Patienten',
      team: 'Fachkräfte im Team',
      hotTitle: 'Was HOT bedeutet',
      helpful: 'Hilfsbereit',
      helpfulDesc: 'Wir sind immer da, wenn Sie uns brauchen – mit Rat, Tat und einem offenen Ohr für Ihre Sorgen.',
      organized: 'Organisiert',
      organizedDesc: 'Strukturierte Abläufe und klare Kommunikation sorgen für eine reibungslose und zuverlässige Pflege.',
      tolerant: 'Tolerant',
      tolerantDesc: 'Respekt und Verständnis für jeden Menschen prägen unseren Umgang mit Ihnen und Ihren Angehörigen.',
      missionTitle: 'Unsere Mission',
      mission: 'Wir möchten, dass sich unsere Patienten in ihrer gewohnten Umgebung sicher und gut aufgehoben fühlen. Unser Ziel ist es, Ihnen und Ihren Angehörigen ein Stück Lebensqualität zurückzugeben.',
      whyChooseTitle: 'Warum HOT Pflegedienst?',
      reason1: 'Individuelle Betreuung',
      reason1Desc: 'Jeder Patient ist einzigartig – deshalb erstellen wir für jeden einen individuellen Pflegeplan.',
      reason2: '24/7 Erreichbarkeit',
      reason2Desc: 'Rund um die Uhr sind wir für Sie da, wenn Sie uns brauchen.',
      reason3: 'Qualifiziertes Team',
      reason3Desc: 'Unsere Pflegefachkräfte verfügen über langjährige Erfahrung in der Intensivpflege.',
      available: 'Verfügbar',
      atHome: 'Zuhause',
      certified: 'Zertifiziert',
      yearsStat: 'TOP',
      yearsLabel: 'Qualität',
      patientsStatMobile: '500+',
      patientsStatDesktop: '500+',
      teamStatMobile: '25+',
      teamStatDesktop: '25+',
      homeTextMobile: 'Wir bringen professionelle Intensivpflege dorthin, wo sie am wichtigsten ist – in Ihr Zuhause.',
      homeTextDesktop: 'Wir bringen Intensivpflege dorthin, wo sie am wichtigsten ist – in Ihr Zuhause.',
      complexCare: 'Komplexe medizinische Betreuung in vertrauter Umgebung. Ihr Zuhause,',
      ourCare: 'unsere Pflege.',
      missionCardTitle: 'Unsere Mission',
      missionCardText: 'Bei uns steht der Mensch im Mittelpunkt. Wir bringen professionelle Intensivpflege dorthin, wo sie am wichtigsten ist – in Ihr Zuhause.',
      whatWeDo: 'Was wir tun',
      desktopSubtitle: 'Seit Jahren vertrauen uns Familien in Berlin ihre wertvollsten Menschen an. Wir sind mehr als ein Pflegedienst – wir sind Teil Ihres Lebens, Ihre Partner in den wichtigsten Momenten.',
      beatmungTitle: 'Beatmungspflege',
      beatmungDesc: 'Professionelle respiratorische Unterstützung rund um die Uhr. Unsere Spezialisten sind im Umgang mit moderner Beatmungstechnik geschult.',
      tracTitle: 'Tracheostoma-Versorgung',
      tracDesc: 'Fachgerechte Pflege und Betreuung mit Einfühlungsvermögen. Wir sorgen für Sicherheit und Lebensqualität.',
      homeIntensiveTitle: 'Häusliche Intensivpflege',
      homeIntensiveDesc: 'Komplexe medizinische Betreuung in vertrauter Umgebung. Ihr Zuhause, unsere Expertise – die perfekte Kombination.',
      imageAlt: 'Pflege mit Herz',
      trustQualityTitle: 'Vertrauen & Qualität',
      trustQualityDescMobile: 'Zertifiziert nach höchsten Standards. Unser Team aus examinierten Pflegefachkräften arbeitet mit Herz und modernster medizinischer Expertise.',
      trustQualityDescDesktop: 'Zertifiziert nach höchsten Standards. Unser Team aus examinierten Pflegefachkräften arbeitet mit Herz und modernster medizinischer Expertise. Ihre Sicherheit und Ihr Wohlbefinden sind unsere oberste Priorität.'
    },
    en: {
      badge: 'About Us',
      title: 'Caring for people.',
      titleHighlight: 'Touching hearts.',
      subtitle: 'At HOT Pflegedienst, you are at the center. We offer professional home intensive care with human warmth and professional competence.',
      experience: 'Years of Experience',
      patients: 'Satisfied Patients',
      team: 'Specialists in Team',
      hotTitle: 'What HOT means',
      helpful: 'Helpful',
      helpfulDesc: 'We are always there when you need us – with advice, action and an open ear for your concerns.',
      organized: 'Organized',
      organizedDesc: 'Structured processes and clear communication ensure smooth and reliable care.',
      tolerant: 'Tolerant',
      tolerantDesc: 'Respect and understanding for every person shape how we interact with you and your relatives.',
      missionTitle: 'Our Mission',
      mission: 'We want our patients to feel safe and well cared for in their familiar environment. Our goal is to give you and your relatives a piece of quality of life back.',
      whyChooseTitle: 'Why HOT Pflegedienst?',
      reason1: 'Individual Care',
      reason1Desc: 'Every patient is unique – that\'s why we create an individual care plan for everyone.',
      reason2: '24/7 Availability',
      reason2Desc: 'We are there for you around the clock when you need us.',
      reason3: 'Qualified Team',
      reason3Desc: 'Our nursing specialists have many years of experience in intensive care.',
      available: 'Available',
      atHome: 'At Home',
      certified: 'Certified',
      yearsStat: 'TOP',
      yearsLabel: 'Quality',
      patientsStatMobile: '500+',
      patientsStatDesktop: '500+',
      teamStatMobile: '25+',
      teamStatDesktop: '25+',
      homeTextMobile: 'We bring professional intensive care where it matters most – to your home.',
      homeTextDesktop: 'We bring intensive care where it matters most – to your home.',
      complexCare: 'Complex medical care in familiar surroundings. Your home,',
      ourCare: 'our care.',
      missionCardTitle: 'Our Mission',
      missionCardText: 'People are at the center of our work. We bring professional intensive care where it matters most – to your home.',
      whatWeDo: 'What we do',
      desktopSubtitle: 'For years, families in Berlin have entrusted their most precious people to us. We are more than a care service – we are part of your life, your partners in the most important moments.',
      beatmungTitle: 'Ventilator Care',
      beatmungDesc: 'Professional respiratory support around the clock. Our specialists are trained in handling modern ventilator technology.',
      tracTitle: 'Tracheostomy Care',
      tracDesc: 'Expert care and support with empathy. We ensure safety and quality of life.',
      homeIntensiveTitle: 'Home Intensive Care',
      homeIntensiveDesc: 'Complex medical care in familiar surroundings. Your home, our expertise – the perfect combination.',
      imageAlt: 'Care with Heart',
      trustQualityTitle: 'Trust & Quality',
      trustQualityDescMobile: 'Certified to the highest standards. Our team of qualified nursing professionals works with heart and state-of-the-art medical expertise.',
      trustQualityDescDesktop: 'Certified to the highest standards. Our team of qualified nursing professionals works with heart and state-of-the-art medical expertise. Your safety and well-being are our top priority.'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* ==================== MOBILNI LAYOUT ==================== */}
      <div className="lg:hidden relative z-10">
        <div className="px-4 py-12 space-y-10">
          
          {/* Hero Statement */}
          <div className="text-center space-y-4">
            <div 
              ref={badgeRef}
              className={`inline-flex items-center bg-accent-500 px-4 py-2 rounded-full text-xs font-bold text-primary-900 shadow-lg mb-2 reveal ${badgeVisible ? 'animate-fade-in' : ''}`}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {t.badge}
            </div>
            <h2 
              ref={titleRef}
              className={`font-heading text-3xl font-bold text-primary-900 leading-tight reveal ${titleVisible ? 'animate-slide-up delay-100' : ''}`}
            >
              {t.title}<br/>
              <span className="text-accent-500">{t.titleHighlight}</span>
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-md mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Stats Cards */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 gap-3 reveal ${statsVisible ? 'animate-scale-in delay-200' : ''}`}
          >
            <div className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-2xl p-5 text-center shadow-xl border-2 border-accent-500">
              <div className="text-4xl font-bold text-accent-500 mb-1">24/7</div>
              <div className="text-sm text-primary-100 font-medium">{t.available}</div>
            </div>
            <div className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-2xl p-5 text-center shadow-xl border-2 border-accent-500">
              <div className="text-4xl font-bold text-accent-500 mb-1">100%</div>
              <div className="text-sm text-primary-100 font-medium">{t.atHome}</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-5 text-center shadow-xl border-2 border-accent-500">
              <div className="text-4xl font-bold text-white mb-1">IK</div>
              <div className="text-sm text-secondary-100 font-medium">{t.certified}</div>
            </div>
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-5 text-center shadow-xl border-2 border-accent-500">
              <div className="text-4xl font-bold text-white mb-1">{t.yearsStat}</div>
              <div className="text-sm text-secondary-100 font-medium">{t.yearsLabel}</div>
            </div>
          </div>

          {/* Mission Card */}
          <div 
            ref={imageRef}
            className={`relative rounded-2xl overflow-hidden shadow-2xl reveal ${imageVisible ? 'animate-scale-in delay-300' : ''}`}
          >
            <div className="relative h-48">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
                alt={t.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-heading text-xl font-bold mb-2">
                {t.missionCardTitle}
              </h3>
              <p className="text-sm text-primary-100 leading-relaxed">
                {t.missionCardText}
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-primary-900 text-center mb-6">
              {t.whatWeDo}
            </h3>
            
            <div 
              ref={card1Ref}
              className={`bg-white rounded-xl p-5 shadow-lg border-l-4 border-accent-500 reveal ${card1Visible ? 'animate-slide-left' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 mb-1">{t.beatmungTitle}</h4>
                  <p className="text-sm text-gray-600">{t.beatmungDesc}</p>
                </div>
              </div>
            </div>

            <div 
              ref={card2Ref}
              className={`bg-white rounded-xl p-5 shadow-lg border-l-4 border-secondary-500 reveal ${card2Visible ? 'animate-slide-left delay-100' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 mb-1">{t.tracTitle}</h4>
                  <p className="text-sm text-gray-600">{t.tracDesc}</p>
                </div>
              </div>
            </div>

            <div 
              ref={card3Ref}
              className={`bg-white rounded-xl p-5 shadow-lg border-l-4 border-primary-500 reveal ${card3Visible ? 'animate-slide-left delay-200' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 mb-1">{t.homeIntensiveTitle}</h4>
                  <p className="text-sm text-gray-600">{t.homeIntensiveDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-6 shadow-xl text-center border-2 border-accent-500">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <h4 className="font-heading text-xl font-bold text-white">{t.trustQualityTitle}</h4>
            </div>
            <p className="text-sm text-primary-100 leading-relaxed">
              {t.trustQualityDescMobile}
            </p>
          </div>

        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden lg:block relative z-10">
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Hero Section with Image */}
            <div className="grid grid-cols-2 gap-16 items-center">
              
              {/* Left - Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center bg-accent-500 px-5 py-2.5 rounded-full text-sm font-bold text-primary-900 shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  {t.badge}
                </div>
                <h2 className="font-heading text-5xl font-bold text-primary-900 leading-tight">
                  {t.title}<br/>
                  <span className="text-accent-500">{t.titleHighlight}</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t.desktopSubtitle}
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4 pt-6">
                  <div className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl p-5 text-center shadow-lg border-2 border-accent-500">
                    <div className="text-4xl font-bold text-accent-500 mb-1">24/7</div>
                    <div className="text-sm text-primary-100 font-medium">{t.available}</div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl p-5 text-center shadow-lg border-2 border-accent-500">
                    <div className="text-4xl font-bold text-accent-500 mb-1">100%</div>
                    <div className="text-sm text-primary-100 font-medium">{t.atHome}</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-5 text-center shadow-lg border-2 border-accent-500">
                    <div className="text-4xl font-bold text-white mb-1">IK</div>
                    <div className="text-sm text-secondary-100 font-medium">{t.certified}</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-5 text-center shadow-lg border-2 border-accent-500">
                    <div className="text-4xl font-bold text-white mb-1">{t.yearsStat}</div>
                    <div className="text-sm text-secondary-100 font-medium">{t.yearsLabel}</div>
                  </div>
                </div>
              </div>

              {/* Right - Image with Overlay */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent-500 transform hover:scale-105 transition-transform duration-500">
                  <div className="relative h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80"
                      alt={t.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="font-heading text-2xl font-bold mb-3">
                      {t.missionTitle}
                    </h3>
                    <p className="text-lg text-primary-100 leading-relaxed">
                      {t.homeTextDesktop}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Services Section */}
            <div className="space-y-10">
              <h3 className="font-heading text-4xl font-bold text-primary-900 text-center">
                {t.whatWeDo}
              </h3>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-accent-500 hover:shadow-2xl transition-shadow">
                  <div className="bg-accent-100 p-4 rounded-xl inline-block mb-6">
                    <svg className="w-10 h-10 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-primary-900 mb-4">{t.beatmungTitle}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t.beatmungDesc}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-secondary-500 hover:shadow-2xl transition-shadow">
                  <div className="bg-secondary-100 p-4 rounded-xl inline-block mb-6">
                    <svg className="w-10 h-10 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-primary-900 mb-4">{t.tracTitle}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t.tracDesc}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-8 border-primary-500 hover:shadow-2xl transition-shadow">
                  <div className="bg-primary-100 p-4 rounded-xl inline-block mb-6">
                    <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-primary-900 mb-4">{t.homeIntensiveTitle}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t.homeIntensiveDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-3xl p-12 shadow-2xl text-center border-4 border-accent-500">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <svg className="w-16 h-16 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <h4 className="font-heading text-3xl font-bold text-white">{t.trustQualityTitle}</h4>
              </div>
              <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
                {t.trustQualityDescDesktop}
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
