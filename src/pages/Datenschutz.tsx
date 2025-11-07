import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Datenschutz: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Datenschutzerklärung',
      subtitle: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten'
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Information about data protection and the processing of personal data'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-secondary-500">
          <h1 className="font-heading text-4xl font-bold text-secondary-800 mb-4">
            {t.title}
          </h1>
          <p className="text-gray-600">
            {t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {/* Placeholder content - you can replace with actual content */}
            <div className="space-y-8">
              <section>
                <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4">
                  Datenschutzerklärung
                </h2>
                <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500">
                  <p className="text-gray-700 leading-relaxed">
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
                    Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der 
                    gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                  Verantwortliche Stelle
                </h3>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>HOT Pflegedienst GmbH</strong><br />
                    Koloniestraße 139<br />
                    13359 Berlin<br />
                    Deutschland<br />
                    E-Mail: info@hotpflegedienst.de<br />
                    Telefon: 030 91532973
                  </p>
                </div>
              </section>

              {/* Cookie Information */}
              <section>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                  Cookies und Tracking
                </h3>
                <div className="bg-accent-50 p-6 rounded-lg border-l-4 border-accent-500">
                  <p className="text-gray-700 mb-4">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Notwendige Cookies</h4>
                      <p className="text-gray-600 text-sm">
                        Erforderlich für die grundlegende Funktionalität der Website.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Analyse Cookies</h4>
                      <p className="text-gray-600 text-sm">
                        Helfen uns, die Nutzung der Website zu verstehen und zu verbessern.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                  Ihre Rechte
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Auskunftsrecht',
                    'Recht auf Berichtigung',
                    'Recht auf Löschung',
                    'Recht auf Einschränkung',
                    'Recht auf Datenübertragbarkeit',
                    'Widerspruchsrecht'
                  ].map((right, index) => (
                    <div key={index} className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">{right}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        [Beschreibung des Rechts hier einfügen]
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Placeholder for more content */}
              <section>
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
                  Weitere Informationen
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    Hier können Sie weitere Abschnitte Ihrer Datenschutzerklärung einfügen:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600 text-sm">
                    <li>Datenerfassung auf unserer Website</li>
                    <li>Kontaktformulare</li>
                    <li>Newsletter</li>
                    <li>Social Media Plugins</li>
                    <li>Analyse Tools & Werbung</li>
                    <li>Plugins und Tools</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
          >
            ← Zurück zur Startseite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;