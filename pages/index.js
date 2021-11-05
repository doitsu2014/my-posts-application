import Head from 'next/head'

export default function Home() {
  return (
    // <main className="flex flex-col items-center justify-center w-full py-12 bg-bg-dot-01 bg-no-repeat bg-opacity-0">
    // bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100
    <section className="flex flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <hr className="text-black py-2" />

      <Welcome />
      <hr className="text-black py-2" />
{/* 
      <Welcome />
      <hr className="text-black py-8" />

      <Welcome />
      <hr className="text-black py-8" /> */}
    </section>
  )
}

const Welcome = function () {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          D.TECH World
        </a>
      </h1>
      <p className="mt-3 text-xl">
        Get started by editing{' '}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          pages/index.js
        </code>
      </p>

      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
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
