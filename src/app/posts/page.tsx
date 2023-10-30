import { type Metadata } from 'next'

import type { GetPostItemsQuery } from '@/types/__generated__/graphql'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetPostItems from '@/services/apollo/queries/GetPostItems.gql'

import { InnerLayout } from '@ui/InnerLayout'
import { Section } from '@ui/Section'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function PostsPage() {
  const { data } = await apolloClient.query<GetPostItemsQuery>({
    query: GetPostItems,
    fetchPolicy: 'no-cache',
  })

  if (!data) return null

  const hasAnyPosts = data.PostItems?.items && data.PostItems.items.length > 0

  return (
    <InnerLayout>
      <Section name="Posts">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {!hasAnyPosts && (
            <p className="font-medium">No published posts yet.</p>
          )}
        </div>
      </Section>
    </InnerLayout>
  )
}
