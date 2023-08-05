import { type ReactNode } from 'react'

import { type Metadata } from 'next'

import { ThemeProvider } from 'next-themes'

import { siteConfig } from '@/config/site'

import { cn } from '@/lib/utils'

import { fontDisplay, fontSans } from '@/styles/fonts'

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
        className={
          (cn('bg-background min-h-screen font-sans antialiased'),
          fontSans.variable,
          fontDisplay.variable)
        }
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
