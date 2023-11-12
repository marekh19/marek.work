import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanity.client'

const query = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  year,
  work_in_progress,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
  content,
  stack[]->{
    name,
    "url":link.url
  },
  github_url,
  website_url,
  images[] {
    'url': asset->url,
    alt,
    _key
  }
}`

const getProjectSchema = z
  .object({
    _id: z.string(),
    title: z.string(),
    year: z.string(),
    work_in_progress: z.boolean(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    content: z.string().nullable(),
    stack: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      })
    ),
    github_url: z
      .object({
        title: z.string(),
        url: z.string(),
        _type: z.string(),
      })
      .nullable(),
    website_url: z
      .object({
        title: z.string(),
        url: z.string(),
        _type: z.string(),
      })
      .nullable(),
    images: z
      .array(
        z.object({
          _key: z.string(),
          url: z.string(),
          alt: z.string(),
        })
      )
      .nullable(),
  })
  .nullable()

export const getProject = async (slug: string) => {
  const project = await sanityFetch({
    query,
    params: { slug },
    tags: ['project'],
  })
  return getProjectSchema.parse(project)
}
