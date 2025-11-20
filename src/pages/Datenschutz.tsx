import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Datenschutz: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Datenschutzerklärung',
      subtitle: 'Gemäß DSGVO und deutschem Datenschutzrecht',
      sections: {
        responsible: 'Verantwortliche Stelle',
        categories: 'Kategorien personenbezogener Daten',
        purposes: 'Verarbeitungszwecke',
        legal: 'Rechtsgrundlagen',
        rights: 'Ihre Rechte',
        cookies: 'Cookies und Tracking',
        contact: 'Datenschutzbeauftragte',
        retention: 'Speicherdauer',
        security: 'Datensicherheit'
      }
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'According to GDPR and German data protection law',
      sections: {
        responsible: 'Responsible Party',
        categories: 'Categories of Personal Data',
        purposes: 'Processing Purposes',
        legal: 'Legal Bases',
        rights: 'Your Rights',
        cookies: 'Cookies and Tracking',
        contact: 'Data Protection Officer',
        retention: 'Data Retention',
        security: 'Data Security'
      }
    },
    tr: {
      title: 'Gizlilik Politikası',
      subtitle: 'GDPR ve Alman veri koruma yasasına göre',
      sections: {
        responsible: 'Sorumlu Taraf',
        categories: 'Kişisel Veri Kategorileri',
        purposes: 'İşleme Amaçları',
        legal: 'Yasal Temeller',
        rights: 'Haklarınız',
        cookies: 'Çerezler ve İzleme',
        contact: 'Veri Koruma Görevlisi',
        retention: 'Veri Saklama',
        security: 'Veri Güvenliği'
      }
    }
  };

  const t = content[language] || content.de;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-50">
      <Helmet>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
        <title>Datenschutzerklärung - HOT Pflegedienst</title>
        <link rel="canonical" href="https://www.hotpflegedienst.de/" />
      </Helmet>
      
      {/* Back Button - Fixed */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate('/')}
          className="bg-primary-700 text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-800 transition-all shadow-lg flex items-center space-x-2 active:scale-95"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
          </svg>
          <span>Zurück</span>
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-2">
            {t.title}
          </h1>
          <p className="text-gray-600 text-sm">
            {t.subtitle}
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-primary-200 space-y-8">
          
          {/* Verantwortliche Stelle */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.responsible}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-bold text-lg text-primary-800">HOT Pflegedienst GmbH</p>
              <p>Koloniestraße 139</p>
              <p>13359 Berlin, Deutschland</p>
              <p><span className="font-semibold">Telefon:</span> 030 91532973 / +49 174 9683438</p>
              <p><span className="font-semibold">E-Mail:</span> <a href="mailto:info@hotpflegedienst.de" className="text-primary-600 hover:text-accent-500">info@hotpflegedienst.de</a></p>
            </div>
          </div>

          {/* Kategorien personenbezogener Daten */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.categories}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>Wir verarbeiten folgende Kategorien personenbezogener Daten:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>Kontaktdaten (Name, E-Mail, Telefon)</li>
                <li>Anfragedaten (Nachrichteninhalte, Anfragethema)</li>
                <li>Nutzungsdaten (IP-Adresse, Browser-Typ, Besuchszeit)</li>
                <li>Cookies und Tracking-Informationen</li>
              </ul>
            </div>
          </div>

          {/* Verarbeitungszwecke */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.purposes}
            </h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Kontaktformular:</h3>
                <p className="text-sm">Beantwortung Ihrer Anfragen und Bereitstellung unserer Dienstleistungen.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Website-Analyse:</h3>
                <p className="text-sm">Verbesserung der Benutzerfreundlichkeit und des Angebots.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Technische Notwendigkeit:</h3>
                <p className="text-sm">Sicherung und Optimierung der Website-Funktionalität.</p>
              </div>
            </div>
          </div>

          {/* Rechtsgrundlagen */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.legal}
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p><span className="font-semibold">Art. 6 Abs. 1 a) DSGVO:</span> Ihre ausdrückliche Einwilligung</p>
              <p><span className="font-semibold">Art. 6 Abs. 1 b) DSGVO:</span> Erfüllung von Vertragspflichten</p>
              <p><span className="font-semibold">Art. 6 Abs. 1 c) DSGVO:</span> Erfüllung rechtlicher Verpflichtungen</p>
              <p><span className="font-semibold">Art. 6 Abs. 1 f) DSGVO:</span> Berechtigte Interessen</p>
            </div>
          </div>

          {/* Cookies und Tracking */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.cookies}
            </h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Notwendige Cookies:</h3>
                <p className="text-sm">Erforderlich für Sicherheit und grundlegende Funktionalität der Website.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Analyse-Cookies:</h3>
                <p className="text-sm">Helfen uns zu verstehen, wie Sie unsere Website nutzen. Sie können diese ablehnen.</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mb-1">Marketing-Cookies:</h3>
                <p className="text-sm">Ermöglichen personalisierte Inhalte. Nur mit Ihrer Zustimmung.</p>
              </div>
            </div>
          </div>

          {/* Ihre Rechte */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.rights}
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p><span className="font-semibold">Auskunftsrecht (Art. 15 DSGVO):</span> Sie haben das Recht, jederzeit kostenlos zu erfahren, welche Daten wir über Sie verarbeiten.</p>
              <p><span className="font-semibold">Berichtigungsrecht (Art. 16 DSGVO):</span> Sie können unrichtige Daten berichtigen lassen.</p>
              <p><span className="font-semibold">Löschungsrecht (Art. 17 DSGVO):</span> Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden").</p>
              <p><span className="font-semibold">Einschränkungsrecht (Art. 18 DSGVO):</span> Sie können die Verarbeitung Ihrer Daten einschränken.</p>
              <p><span className="font-semibold">Datenübertragungsrecht (Art. 20 DSGVO):</span> Sie können Ihre Daten in strukturierter, gängiger und maschinenlesbarer Form erhalten.</p>
              <p><span className="font-semibold">Widerspruchsrecht (Art. 21 DSGVO):</span> Sie können der Verarbeitung widersprechen.</p>
              <p className="text-xs text-gray-600 mt-3">
                <span className="font-semibold">Beschwerde:</span> Sie haben das Recht, eine Beschwerde bei einer Datenschutzbehörde einzureichen.
              </p>
            </div>
          </div>

          {/* Speicherdauer */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.retention}
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p><span className="font-semibold">Kontaktdaten:</span> Gelöscht nach Bearbeitung der Anfrage oder auf Wunsch.</p>
              <p><span className="font-semibold">Website-Logs:</span> Gelöscht nach 30 Tagen.</p>
              <p><span className="font-semibold">Cookies:</span> Sessioncookies werden beim Schließen des Browsers gelöscht.</p>
              <p><span className="font-semibold">Gesetzliche Aufbewahrung:</span> Wir speichern Daten soweit gesetzlich erforderlich (z.B. nach HGB/StGB).</p>
            </div>
          </div>

          {/* Datensicherheit */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              {t.sections.security}
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>Wir setzen folgende Sicherheitsmaßnahmen um:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>SSL/TLS-Verschlüsselung aller Verbindungen</li>
                <li>Sichere Passwort-Richtlinien für Administratoren</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Zugriffskontrolle und Authentifizierung</li>
                <li>Firewalls und Intrusion-Detection-Systeme</li>
              </ul>
            </div>
          </div>

          {/* Drittanbieter */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Weitergabe an Dritte
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>Ihre Daten werden an Dritte weitergegeben nur wenn:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>Sie Ihre Einwilligung gegeben haben</li>
                <li>Es gesetzlich erforderlich ist</li>
                <li>Unsere berechtigten Interessen es rechtfertigen</li>
              </ul>
              <p className="mt-3">Wir nutzen vertrauenswürdige Service-Provider (z.B. Vercel für Hosting) mit angemessenen Sicherheitsstandards.</p>
            </div>
          </div>

          {/* Datenschutzbeauftragte */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Kontakt zum Datenschutz
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>Bei Fragen zum Datenschutz können Sie sich an uns wenden:</p>
              <p className="font-semibold">E-Mail: <a href="mailto:datenschutz@hotpflegedienst.de" className="text-primary-600 hover:text-accent-500">datenschutz@hotpflegedienst.de</a></p>
              <p className="text-xs text-gray-600 mt-3">
                <span className="font-semibold">Aufsichtsbehörde:</span> Berliner Beauftragte für Datenschutz und Informationsfreiheit (BeaDi)
              </p>
            </div>
          </div>

          {/* Änderungen */}
          <div className="bg-accent-50 p-4 rounded-lg border-l-4 border-accent-500">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Änderungen dieser Datenschutzerklärung:</span> Wir behalten uns das Recht vor, diese Datenschutzerklärung anzupassen. Die aktuelle Version ist immer auf dieser Website verfügbar. Letzte Aktualisierung: November 2025
            </p>
          </div>

        </div>

        {/* Bottom Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-primary-800 transition-all shadow-lg inline-flex items-center space-x-2 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            <span>Zurück zur Startseite</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Datenschutz;
