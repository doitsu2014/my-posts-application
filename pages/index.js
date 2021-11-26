import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';
import TimeLines from '../components/timelines'
import { getTimelines } from '../services/dataService'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home({ timelines }) {
  const router = useRouter();
  const tCommon = useTranslation('common').t;
  const tIndex = useTranslation('index').t;

  return (
    <>
      <Head>
        <title>{tCommon['aboutMe']} | D.TECH</title>
      </Head>
      <figure className="md:flex bg-gray-300 overflow-hidden text-black drop-shadow-xl shadow-xl container mx-auto rounded-2xl p-8 md:p-0 md:max-w-4xl sm:w-11/12">
        <img className="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none object-cover" src="/avatar/ducth_black_and_white.jpg" alt="" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold text-justify">
              “{tIndex('mainContent')}”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-green-600">
              Duc TH
            </div>
            <div className="text-gray-500">
              Senior Software Engineer
            </div>
          </figcaption>
        </div>
      </figure>
      <TimeLines timelines={timelines} />
    </>
  )
}


export async function getStaticProps({ locale }) {
  const res = getTimelines(locale);
  return {
    props: {
      timelines: res,
      ...await serverSideTranslations(locale, ['common', 'index', 'timelines'])
    }
  }
}

export default Home;