import '~/styles/globals.css'
import { Inter } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Layout } from '@ui/Layouts/MainLayout'
import { HeadDefault } from '~/features/core/HeadDefault'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <HeadDefault />
      <ThemeProvider enableSystem attribute="class">
        <div className={`${bodyFont.variable} font-sans`}>
          <Layout router={router}>
            <AnimatePresence
              mode="wait"
              initial
              onExitComplete={() => {
                window.scrollTo({ top: 0 })
              }}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </div>
      </ThemeProvider>
    </>
  )
}
