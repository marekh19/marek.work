import { groq } from 'next-sanity'
import { z } from 'zod'

import { sanityFetch } from '@/sanity/sanity.client'

const query = groq`*[_type == "project"] | order(order asc) {
  _id,
  _type,
  title,
  "slug": slug.current,
  summary,
  "thumbnail": {
    "url": thumbnail.asset->url,
    "alt": thumbnail.alt
  },
}`

const projectSchema = z.object({
  _id: z.string(),
  _type: z.literal('project'),
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  thumbnail: z.object({
    url: z.string(),
    alt: z.string(),
  }),
})

const getAllProjectsSchema = z.array(projectSchema).nullable()

export type Project = z.infer<typeof projectSchema>

export const getAllProjects = async () => {
  const projects = await sanityFetch({ query })
  return getAllProjectsSchema.parse(projects)
}
