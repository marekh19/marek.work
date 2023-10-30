import { type Metadata } from 'next'

import { type GetProjectItemsOverviewQuery } from '@/types/__generated__/graphql'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItemsOverview from '@/services/apollo/queries/GetProjectItemsOverview.gql'

import { InnerLayout } from '@ui/InnerLayout'
import { Section } from '@ui/Section'
import { ProjectCard } from '@/components/projects/ProjectCard'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default async function ProjectsPage() {
  const { data } = await apolloClient.query<GetProjectItemsOverviewQuery>({
    query: GetProjectItemsOverview,
    fetchPolicy: 'no-cache',
  })

  return (
    <InnerLayout>
      <Section name="Projects">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
          {data.ProjectItems?.items?.map(project => (
            <ProjectCard
              name={project?.content?.name}
              description={project?.content?.short_description}
              imagePath={project?.content?.banner?.filename}
              slug={project?.slug}
              key={project?.slug}
            />
          ))}
        </div>
      </Section>
    </InnerLayout>
  )
}
