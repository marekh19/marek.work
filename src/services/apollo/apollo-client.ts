import { ApolloClient, InMemoryCache } from '@apollo/client'

const url = process.env.STORYBLOK_GQL_URL
const token = process.env.STORYBLOK_GQL_TOKEN

export const apolloClient = new ApolloClient({
  uri: url ?? '',
  headers: {
    Token: token ?? '',
  },
  cache: new InMemoryCache(),
})
