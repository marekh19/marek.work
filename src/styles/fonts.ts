import { Space_Grotesk as FontDisplay } from 'next/font/google'

export { GeistSans as fontSans } from 'geist/font/sans'

export const fontDisplay = FontDisplay({
  subsets: ['latin'],
  variable: '--font-display',
})
