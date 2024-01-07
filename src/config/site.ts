import { env } from '@/env.mjs'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Marek Honzal',
  description:
    "Hi, my name is Marek Honzal! I'm a web developer and this is my personal portfolio. You can learn more about me here and check projects I've been working on.",
  keywords:
    'Marek Honzal, portfolio, react, next.js, typescript, web developer, software engineer',
  baseUrl: env.NEXT_PUBLIC_SITE_URL,
}
