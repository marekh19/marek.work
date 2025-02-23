import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'

import '@/styles/globals.css'

import { fontDisplay, fontSans } from '@/styles/fonts'
import { env } from '@/env.mjs'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Footer } from '@ui/Footer'
import { Header } from '@ui/Header/Header'
import { Providers } from '@/components/Providers'
import { KeyboardContainer } from '@/components/ui/Keyboard/KeyboardContainer'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: '/',
  },
}

type Props = {
  children: ReactNode
}

export default function WebLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#e9ebec" />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col items-center font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_GTM} />
        <Providers>
          <Header />
          <KeyboardContainer />
          <main className="w-full grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
