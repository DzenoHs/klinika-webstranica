import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      badge: 'Kontakt',
      title: 'Wir sind für Sie da',
      titleHighlight: '24/7 erreichbar',
      subtitle: 'Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns jederzeit – wir helfen Ihnen gerne weiter.',
      formTitle: 'Nachricht senden',
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail Adresse',
      emailPlaceholder: 'ihre@email.de',
      phoneLabel: 'Telefonnummer',
      phonePlaceholder: '+49 30 12345678',
      messageLabel: 'Ihre Nachricht',
      messagePlaceholder: 'Beschreiben Sie uns Ihr Anliegen...',
      sendButton: 'Nachricht senden',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      emergency: 'Notfall',
      emergencyDesc: '24/7 Bereitschaftsdienst',
      hours: 'Sprechzeiten',
      hoursDesc: 'Mo-Fr: 8:00-18:00 Uhr',
      successMessage: 'Nachricht gesendet! Wir melden uns bald bei Ihnen.',
      helpPlaceholder: 'Wie können wir Ihnen helfen?',
      responseTime: 'Wir antworten in der Regel innerhalb von 24 Stunden',
      contactHeader: 'Nehmen Sie Kontakt auf',
      availability: 'Wir sind rund um die Uhr für Sie erreichbar',
      reachabilityTitle: 'Erreichbarkeit',
      reachabilityDesc: '24/7 – Rund um die Uhr für Sie da',
      responseTimeDesktop: (
        <>
          Wir antworten in der Regel innerhalb von <span className="font-bold text-primary-700">24 Stunden</span>
        </>
      )
    },
    en: {
      badge: 'Contact',
      title: 'We are here for you',
      titleHighlight: '24/7 available',
      subtitle: 'Do you have questions or need support? Contact us anytime – we are happy to help you.',
      formTitle: 'Send Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'your@email.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+49 30 12345678',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Describe your concern to us...',
      sendButton: 'Send Message',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      emergency: 'Emergency',
      emergencyDesc: '24/7 Emergency Service',
      hours: 'Office Hours',
      hoursDesc: 'Mon-Fri: 8:00-18:00',
      successMessage: 'Message sent! We will contact you soon.',
      helpPlaceholder: 'How can we help you?',
      responseTime: 'We typically respond within 24 hours',
      contactHeader: 'Get in touch',
      availability: 'We are available around the clock for you',
      reachabilityTitle: 'Availability',
      reachabilityDesc: '24/7 – Around the clock for you',
      responseTimeDesktop: (
        <>
          We typically respond within <span className="font-bold text-primary-700">24 hours</span>
        </>
      )
    }
  };

  const t = content[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.successMessage);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-white via-primary-50 to-white overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* ==================== MOBILNI LAYOUT ==================== */}
      <div className="lg:hidden relative z-10">
        <div className="px-4 py-10 space-y-6">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center bg-primary-700 px-3 py-1.5 rounded-full text-[10px] font-bold text-white shadow-lg mb-1">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              {t.badge}
            </div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 leading-tight">
              {t.contactHeader}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
              {t.availability}
            </p>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-primary-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.8791846895747!2d13.373795!3d52.560547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e5c8f4c939%3A0x4a4a4a4a4a4a4a4a!2sKoloniestraße%20139%2C%2013359%20Berlin!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HOT Pflegedienst Standort"
            ></iframe>
          </div>

          {/* Quick Contact Cards */}
          <div className="space-y-3">
            
            {/* Phone */}
            <a 
              href="tel:03091532973"
              className="flex items-center bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl p-4 shadow-lg border-2 border-accent-500 active:scale-95 transition-all"
            >
              <div className="bg-accent-500 p-3 rounded-lg mr-3">
                <svg className="w-5 h-5 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-semibold text-primary-200 uppercase tracking-wide mb-0.5">Telefon 24/7</div>
                <div className="text-base font-bold text-white">030 91532973</div>
                <div className="text-sm font-semibold text-accent-400">+49 174 9683438</div>
              </div>
              <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@hotpflegedienst.de"
              className="flex items-center bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-4 shadow-lg border-2 border-accent-500 active:scale-95 transition-all"
            >
              <div className="bg-accent-500 p-3 rounded-lg mr-3">
                <svg className="w-5 h-5 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-semibold text-secondary-200 uppercase tracking-wide mb-0.5">E-Mail</div>
                <div className="text-xs font-bold text-white">info@hotpflegedienst.de</div>
              </div>
              <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* Address */}
            <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-accent-500">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 p-2.5 rounded-lg">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Unsere Adresse</div>
                  <div className="font-bold text-primary-900 text-xs leading-relaxed">
                    HOT Pflegedienst GmbH<br/>
                    Koloniestraße 139<br/>
                    13359 Berlin
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-5 border-2 border-primary-200">
            <h3 className="font-heading text-lg font-bold text-primary-900 mb-4 text-center">
              {t.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Ihr Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                  placeholder={t.phonePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-none"
                  placeholder={t.helpPlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-700 to-primary-600 text-white px-5 py-3 rounded-lg text-sm font-bold hover:from-primary-800 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                {t.sendButton} →
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-[10px] text-gray-500">
                {t.responseTime}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="hidden lg:block relative z-10">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Section Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center bg-primary-700 px-5 py-2 rounded-full text-xs font-bold text-white shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                {t.badge}
              </div>
              <h2 className="font-heading text-4xl font-bold text-primary-900 leading-tight">
                {t.contactHeader}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {t.subtitle}
              </p>
            </div>

            {/* Map Full Width */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.8791846895747!2d13.373795!3d52.560547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e5c8f4c939%3A0x4a4a4a4a4a4a4a4a!2sKoloniestraße%20139%2C%2013359%20Berlin!5e0!3m2!1sen!2sde!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HOT Pflegedienst Standort"
              ></iframe>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-2 gap-8">
              
              {/* Left - Contact Info */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a 
                  href="tel:03091532973"
                  className="flex items-center bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl p-5 shadow-lg border-3 border-accent-500 hover:scale-105 transition-all group"
                >
                  <div className="bg-accent-500 p-3 rounded-xl mr-4 group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-primary-200 uppercase tracking-wide mb-0.5">Telefon 24/7</div>
                    <div className="text-lg font-bold text-white">030 91532973</div>
                    <div className="text-base font-semibold text-accent-400">+49 174 9683438</div>
                  </div>
                  <svg className="w-5 h-5 text-accent-500 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@hotpflegedienst.de"
                  className="flex items-center bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-5 shadow-lg border-3 border-accent-500 hover:scale-105 transition-all group"
                >
                  <div className="bg-accent-500 p-3 rounded-xl mr-4 group-hover:rotate-6 transition-transform">
                    <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold text-secondary-200 uppercase tracking-wide mb-0.5">E-Mail</div>
                    <div className="text-sm font-bold text-white">info@hotpflegedienst.de</div>
                  </div>
                  <svg className="w-5 h-5 text-accent-500 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </a>

                {/* Address Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-6 border-accent-500">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Unsere Adresse</div>
                      <div className="font-bold text-primary-900 text-sm leading-relaxed">
                        HOT Pflegedienst GmbH<br/>
                        Koloniestraße 139<br/>
                        13359 Berlin
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-center shadow-lg">
                  <svg className="w-12 h-12 text-primary-900 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <h4 className="font-heading text-lg font-bold text-primary-900 mb-2">
                    {t.reachabilityTitle}
                  </h4>
                  <p className="text-sm text-primary-800 font-bold">
                    {t.reachabilityDesc}
                  </p>
                </div>

              </div>

              {/* Right - Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-200">
                <h3 className="font-heading text-2xl font-bold text-primary-900 mb-6">
                  {t.formTitle}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1.5">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                        placeholder={t.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1.5">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                      placeholder={t.phonePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-none"
                      placeholder={t.helpPlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-700 to-primary-600 text-white px-6 py-4 rounded-lg font-bold text-base hover:from-primary-800 hover:to-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {t.sendButton} →
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-xs text-gray-500">
                    {t.responseTimeDesktop}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
