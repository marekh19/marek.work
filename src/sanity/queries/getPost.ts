import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanity.client'

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  _createdAt,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
  content,
}`

const getPostSchema = z.object({
  _id: z.string(),
  title: z.string(),
  _createdAt: z.string(),
  thumbnail: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  content: z.string().nullable(),
})

export const getPost = async (slug: string) => {
  const post = await sanityFetch({
    query,
    params: { slug },
  })
  return getPostSchema.parse(post)
}
