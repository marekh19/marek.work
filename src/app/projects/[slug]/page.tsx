import { notFound } from 'next/navigation'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItem from '@/services/apollo/queries/GetProjectItem.gql'

import { type GetProjectItemQuery } from '@/types/__generated__/graphql'
import { Badge } from '@/components/ui/Badge'
import ProjectDetail from '@/components/project-detail/ProjectDetail'

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const { data } = await apolloClient.query<GetProjectItemQuery>({
    query: GetProjectItem,
    variables: { projectItemId: `projects/${slug}` },
  })

  if (!data.ProjectItem) notFound()

  const {
    ProjectItem: { content: project },
  } = data

  console.log({ project: project?.github_link })

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

export const revalidate = 300
