import Head from 'next/head'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-300 text-black transition-shadow drop-shadow-2xl shadow-2xl container mx-auto rounded-2xl py-8 w-1/2 md:w-5/6 sm:w-11/12">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <hr className="lg:py-8 md:py-2" />
      <Welcome />

      <br />
      <h1 className="my-4 text-2xl font-bold">What is Lorem Ipsum?</h1>
      <br />
      <p className="container sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-6xl text-justify text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>


      <hr className="text-black lg:py-8 md:py-2" />
    </section>
  )
}

const Welcome = function () {
  return (
    <>
      <h1 className="sm:text-2xl md:text-4xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          D.TECH World
        </a>
      </h1>
      <p className="mt-3 sm:text-md md:text-xl">
        Get started by editing{' '}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          pages/index.js
        </code>
      </p>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:max-w-xs">
        <a
          href="https://nextjs.org/docs"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-xl font-bold">Documentation &rarr;</h3>
          <p className="mt-4 text-md">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-xl font-bold">Learn &rarr;</h3>
          <p className="mt-4 text-md">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-xl font-bold">Examples &rarr;</h3>
          <p className="mt-4 text-md">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-xl font-bold">Deploy &rarr;</h3>
          <p className="mt-4 text-md">
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </>
  )
}
