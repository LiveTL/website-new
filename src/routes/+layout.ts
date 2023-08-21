import type { LayoutLoad } from './$types';

import { loadTranslations } from '$lib/translation';

export const load = (async ({ url }) => {
  const { pathname } = url;
  const initLocale = 'en';

  await loadTranslations(initLocale, pathname);
  return {};
}) satisfies LayoutLoad;
