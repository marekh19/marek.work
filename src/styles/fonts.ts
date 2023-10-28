import {
  Space_Grotesk as FontDisplay,
  Poppins as FontSans,
} from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  style: ['normal'],
  weight: ['400', '500', '600', '700'],
})

export const fontDisplay = FontDisplay({
  subsets: ['latin'],
  variable: '--font-display',
})
