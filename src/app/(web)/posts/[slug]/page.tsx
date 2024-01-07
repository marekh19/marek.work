import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { getAllPosts } from '@/sanity/queries/getAllPosts'
import { getPost } from '@/sanity/queries/getPost'

import { InnerLayout } from '@ui/InnerLayout'
import PostDetail from '@/components/post-detail/PostDetail'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const post = await getPost(slug)

  return {
    title: post?.title,
    alternates: {
      canonical: `${siteConfig.baseUrl}/posts/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  if (!posts) return []

  return posts?.map(post => ({
    slug: post.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <InnerLayout>
      <PostDetail className="mx-auto mt-6 max-w-[42.5rem] space-y-6">
        <PostDetail.Header
          title={post.title}
          publishedAt={post._createdAt}
          thumbnail={post.thumbnail}
        />
        <PostDetail.Content content={post.content} />
      </PostDetail>
    </InnerLayout>
  )
}
