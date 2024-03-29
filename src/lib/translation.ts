import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  log: {
    level: dev ? 'debug' : 'warn',
  },
  translations: {
    en: {
      name: 'English',
    },
    ja: {
      name: '日本語',
    },
  },
  loaders: [
    // English
    {
      locale: 'en',
      key: 'common',
      loader: async () =>
        (await import('./translations/en/common.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (await import('./translations/en/home.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () =>
        (await import('./translations/en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'contact',
      routes: ['/contact'],
      loader: async () =>
        (await import('./translations/en/contact.json')).default,
    },
    {
      locale: 'en',
      key: 'faq',
      routes: ['/faq'],
      loader: async () => (await import('./translations/en/faq.json')).default,
    },
    {
      locale: 'en',
      key: 'privacy',
      routes: ['/privacy'],
      loader: async () =>
        (await import('./translations/en/privacy.json')).default,
    },
    {
      locale: 'en',
      key: 'ytcfilter',
      routes: ['/ytcfilter'],
      loader: async () =>
        (await import('./translations/en/ytcfilter.json')).default,
    },
    {
      locale: 'en',
      key: 'livetl',
      routes: ['/livetl', '/livetl/about', '/livetl/install'],
      loader: async () =>
        (await import('./translations/en/livetl.json')).default,
    },
    {
      locale: 'en',
      key: 'hyperchat',
      routes: ['/hyperchat', '/hyperchat/about', '/hyperchat/install'],
      loader: async () =>
        (await import('./translations/en/hyperchat.json')).default,
    },

    // Japanese
    {
      locale: 'ja',
      key: 'common',
      loader: async () =>
        (await import('./translations/ja/common.json')).default,
    },
    {
      locale: 'ja',
      key: 'home',
      loader: async () => (await import('./translations/ja/home.json')).default,
    },
    {
      locale: 'ja',
      key: 'about',
      routes: ['/about'],
      loader: async () =>
        (await import('./translations/ja/about.json')).default,
    },
    {
      locale: 'ja',
      key: 'contact',
      routes: ['/contact'],
      loader: async () =>
        (await import('./translations/ja/contact.json')).default,
    },
    {
      locale: 'ja',
      key: 'faq',
      routes: ['/faq'],
      loader: async () => (await import('./translations/ja/faq.json')).default,
    },
    {
      locale: 'ja',
      key: 'privacy',
      routes: ['/privacy'],
      loader: async () =>
        (await import('./translations/ja/privacy.json')).default,
    },
    {
      locale: 'ja',
      key: 'ytcfilter',
      routes: ['/ytcfilter'],
      loader: async () =>
        (await import('./translations/ja/ytcfilter.json')).default,
    },
    {
      locale: 'ja',
      key: 'livetl',
      routes: ['/livetl', '/livetl/about', '/livetl/install'],
      loader: async () =>
        (await import('./translations/ja/livetl.json')).default,
    },
    {
      locale: 'ja',
      key: 'hyperchat',
      routes: ['/hyperchat', '/hyperchat/about', '/hyperchat/install'],
      loader: async () =>
        (await import('./translations/ja/hyperchat.json')).default,
    },
  ],
  preprocess: 'preserveArrays',
};

export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
  // @ts-ignore
} = new i18n({
  ...config,
});
