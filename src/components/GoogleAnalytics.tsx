import type { FC } from 'react'
import Script from 'next/script'

export const GoogleAnalytics: FC = () => {
  const gAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
      id=${gAnalyticsId}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gAnalyticsId}');
        `,
        }}
      ></Script>
    </>
  )
}
