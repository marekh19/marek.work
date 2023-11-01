import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import type {
  GetProjectItemQuery,
  GetProjectItemsQuery,
} from '@/types/__generated__/graphql'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItem from '@/services/apollo/queries/GetProjectItem.gql'
import GetProjectItems from '@/services/apollo/queries/GetProjectItems.gql'

import { Badge } from '@ui/Badge'
import { InnerLayout } from '@ui/InnerLayout'
import ProjectDetail from '@/components/project-detail/ProjectDetail'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export async function generateStaticParams() {
  const { data } = await apolloClient.query<GetProjectItemsQuery>({
    query: GetProjectItems,
    fetchPolicy: 'no-cache',
  })
  if (data.ProjectItems?.items) {
    return data.ProjectItems.items.map(project => ({
      slug: project?.slug,
    }))
  }
  return []
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const { data } = await apolloClient.query<GetProjectItemQuery>({
    query: GetProjectItem,
    variables: { projectItemId: `projects/${slug}` },
    fetchPolicy: 'no-cache',
  })

  if (!data.ProjectItem) notFound()

  const {
    ProjectItem: { content: project },
  } = data

  return (
    <InnerLayout>
      <ProjectDetail className="mx-auto mt-6 max-w-[42.5rem] space-y-6">
        <ProjectDetail.Header name={project?.name} year={project?.year} />
        {project?.work_in_progress && (
          <Badge text="Work in progress" className="text-base" />
        )}
        <ProjectDetail.Description description={project?.description} />
        <ProjectDetail.Stack stack={project?.stack} />
        <ProjectDetail.Website link={project?.webiste_link} />
        <ProjectDetail.Github link={project?.github_link} />
        <ProjectDetail.ImageGallery
          images={project?.images}
          className="!mt-10"
        />
      </ProjectDetail>
    </InnerLayout>
  )
}
