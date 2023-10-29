import { type ReactNode } from 'react'
import { type Metadata } from 'next'

import '@/styles/globals.css'

import { fontDisplay, fontSans } from '@/styles/fonts'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { Footer } from '@ui/Footer'
import { Keyboard } from '@ui/KeyboardModel'
import { Providers } from '@/components/Providers'
import { Header } from '@/components/ui/Header/Header'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'flex min-h-screen flex-col items-center font-sans antialiased',
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <Providers>
          <Header />
          <Keyboard />
          <main className="w-full grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
