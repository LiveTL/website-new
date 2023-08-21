import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  loaders: [
    {
      locale: 'en',
      key: 'home',
      routes: ['/'], // you can use regexes as well!
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
      locale: 'cs',
      key: 'common',
      loader: async () => (await import('./translations/ja/home.json')).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
);
