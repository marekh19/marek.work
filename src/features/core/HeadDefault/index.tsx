import Head from 'next/head'
import type { FC } from 'react'

const baseUrl =
  process.env.NEXT_PUBLIC_DEPLOYMENT_URL ?? 'http://localhost:3000'

const pageDescription =
  "Hi, my name is Marek Honzal! I'm a web developer and this is my personal portfolio. You can learn more about me here and check projects I've been working on."

export const HeadDefault: FC = () => (
  <Head>
    {/* Basic setup */}
    <meta charSet="UTF-8" />
    <title>Homepage - Marek Honzal</title>
    <meta name="description" content={pageDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Favicon section */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    {/* Facebook OG Image */}
    <meta property="og:url" content={baseUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Marek Honzal - Homepage" />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
    {/* Twitter OG Image */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="marek.work" />
    <meta property="twitter:url" content={baseUrl} />
    <meta name="twitter:title" content="Marek Honzal - Homepage" />
    <meta name="twitter:description" content={baseUrl} />
    <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
  </Head>
)
