import { host } from '../../config.json';

export async function GET() {

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=86400',
		'Content-Type': 'application/xml',
	};

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<url>
				<loc>${host}</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/livetl</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/livetl/about</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/livetl/install</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/hyperchat</loc>
				<lastmod>2024-02-17</lastmod>
			</url>	
			<url>
				<loc>${host}/hyperchat/about</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/hyperchat/install</loc>
				<lastmod>2024-02-17</lastmod>
			</url>	
			<url>
				<loc>${host}/ytcfilter</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/ytcfilter/install</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/about</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/contact</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/faq</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
			<url>
				<loc>${host}/privacy</loc>
				<lastmod>2024-02-17</lastmod>
			</url>
		</urlset>`.trim(),
		{
			headers
		},
	);
}