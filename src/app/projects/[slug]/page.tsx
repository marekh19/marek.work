import { notFound } from 'next/navigation'

import type {
  GetProjectItemQuery,
  GetProjectItemsQuery,
} from '@/types/__generated__/graphql'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItem from '@/services/apollo/queries/GetProjectItem.gql'
import GetProjectItems from '@/services/apollo/queries/GetProjectItems.gql'

import { Badge } from '@ui/Badge'
import ProjectDetail from '@/components/project-detail/ProjectDetail'

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
    <ProjectDetail className="space-y-6">
      <ProjectDetail.Header name={project?.name} year={project?.year} />
      {project?.work_in_progress && <Badge text="work in progress" />}
      <ProjectDetail.Description description={project?.description} />
      <ProjectDetail.Stack stack={project?.stack} />
      <ProjectDetail.Website link={project?.webiste_link} />
      <ProjectDetail.Github link={project?.github_link} />
      <ProjectDetail.ImageGallery images={project?.images} />
    </ProjectDetail>
  )
}
