import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanity.client'

const query = groq`*[_type == "homepage"][0] {
  "intro": {
    "quote": intro.welcome_quote,
    "full_name":intro.full_name,
    "job": intro.job_title,
    "profile_picture": {
      "url": intro.profile_picture.asset->url,
      "alt": intro.profile_picture.alt
    }
  },
  bio,
  sections
}`

const getHomepageSchema = z.object({
  intro: z.object({
    quote: z.string(),
    full_name: z.string(),
    job: z.string(),
    profile_picture: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
  bio: z.array(
    z.object({
      _type: z.string(),
      _key: z.string(),
      description: z.string(),
      label: z.string(),
      year: z.string(),
    })
  ),
  sections: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      name: z.string(),
      heading: z.string(),
      content: z.string(),
    })
  ),
})

export const getHomepage = async () => {
  const homepage = await sanityFetch({ query })
  return getHomepageSchema.parse(homepage)
}
