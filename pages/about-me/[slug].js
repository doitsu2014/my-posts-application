import Link from 'next/link'
import Head from 'next/head'
import DataService from '../../services/dataService'
import { SUPPORT_LOCALES } from '../../common/constants';

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
	const service = new DataService();
	const vi_timelines = service.getTimelines(SUPPORT_LOCALES.vi);
	const vi_paths = vi_timelines.map(tl => ({
		params: { slug: tl.slug, },
		locale: SUPPORT_LOCALES.vi
	}));

	const en_timelines = service.getTimelines(SUPPORT_LOCALES.en);
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
	const service = new DataService();
	const timelines = service.getTimelines(locale);
	const timeline = timelines.find(tl => tl.slug === params.slug);
	return {
		props: {
			...timeline
		}
	}
}

export default AboutMeSlug;