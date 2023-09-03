import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    // English
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
      routes: ['/livetl', '/livetl/about'],
      loader: async () =>
        (await import('./translations/en/livetl.json')).default,
    },

    // Japanese
    {
      locale: 'ja',
      key: 'home',
      loader: async () => (await import('./translations/ja/home.json')).default,
    },
  ],

  preprocess: 'preserveArrays',
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);
