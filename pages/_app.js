import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '../components/layout'
import Loading from '../components/loading'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (_) => setTimeout(() => {
      setLoading(false)
    }, 500);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading
          ? <Loading />
          : 
          <Layout>
            <Component {...pageProps} />
          </Layout>
      }
    </>
  )
}

export default appWithTranslation(MyApp)
