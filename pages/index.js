import Head from 'next/head'
import Timeline from '../components/timeline'

export default function Home() {
  return (
    <>
      <Head>
        <title>About me | D.TECH</title>
      </Head>
      <figure className="md:flex bg-gray-300 overflow-hidden text-black drop-shadow-xl shadow-xl container mx-auto rounded-2xl p-8 md:p-0 md:max-w-4xl sm:w-11/12">
        <img className="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none object-cover" src="/avatar/ducth_black_and_white.jpg" alt="" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold text-justify">
              “Hello guys, my name is Duc, and I'm a Software Engineer with more than 4 years of experience in .Net Core,
              and I confidently get good experiences on React, Angular also.
              For now, I am working on the company with a strong business model in Fintech industry.”
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
      <Timeline />
    </>

  )
}