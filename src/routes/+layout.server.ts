import { locales, loadTranslations, translations, defaultLocale } from '$lib/translation';
import { host } from '../config.json';
import type { LayoutServerLoad } from './$types';

import LiveTLLogo from '$lib/assets/livetl/logo.png';

/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = (async ({ url, cookies, request }) => {
  const { pathname } = url;
  let locale = (cookies.get('lang') || '').toLowerCase();

  if (!locale) {
    locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
  }

  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  await loadTranslations(locale, pathname)

  const thumbnailImgURL = new URL(LiveTLLogo, host).toString();

  return {
    i18n: { locale, route: pathname },
    translations: translations.get(), // `translations` on server contain all translations loaded by different clients
    host,
    thumbnailImgURL
  };
}) satisfies LayoutServerLoad;
