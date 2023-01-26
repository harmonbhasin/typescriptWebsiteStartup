import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ChakraProvider } from '@chakra-ui/react'
// import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/700.css'

// https://nikolovlazar.com/blog/custom-layouts-in-nextjs
// Custom layouts are not considered as pages, so the only way to fetch data is on the client side
// https://www.brockherion.dev/blog/posts/creating-per-page-layouts-with-nextjs-typescript-trcp-and-nextauth/

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({
  Component,
  //pageProps: { session, ...pageProps },
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const layout = getLayout(<Component {...pageProps} />)
  return (
    //  <SessionProvider session={session} refetchInterval={5 * 60}>
    <ChakraProvider>
      <Head>
        <title>Bolic</title>
        <meta name="Bolic Coaching" content="Your AI fitness buddy." />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {layout}
      <Analytics />
    </ChakraProvider>
    // </SessionProvider>
  )
}

export default App
