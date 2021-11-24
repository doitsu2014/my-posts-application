import Head from 'next/head'
import { useRouter } from 'next/router'
import TimeLines from '../components/timelines'
import DataService from '../services/dataService'

function Home({ timelines }) {
  const router = useRouter();
  const { locale } = router;
  const dataService = new DataService();
  const navigationTitles = dataService.getApplicationTitles(locale)['navigation'];
	const mainContent = {
		'en': `“Hello guys, my name is Duc, and I'm a Software Engineer with more than 4 years of experience in .Net Core, and I confidently get good experiences on React, Angular also. For now, I am working on the company with a strong business model in Fintech industry.”`,
		'vi': `“Xin chào, tôi tên là Đức nhé, hiện tại tôi đang là một Lập Trình Viên với hơn bốn năm kinh nghiệm làm việc với .Net và .Net Core, và tôi cũng có khá nhiều kinh nghiệm trong việc phát triễn sản phẩm với React hay Angular. Tôi đang làm việc cho một công ty với một bề dày kinh nghiệm hơn 10 năm trong Lĩnh vực tài chính.”`
  };

  return (
    <>
      <Head>
        <title>{navigationTitles['aboutMe']} | D.TECH</title>
      </Head>
      <figure className="md:flex bg-gray-300 overflow-hidden text-black drop-shadow-xl shadow-xl container mx-auto rounded-2xl p-8 md:p-0 md:max-w-4xl sm:w-11/12">
        <img className="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none object-cover" src="/avatar/ducth_black_and_white.jpg" alt="" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold text-justify">
              {mainContent[locale]}
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
  const service = new DataService();
  const res = service.getTimelines(locale);
  return {
    props: {
      timelines: res
    }
  }
}

export default Home;