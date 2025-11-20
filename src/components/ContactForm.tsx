import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm('xpwovvzo');

  const labels = {
    de: {
      name: 'Ihr Name *',
      email: 'E-Mail *',
      phone: 'Telefon (optional)',
      message: 'Ihre Nachricht *',
      send: 'Nachricht senden',
      success: 'Nachricht gesendet! Wir melden uns bald bei Ihnen.'
    },
    en: {
      name: 'Your Name *',
      email: 'Email *',
      phone: 'Phone (optional)',
      message: 'Your Message *',
      send: 'Send Message',
      success: 'Message sent! We will contact you soon.'
    },
    tr: {
      name: 'Adınız *',
      email: 'E-posta *',
      phone: 'Telefon (opsiyonel)',
      message: 'Mesajınız *',
      send: 'Mesaj Gönder',
      success: 'Mesaj gönderildi! Yakında sizinle iletişime geçeceğiz.'
    }
  };

  const t = labels[language] || labels.de;

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <img src="/hotLOGO.jpg" alt="HOT Pflegedienst" className="mx-auto mb-4 w-28 h-auto" />
        <h4 className="font-bold text-lg text-primary-900 mb-2">{t.success}</h4>
        <p className="text-sm text-gray-600">Danke — Ihre Nachricht wurde erfolgreich versendet.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Contact Form">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">{t.name}</label>
        <input id="name" name="name" required className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500" />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">{t.email}</label>
        <input id="email" type="email" name="email" required className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1.5">{t.phone}</label>
        <input id="phone" name="phone" className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500" />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">{t.message}</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-3 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-none"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <div>
        <button type="submit" disabled={state.submitting} className="w-full bg-gradient-to-r from-primary-700 to-primary-600 text-white px-4 py-3 rounded-lg text-sm font-bold hover:from-primary-800 hover:to-primary-700 transition-all shadow-lg">
          {t.send} {state.submitting ? '…' : '→'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
