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

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
}: {
  query: string
  params?: QueryParams
}): Promise<QueryResponse> {
  return sanityClient.fetch<QueryResponse>(query, params)
}
