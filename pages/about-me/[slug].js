import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router';
import DataService from '../../services/dataService'
import { times } from 'lodash';

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
	const timelines = service.getTimelines();
	return {
		paths: timelines.map(tl => ({
			params: { slug: tl.slug }
		})),
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const service = new DataService();
	const timelines = service.getTimelines();
	const timeline = timelines.find(tl => tl.slug === params.slug);
	return {
		props: {
			...timeline,
			fromDate: timeline.toDate.toISOString(),
			toDate: timeline.toDate.toISOString()
		}
	}
}

export default AboutMeSlug;