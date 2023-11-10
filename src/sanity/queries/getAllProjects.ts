import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanityClient'

const query = groq`*[_type == "project"] {
  _id,
  name,
  "slug": slug.current,
  summary,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
}`

const getAllProjectsSchema = z
  .array(
    z.object({
      _id: z.string(),
      name: z.string(),
      slug: z.string(),
      summary: z.string(),
      thumbnail: z.object({
        url: z.string(),
        alt: z.string(),
      }),
    })
  )
  .nullable()

export const getAllProjects = async () => {
  const projects = await sanityFetch({ query, tags: ['projects'] })
  return getAllProjectsSchema.parse(projects)
}
