import { type Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { getAllPosts } from '@/sanity/queries/getAllPosts'

import { InnerLayout } from '@ui/InnerLayout'
import { Section } from '@ui/Section'
import { ArticleCard } from '@/components/ui/ArticleCard'

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: `${siteConfig.baseUrl}/posts`,
  },
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  const hasAnyPosts = posts && posts?.length > 0

  return (
    <InnerLayout>
      <Section name="Posts" fullWidth>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {hasAnyPosts &&
            posts?.map(post => <ArticleCard key={post._id} data={post} />)}
          {!hasAnyPosts && (
            <p className="font-medium">No published posts yet.</p>
          )}
        </div>
      </Section>
    </InnerLayout>
  )
}
