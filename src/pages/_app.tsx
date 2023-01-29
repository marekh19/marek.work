import '~/styles/globals.css'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { HeadDefault } from '~/features/core/HeadDefault'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadDefault />
      <ThemeProvider enableSystem attribute="class">
        <div className={`${bodyFont.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
