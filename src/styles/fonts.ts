import { Space_Grotesk as FontDisplay, Open_Sans as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontDisplay = FontDisplay({
  subsets: ['latin'],
  variable: '--font-display',
})
