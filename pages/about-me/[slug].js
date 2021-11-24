import Link from 'next/link'
import Head from 'next/head'
import { getTimelines } from '../../services/dataService'
import { SUPPORT_LOCALES } from '../../common/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function AboutMeSlug({ slug, title, content }) {
	return (
		<>
			<Head>
				<title>{title} | D.TECH</title>
			</Head>
			<section className="container mx-auto">
				<h1 className="text-2xl text-center font-bold">
					{title}
				</h1>
				<p className="text-lg text-center">
					{content}
				</p>
				<div className="h-screen grid grid-cols-1 justify-items-center">
					<Link href="/">
						<a className="text-lg font-semibold underline my-auto">
							<p>Back to Home</p>
						</a>
					</Link>
				</div>

			</section>
		</>
	);
}

export async function getStaticPaths() {
	const vi_timelines = getTimelines(SUPPORT_LOCALES.vi);
	const vi_paths = vi_timelines.map(tl => ({
		params: { slug: tl.slug, },
		locale: SUPPORT_LOCALES.vi
	}));

	const en_timelines = getTimelines(SUPPORT_LOCALES.en);
	const en_paths = en_timelines.map(tl => ({
		params: { slug: tl.slug, },
		locale: SUPPORT_LOCALES.en
	}));

	return {
		paths: [...vi_paths, ...en_paths],
		fallback: true
	}
}

export async function getStaticProps({ params, locale }) {
	const timelines = getTimelines(locale);
	const timeline = timelines.find(tl => tl.slug === params.slug);
	return {
		props: {
			...timeline,
			...await serverSideTranslations(locale, ['common'])
		}
	}
}

export default AboutMeSlug;