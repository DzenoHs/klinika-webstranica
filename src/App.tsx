import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import CookieManager from './components/cookies/CookieManager';
import CookieButton from './components/cookies/CookieButton';
import LoadingScreen from './components/LoadingScreen';
import Redirect from './components/Redirect';
import ErrorHandler from './components/ErrorHandler';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

const HomePage: React.FC = () => (
  <>
    <SEO />
    <Header />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
    <CookieManager />
    <CookieButton />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <LoadingScreen />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            
            {/* Redirect problematic URLs to homepage */}
            <Route path="/impressum-%2F-kontakt" element={<Redirect to="/" />} />
            <Route path="/impressum-/-kontakt" element={<Redirect to="/" />} />
            <Route path="/impressum/*" element={<Redirect to="/" />} />
            <Route path="/kontakt" element={<Redirect to="/" />} />
            <Route path="/contact" element={<Redirect to="/" />} />
            <Route path="/impressum-kontakt" element={<Redirect to="/" />} />
            <Route path="/impressum_kontakt" element={<Redirect to="/" />} />
            
            {/* Error Handler for problematic URLs */}
            <Route path="/error" element={<ErrorHandler />} />
            
            {/* Catch-all redirect for any unmatched routes */}
            <Route path="*" element={<Redirect to="/" />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
