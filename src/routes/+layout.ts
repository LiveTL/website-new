import type { LayoutLoad } from './$types';

import { loadTranslations } from '$lib/translation';

export const ssr = false;

export const load = (async ({ url }) => {
  const { pathname } = url;
  const initLocale = localStorage.getItem('lang') || 'en';

  await loadTranslations(initLocale, pathname);
  return {};
}) satisfies LayoutLoad;
