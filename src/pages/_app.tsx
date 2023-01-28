import '~/styles/globals.css'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

import { Layout } from '~/features/ui/components/Layout'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marek Honzal - Homepage</title>
      </Head>

      <ThemeProvider enableSystem attribute="class">
        <Layout className={`${bodyFont.variable} font-sans`}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
