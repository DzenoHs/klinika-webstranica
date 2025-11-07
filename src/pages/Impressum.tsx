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
          <div className="inline-flex items-center bg-primary-700 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            Rechtliche Informationen
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Impressum
          </h1>
          <p className="text-gray-600 text-sm">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-primary-200 space-y-8">
          
          {/* Firma */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Firma
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
              Kontakt
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Telefon:</span> 030 91532973</p>
              <p><span className="font-semibold">E-Mail:</span> <a href="mailto:info@hotpflegedienst.de" className="text-primary-600 hover:text-accent-500 transition-colors">info@hotpflegedienst.de</a></p>
            </div>
          </div>

          {/* Vertretungsberechtigte */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Vertretungsberechtigte
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Geschäftsführer:</span> [Name des Geschäftsführers]</p>
            </div>
          </div>

          {/* Registereintrag */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Registereintrag
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Registergericht:</span> Amtsgericht Berlin-Charlottenburg</p>
              <p><span className="font-semibold">Registernummer:</span> HRB [Nummer]</p>
            </div>
          </div>

          {/* Umsatzsteuer-ID */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">USt-IdNr.:</span> DE[Nummer] gemäß §27a Umsatzsteuergesetz</p>
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
              <p><span className="font-semibold">Website:</span> <a href="https://www.berlin.de/lageso/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-accent-500 transition-colors">www.berlin.de/lageso</a></p>
            </div>
          </div>

          {/* Berufsbezeichnung */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Berufsbezeichnung und Regelungen
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Berufsbezeichnung:</span> Pflegedienst</p>
              <p><span className="font-semibold">Zuständige Kammer:</span> IK-Nummer bei den Krankenkassen</p>
              <p><span className="font-semibold">Verliehen in:</span> Deutschland</p>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-4 border-b-2 border-accent-500 pb-2">
              Haftungsausschluss
            </h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary-800 mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
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

        </div>

        {/* Bottom Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-primary-800 transition-all shadow-lg inline-flex items-center space-x-2"
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
