import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website'
}) => {
  const { language } = useLanguage();

  const seoContent = {
    de: {
      defaultTitle: 'Intensivklinik - Häusliche Intensivpflege mit Herz in Berlin',
      defaultDescription: 'Professionelle häusliche Intensivpflege in Berlin. Beatmungspflege, Tracheostoma-Versorgung und umfassende medizinische Betreuung in vertrauter Umgebung. 24/7 für Sie da.',
      defaultKeywords: 'Intensivpflege Berlin, häusliche Intensivpflege, Beatmungspflege, Tracheostoma-Versorgung, ambulante Intensivpflege, häusliche Krankenpflege, Pflegedienst Berlin, 24-Stunden-Pflege, Intensivpflegedienst',
      siteName: 'Intensivklinik Berlin'
    },
    en: {
      defaultTitle: 'Intensivklinik - Home Intensive Care with Heart in Berlin',
      defaultDescription: 'Professional home intensive care in Berlin. Ventilator care, tracheostomy care and comprehensive medical care in familiar surroundings. Available 24/7.',
      defaultKeywords: 'intensive care Berlin, home intensive care, ventilator care, tracheostomy care, outpatient intensive care, home nursing care, nursing service Berlin, 24-hour care, intensive care service',
      siteName: 'Intensivklinik Berlin'
    }
  };

  const t = seoContent[language];
  const pageTitle = title || t.defaultTitle;
  const pageDescription = description || t.defaultDescription;
  const pageKeywords = keywords || t.defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Intensivklinik Berlin" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={language} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={t.siteName} />
      <meta property="og:locale" content={language === 'de' ? 'de_DE' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="de" href={window.location.origin + window.location.pathname} />
      <link rel="alternate" hrefLang="en" href={window.location.origin + window.location.pathname} />
      <link rel="alternate" hrefLang="x-default" href={window.location.origin + window.location.pathname} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Intensivklinik Berlin",
          "description": pageDescription,
          "url": window.location.origin,
          "telephone": "+49-30-12345678",
          "email": "info@intensivklinik-berlin.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Koloniestraße 139",
            "addressLocality": "Berlin",
            "postalCode": "13359",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.5200",
            "longitude": "13.4050"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/intensivklinik",
            "https://www.instagram.com/intensivklinik"
          ],
          "medicalSpecialty": "Intensive Care",
          "availableService": [
            {
              "@type": "MedicalProcedure",
              "name": language === 'de' ? "Beatmungspflege" : "Ventilator Care"
            },
            {
              "@type": "MedicalProcedure",
              "name": language === 'de' ? "Tracheostoma-Versorgung" : "Tracheostomy Care"
            },
            {
              "@type": "MedicalProcedure",
              "name": language === 'de' ? "Häusliche Intensivpflege" : "Home Intensive Care"
            }
          ]
        })}
      </script>

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Intensivklinik Berlin",
          "image": ogImage,
          "@id": window.location.origin,
          "url": window.location.origin,
          "telephone": "+49-30-12345678",
          "priceRange": "€€€",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Koloniestraße 139",
            "addressLocality": "Berlin",
            "postalCode": "13359",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.5200,
            "longitude": 13.4050
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
