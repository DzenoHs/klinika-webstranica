import React from 'react';
import { useNavigate } from 'react-router-dom';

const Impressum: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      
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
            Impressum
          </h1>
          <p className="text-gray-600 text-sm">
            Angaben gemäß § 5 TMG (Telemediengesetz)
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-primary-200 space-y-8">
          
          {/* Firma */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Angaben des Diensteanbieters
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-bold text-lg text-primary-800">HOT Pflegedienst GmbH</p>
              <p>Koloniestraße 139</p>
              <p>13359 Berlin</p>
              <p>Deutschland</p>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Kontaktinformationen
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Telefon:</span> 030 91532973 / +49 174 9683438</p>
              <p><span className="font-semibold">E-Mail:</span> <a href="mailto:info@hotpflegedienst.de" className="text-primary-600 hover:text-accent-500 transition-colors">info@hotpflegedienst.de</a></p>
            </div>
          </div>

          {/* Vertretungsberechtigte */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Vertretungsberechtigte Person
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Geschäftsführer:</span> Vollständige Namen auf Anfrage</p>
            </div>
          </div>

          {/* Registereintrag */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Handelsregistereintrag
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Registergericht:</span> Amtsgericht Berlin-Charlottenburg</p>
              <p><span className="font-semibold">Registernummer (HRB):</span> [Eintrag folgt]</p>
            </div>
          </div>

          {/* Umsatzsteuer-ID */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">USt-IdNr.:</span> [Eintrag folgt] gemäß § 27a Umsatzsteuergesetz</p>
            </div>
          </div>

          {/* Aufsichtsbehörde */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Zuständige Aufsichtsbehörde
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Landesamt für Gesundheit und Soziales Berlin (LAGeSo)</p>
              <p>Turmstraße 21</p>
              <p>10559 Berlin</p>
              <p className="text-sm"><span className="font-semibold">Telefon:</span> 030 90229-0</p>
              <p className="text-sm"><span className="font-semibold">Website:</span> <a href="https://www.berlin.de/lageso/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-500 transition-colors">www.berlin.de/lageso</a></p>
            </div>
          </div>

          {/* Berufsbezeichnung */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Berufsbezeichnung und Regelungen
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Berufsbezeichnung:</span> Ambulanter Pflegedienst</p>
              <p><span className="font-semibold">Berufsgesetze:</span> SGB XI, SGB V, Pflegeberufegesetz (PflBG)</p>
              <p className="text-sm text-gray-600">Die Berufsangehörigen unterliegen den Regelungen der deutschen Pfleggesetze und den Sozialgesetzbüchern.</p>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Haftungsausschluss (Disclaimer)
            </h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Haftung für Inhalte</h3>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit 
                  und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir 
                  gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                  Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder 
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
                  wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren 
                  zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Medizinische Haftung</h3>
                <p>
                  Die Informationen auf dieser Website ersetzen nicht die professionelle Beratung durch medizinische 
                  Fachkräfte. HOT Pflegedienst übernimmt keine Haftung für die Verwendung dieser Informationen ohne 
                  fachliche Beratung.
                </p>
              </div>
            </div>
          </div>

          {/* Datenschutz */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Datenschutz
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                Informationen zu unserer Datenschutzpraxis finden Sie in unserer 
                <a href="/datenschutz" className="text-primary-600 hover:text-accent-500 transition-colors font-semibold"> Datenschutzerklärung</a>.
              </p>
            </div>
          </div>

          {/* Online Dispute Resolution */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Online-Streitbeilegung
            </h2>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-500 transition-colors font-semibold">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-xs text-gray-600">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>

          {/* Webdesign */}
          <div className="pt-4 border-t border-gray-300">
            <p className="text-xs text-gray-600 text-center">
              <span className="font-semibold">Website Design & Development:</span> DzenoHs Development
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

export default Impressum;
