'use client'

import type { FC } from 'react'
import Script from 'next/script'

import { env } from '@/env.mjs'

export const GoogleTagManager: FC = () => {
  const gtmId = env.NEXT_PUBLIC_GOOGLE_GTM

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
        `}
    </Script>
  )
}