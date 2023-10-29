'use client'

import { type FC, type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
