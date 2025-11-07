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
  ogImage = 'https://www.hotpflegedienst.de/hotLOGO.jpg',
  ogType = 'website'
}) => {
  const { language } = useLanguage();

  const seoContent = {
    de: {
      defaultTitle: 'HOT Intensivpflege - Häusliche Intensivpflege mit Herz in Berlin',
      defaultDescription: 'Professionelle häusliche Intensivpflege in Berlin. Beatmungspflege, Tracheostoma-Versorgung und umfassende medizinische Betreuung in vertrauter Umgebung. 24/7 für Sie da.',
      defaultKeywords: 'HOT Pflegedienst, Intensivpflege Berlin, häusliche Intensivpflege, Beatmungspflege, Tracheostoma-Versorgung, ambulante Intensivpflege, häusliche Krankenpflege, Pflegedienst Berlin, 24-Stunden-Pflege, Intensivpflegedienst',
      siteName: 'HOT Intensivpflege'
    },
    en: {
      defaultTitle: 'HOT Intensive Care - Home Intensive Care with Heart in Berlin',
      defaultDescription: 'Professional home intensive care in Berlin. Ventilator care, tracheostomy care and comprehensive medical care in familiar surroundings. Available 24/7.',
      defaultKeywords: 'HOT nursing service, intensive care Berlin, home intensive care, ventilator care, tracheostomy care, outpatient intensive care, home nursing care, nursing service Berlin, 24-hour care, intensive care service',
      siteName: 'HOT Intensive Care'
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
      <meta name="author" content="HOT Pflegedienst GmbH" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={language} />
      
      {/* Brand & Company Meta Tags */}
      <meta name="company" content="HOT Pflegedienst GmbH" />
      <meta name="business-name" content="HOT Pflegedienst" />
      <meta name="application-name" content="HOT Pflegedienst" />
      <meta name="publisher" content="HOT Pflegedienst GmbH" />
      <meta name="copyright" content="© 2024 HOT Pflegedienst GmbH. Alle Rechte vorbehalten." />
      
      {/* Google-specific tags */}
      <meta name="google-site-verification" content="" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Remove old cached URLs */}
      <meta name="google" content="nositelinksearchbox" />
      <meta name="google" content="notranslate" />
      
      {/* Additional SEO tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="theme-color" content="#FF6B35" />
      <meta name="msapplication-TileColor" content="#FF6B35" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/hotLOGO.jpg" />
      <link rel="apple-touch-icon" href="/hotLOGO.jpg" />
      <link rel="shortcut icon" href="/hotLOGO.jpg" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content="https://www.hotpflegedienst.de/" />
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
      
      {/* Canonical URL - Always point to homepage */}
      <link rel="canonical" href="https://www.hotpflegedienst.de/" />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="de" href="https://www.hotpflegedienst.de/" />
      <link rel="alternate" hrefLang="en" href="https://www.hotpflegedienst.de/" />
      <link rel="alternate" hrefLang="x-default" href="https://www.hotpflegedienst.de/" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "HOT Pflegedienst GmbH",
          "description": pageDescription,
          "url": "https://www.hotpflegedienst.de",
          "telephone": "030 91532973",
          "email": "info@hotpflegedienst.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Koloniestraße 139",
            "addressLocality": "Berlin",
            "postalCode": "13359",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.5488",
            "longitude": "13.3809"
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
