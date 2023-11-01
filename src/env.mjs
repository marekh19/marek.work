// src/env.mjs
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    STORYBLOK_GQL_URL: z.string().url(),
    STORYBLOK_GQL_TOKEN: z.string().min(1),
    STORYBLOK_WEBHOOK_SECRET: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_GOOGLE_GTM: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    STORYBLOK_GQL_URL: process.env.STORYBLOK_GQL_URL,
    STORYBLOK_GQL_TOKEN: process.env.STORYBLOK_GQL_TOKEN,
    STORYBLOK_WEBHOOK_SECRET: process.env.STORYBLOK_WEBHOOK_SECRET,
    NEXT_PUBLIC_GOOGLE_GTM: process.env.NEXT_PUBLIC_GOOGLE_GTM,
  },
})
