import { ApolloClient, InMemoryCache } from '@apollo/client'

import { env } from '@/env.mjs'

const url = env.STORYBLOK_GQL_URL
const token = env.STORYBLOK_GQL_TOKEN

export const apolloClient = new ApolloClient({
  uri: url ?? '',
  headers: {
    Token: token ?? '',
  },
  cache: new InMemoryCache(),
})
