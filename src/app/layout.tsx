import { type ReactNode } from 'react'

import { type Metadata } from 'next'

import { fontDisplay, fontSans } from '@/styles/fonts'
import '@/styles/globals.css'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { KeyboardModel } from '@/components/ui/KeyboardModel'

import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          'bg-background mx-auto flex min-h-screen max-w-5xl flex-col font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <Providers>
          <Header />
          <KeyboardModel />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
