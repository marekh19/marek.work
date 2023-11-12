import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanity.client'

const query = groq`*[_type == 'post' ] | order(_createdAt desc) {
  _id,
  _type,
  "slug": slug.current,
  _createdAt,
  title,
  summary,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  }
}`

const postSchema = z.object({
  _id: z.string(),
  _type: z.literal('post'),
  slug: z.string(),
  _createdAt: z.string(),
  title: z.string(),
  summary: z.string(),
  thumbnail: z.object({
    url: z.string(),
    alt: z.string(),
  }),
})

const getAllPostsSchema = z.array(postSchema).nullable()

export type Post = z.infer<typeof postSchema>

export const getAllPosts = async () => {
  const posts = await sanityFetch({ query, tags: ['post'] })
  return getAllPostsSchema.parse(posts)
}
