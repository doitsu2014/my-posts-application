import Link from 'next/link'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Programming() {
	return (
		<>
			<Head>
				<title>Programming | D.TECH</title>
			</Head>
			<section className="container mx-auto">
				<h1 className="text-2xl text-center font-bold">
					Programming
				</h1>

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

export async function getStaticProps({ locale }) {
	return {
		props: {
			...await serverSideTranslations(locale, ['common'])
		}
	}
}

export default Programming