import { createI18n } from 'vue-i18n';
import messages from './localizationMessages';

const fetchedLocale = await fetch('https://ipapi.co/json/')
  .then((res) => res.json())
  .then((data) => data.country_code.toLowerCase());

const locale = localStorage.getItem('locale') || fetchedLocale;

export const i18n = createI18n({
  legacy: false,
  locale: locale ?? navigator.language.slice(0, 2),
  fallbackLocale: navigator.language.slice(0, 2),
  globalInjection: true,
  messages,
});

export const supportedLocales: { [key: string]: string }[] = [
  { key: 'en', value: 'EN' },
  { key: 'lt', value: 'LT' },
];

// for usage not in Vue files
export const {
  global: { t },
} = i18n;
