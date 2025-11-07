import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      badge: 'Unsere Leistungen',
      title: 'Häusliche Intensivpflege',
      titleHighlight: 'auf höchstem Niveau',
      subtitle: 'Umfassende medizinische Betreuung in der Geborgenheit Ihres Zuhauses',
      ventilation: 'Beatmungspflege',
      ventilationDesc: '24/7 Überwachung und professionelle Betreuung beatmeter Patienten',
      tracheostomy: 'Tracheostoma-Versorgung',
      tracheostomyDesc: 'Fachgerechte Pflege und Versorgung von Tracheostomas',
      medication: 'Medikamentenmanagement',
      medicationDesc: 'Sichere Verabreichung und Überwachung der Medikation',
      monitoring: 'Vitalfunktions-Überwachung',
      monitoringDesc: 'Kontinuierliche Kontrolle aller wichtigen Körperfunktionen',
      wound: 'Wundversorgung',
      woundDesc: 'Professionelle Behandlung und Pflege von Wunden',
      nutrition: 'Ernährungsmanagement',
      nutritionDesc: 'Künstliche Ernährung und Ernährungsberatung',
      physiotherapy: 'Physiotherapie',
      physiotherapyDesc: 'Mobilisation und therapeutische Übungen',
      emergency: 'Notfallmanagement',
      emergencyDesc: '24/7 Bereitschaft für medizinische Notfälle',
      familySupport: 'Angehörigenbetreuung',
      familySupportDesc: 'Beratung und Unterstützung für Familienmitglieder',
      coordination: 'Koordination mit Ärzten',
      coordinationDesc: 'Enge Zusammenarbeit mit behandelnden Ärzten',
      equipment: 'Medizinische Geräte',
      equipmentDesc: 'Bereitstellung und Wartung medizinischer Ausrüstung',
      documentation: 'Pflegedokumentation',
      documentationDesc: 'Lückenlose Dokumentation aller Pflegemaßnahmen',
      homeQuote: 'Zuhause ist dort, wo das Herz heilt.',
      homeExpertise: 'Ihr Zuhause, unsere Expertise',
      desktopTitle: 'Häusliche Intensivpflege',
      desktopSubtitle: 'Wir bieten Ihnen professionelle Pflegeleistungen – individuell auf Ihre Bedürfnisse abgestimmt.',
      benefit1: 'Vertraute Umgebung fördert die Genesung',
      benefit2: 'Familie bleibt zusammen',
      benefit3: 'Individuelle, persönliche Betreuung',
      benefit4: 'Kosteneffiziente Alternative',
      benefit4Long: 'Kosteneffiziente Alternative zum Krankenhaus',
      card1Title: 'Häusliche Intensivpflege',
      card1Subtitle: '24/7 Betreuung',
      card1Desc: 'Professionelle Versorgung mit modernster medizinischer Ausrüstung. Wir betreuen Patienten mit komplexen Krankheitsbildern sicher und kompetent.',
      card2Title: 'Krankenhausersatzpflege',
      card2Subtitle: 'Vermeidung von Klinikaufenthalten',
      card2Desc: 'Wir helfen, unnötige Krankenhausaufenthalte zu vermeiden und unterstützen Sie professionell mit ärztlich verordneter Behandlungspflege.',
      card3Title: 'Unterstützungspflege',
      card3Subtitle: 'Alltag & Lebensqualität',
      card3Desc: 'Wir entlasten Sie im Alltag und fördern Ihre Selbstständigkeit. Unsere Pflegekräfte unterstützen bei der täglichen Körperpflege.'
    },
    en: {
      badge: 'Our Services',
      title: 'Home Intensive Care',
      titleHighlight: 'at the highest level',
      subtitle: 'Comprehensive medical care in the comfort of your home',
      ventilation: 'Ventilator Care',
      ventilationDesc: '24/7 monitoring and professional care of ventilated patients',
      tracheostomy: 'Tracheostomy Care',
      tracheostomyDesc: 'Professional care and treatment of tracheostomas',
      medication: 'Medication Management',
      medicationDesc: 'Safe administration and monitoring of medication',
      monitoring: 'Vital Signs Monitoring',
      monitoringDesc: 'Continuous monitoring of all important body functions',
      wound: 'Wound Care',
      woundDesc: 'Professional treatment and care of wounds',
      nutrition: 'Nutrition Management',
      nutritionDesc: 'Artificial nutrition and nutritional counseling',
      physiotherapy: 'Physiotherapy',
      physiotherapyDesc: 'Mobilization and therapeutic exercises',
      emergency: 'Emergency Management',
      emergencyDesc: '24/7 readiness for medical emergencies',
      familySupport: 'Family Support',
      familySupportDesc: 'Counseling and support for family members',
      coordination: 'Doctor Coordination',
      coordinationDesc: 'Close cooperation with treating physicians',
      equipment: 'Medical Equipment',
      equipmentDesc: 'Provision and maintenance of medical equipment',
      documentation: 'Care Documentation',
      documentationDesc: 'Complete documentation of all care measures',
      homeQuote: 'Home is where the heart heals.',
      homeExpertise: 'Your home, our expertise',
      desktopTitle: 'Home Intensive Care',
      desktopSubtitle: 'We offer you professional care services – individually tailored to your needs.',
      benefit1: 'Familiar environment promotes healing',
      benefit2: 'Family stays together',
      benefit3: 'Individual, personal care',
      benefit4: 'Cost-effective alternative',
      benefit4Long: 'Cost-effective alternative to hospital',
      card1Title: 'Home Intensive Care',
      card1Subtitle: '24/7 Care',
      card1Desc: 'Professional care with state-of-the-art medical equipment. We care for patients with complex conditions safely and competently.',
      card2Title: 'Hospital Replacement Care',
      card2Subtitle: 'Avoiding Hospital Stays',
      card2Desc: 'We help avoid unnecessary hospital stays and support you professionally with medically prescribed treatment care.',
      card3Title: 'Support Care',
      card3Subtitle: 'Daily Life & Quality of Life',
      card3Desc: 'We relieve you in everyday life and promote your independence. Our caregivers assist with daily personal hygiene.'
    }
  };

  const t = content[language];

  return (
    <section id="services" className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full opacity-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      {/* ==================== MOBILNI LAYOUT ==================== */}
      <div className="lg:hidden relative z-10">
        <div className="px-4 py-10 space-y-8">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center bg-accent-500 px-3 py-1.5 rounded-full text-[10px] font-bold text-primary-900 shadow-lg mb-1">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              {t.badge}
            </div>
            <h2 className="font-heading text-2xl font-bold text-white leading-tight">
              {t.title}<br/>
              <span className="text-accent-500">{t.titleHighlight}</span>
            </h2>
            <p className="text-sm text-primary-100 leading-relaxed max-w-md mx-auto">
              {t.desktopSubtitle}
            </p>
          </div>

          {/* Service Cards - Mobile Stacked */}
          <div className="space-y-4">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-accent-500">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-5 text-center">
                <div className="bg-primary-900 w-14 h-14 rounded-lg flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary-900 mb-1.5 text-center">
                  {t.card1Title}
                </h3>
                <p className="text-[10px] font-semibold text-accent-600 mb-2.5 text-center uppercase tracking-wide">
                  {t.card1Subtitle}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed text-center">
                  {t.card1Desc}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-accent-500">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-5 text-center">
                <div className="bg-primary-900 w-14 h-14 rounded-lg flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary-900 mb-1.5 text-center">
                  {t.card2Title}
                </h3>
                <p className="text-[10px] font-semibold text-accent-600 mb-2.5 text-center uppercase tracking-wide">
                  {t.card2Subtitle}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed text-center">
                  {t.card2Desc}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-accent-500">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-5 text-center">
                <div className="bg-primary-900 w-14 h-14 rounded-lg flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary-900 mb-1.5 text-center">
                  {t.card3Title}
                </h3>
                <p className="text-[10px] font-semibold text-accent-600 mb-2.5 text-center uppercase tracking-wide">
                  {t.card3Subtitle}
                </p>
                <p className="text-xs text-gray-700 leading-relaxed text-center">
                  {t.card3Desc}
                </p>
              </div>
            </div>

          </div>

          {/* Why Home Care - Mobile */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 shadow-lg border-2 border-accent-500">
            <h3 className="font-heading text-lg font-bold text-white mb-4 text-center">
              Warum häusliche Intensivpflege?
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2.5 bg-primary-700/50 p-2.5 rounded-lg">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white font-medium">{t.benefit1}</span>
              </div>
              <div className="flex items-start space-x-2.5 bg-primary-700/50 p-2.5 rounded-lg">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white font-medium">{t.benefit2}</span>
              </div>
              <div className="flex items-start space-x-2.5 bg-primary-700/50 p-2.5 rounded-lg">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white font-medium">{t.benefit3}</span>
              </div>
              <div className="flex items-start space-x-2.5 bg-primary-700/50 p-2.5 rounded-lg">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-white font-medium">{t.benefit4}</span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center bg-white rounded-xl p-5 shadow-lg border-l-4 border-accent-500">
            <svg className="w-8 h-8 text-accent-500 mx-auto mb-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <p className="text-sm text-primary-900 font-bold italic leading-relaxed">
              "{t.homeQuote}"
            </p>
          </div>

        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden lg:block relative z-10">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center bg-accent-500 px-5 py-2 rounded-full text-xs font-bold text-primary-900 shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                {t.badge}
              </div>
              <h2 className="font-heading text-4xl font-bold text-white leading-tight">
                {t.desktopTitle}<br/>
                <span className="text-accent-500">{t.desktopSubtitle}</span>
              </h2>
              <p className="text-base text-primary-100 leading-relaxed max-w-2xl mx-auto">
                {t.desktopSubtitle}
              </p>
            </div>

            {/* Service Cards - Desktop Grid */}
            <div className="grid grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-accent-500 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-center">
                  <div className="bg-primary-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-2 text-center">
                    {t.card1Title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-600 mb-3 text-center uppercase tracking-wide">
                    {t.card1Subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {t.card1Desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-accent-500 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-center">
                  <div className="bg-primary-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-2 text-center">
                    {t.card2Title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-600 mb-3 text-center uppercase tracking-wide">
                    {t.card2Subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {t.card2Desc}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-accent-500 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-center">
                  <div className="bg-primary-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <svg className="w-10 h-10 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-2 text-center">
                    {t.card3Title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-600 mb-3 text-center uppercase tracking-wide">
                    {t.card3Subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {t.card3Desc}
                  </p>
                </div>
              </div>

            </div>

            {/* Why Section - Desktop Two Column */}
            <div className="grid grid-cols-2 gap-8 items-center">
              
              {/* Left - Benefits */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-3 border-accent-500">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Warum häusliche Intensivpflege?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 bg-primary-700/50 p-4 rounded-lg">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-white font-medium">{t.benefit1}</span>
                  </div>
                  <div className="flex items-start space-x-3 bg-primary-700/50 p-4 rounded-lg">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-white font-medium">{t.benefit2}</span>
                  </div>
                  <div className="flex items-start space-x-3 bg-primary-700/50 p-4 rounded-lg">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-white font-medium">{t.benefit3}</span>
                  </div>
                  <div className="flex items-start space-x-3 bg-primary-700/50 p-4 rounded-lg">
                    <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-white font-medium">{t.benefit4Long}</span>
                  </div>
                </div>
              </div>

              {/* Right - Quote Card */}
              <div className="bg-white rounded-2xl p-10 shadow-xl border-l-6 border-accent-500 text-center">
                <svg className="w-16 h-16 text-accent-500 mx-auto mb-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
                <p className="text-xl text-primary-900 font-bold italic leading-relaxed mb-5">
                  "{t.homeQuote}"
                </p>
                <div className="flex items-center justify-center space-x-2 text-accent-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold text-xs">{t.homeExpertise}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
