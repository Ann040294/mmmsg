import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';
import { Languages } from './types';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: Languages.RU,
        resources: {
            en: {
                translation: enTranslation,
            },
            ru: {
                translation: ruTranslation,
            },
        },
        fallbackLng: Languages.EN,
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
