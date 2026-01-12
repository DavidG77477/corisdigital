import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: string | Translations;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  translations: {
    fr: Translations;
    en: Translations;
  };
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children, translations }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('language');
    if (saved === 'fr' || saved === 'en') {
      console.log('[i18n] Using saved language:', saved);
      return saved;
    }
    const browserLang = navigator.language.split('-')[0];
    const detected = browserLang === 'fr' ? 'fr' : 'en';
    console.log('[i18n] Detected browser language:', browserLang, '->', detected);
    return detected;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      console.log('[i18n] Language changed to:', language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    try {
      const langTranslations = translations[language];
      
      if (!langTranslations) {
        console.warn(`[i18n] No translations found for language: ${language}`);
        return key;
      }
      
      // Direct key access (for flat structure like 'nav.home')
      if (key in langTranslations) {
        const value = langTranslations[key];
        if (typeof value === 'string') {
          return value;
        }
      }
      
      // Try nested access (for structure like nav.home -> nav: { home: ... })
      const keys = key.split('.');
      let value: any = langTranslations;
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          console.warn(`[i18n] Translation key not found: ${key} (stopped at ${k}), language: ${language}`);
          return key;
        }
      }
      
      if (typeof value === 'string') {
        return value;
      }
      
      return key;
    } catch (error) {
      console.error('[i18n] Translation error:', error, 'for key:', key, 'language:', language);
      return key;
    }
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};

