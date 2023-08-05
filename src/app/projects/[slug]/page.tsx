import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItem from '@/services/apollo/queries/GetProjectItem.gql'
import GetProjectItems from '@/services/apollo/queries/GetProjectItems.gql'

import { type GetProjectItemQuery, type GetProjectItemsQuery } from '@/types/graphql'

export async function generateStaticParams() {
  const { data } = await apolloClient.query<GetProjectItemsQuery>({
    query: GetProjectItems,
  })

  const projects = data.ProjectItems?.items?.map(project => ({
    slug: project?.slug ?? '',
  }))

  return projects ?? []
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { data } = await apolloClient.query<GetProjectItemQuery>({
    query: GetProjectItem,
    variables: { projectItemId: `projects/${slug}` },
  })

  return (
    <div>
      <h1 className="text-4xl">{slug}</h1>
      <code className="block overflow-x-scroll whitespace-pre">{JSON.stringify(data)}</code>
    </div>
  )
}

export const revalidate = 300
