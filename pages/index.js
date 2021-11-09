import Head from 'next/head'

export default function Home() {
  return (
    <figure className="md:flex bg-gray-300 overflow-hidden text-black drop-shadow-2xl shadow-2xl container mx-auto rounded-2xl p-8 md:p-0 md:max-w-4xl sm:w-11/12">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <hr className="lg:py-8 md:py-2" /> */}
      <img className="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none object-cover" src="/avatar/ducth_black_and_white.jpg" alt=""  />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold text-justify">
            “Hello guys, my name is Duc, and I'm a Software Engineer with more than 4 years of experience in .Net Core,
            and I also get good experiences on React, I can confidently do develop as a Front End Developer.
            For now, I'm working on the company with a strong business model in Finance Industry.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-blue-600">
            Duc TH 
          </div>
          <div className="text-gray-500">
            Senior Software Engineer, Duc
          </div>
        </figcaption>
      </div>
    </figure>
  )
}