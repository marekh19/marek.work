import 'server-only'

import { createClient, type QueryParams } from 'next-sanity'

import { env } from '@/env.mjs'

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = env.NEXT_PUBLIC_SANITY_API_VERSION

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: { tags },
  })
}
