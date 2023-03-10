import Head from 'next/head'
import type { AppProps } from 'next/app'

// Components
import Header from '@/components/Header'

// Css
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dr Dario Ledesma</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
