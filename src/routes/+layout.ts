import { addTranslations, setLocale, setRoute } from '$lib/translation';

export const load = async ({ data }) => {
	const { i18n, translations, host, thumbnailImgURL } = data;
	const { locale, route } = i18n;

	addTranslations(translations);

	await setRoute(route);
	await setLocale(locale);

	return { i18n, host, thumbnailImgURL };
};