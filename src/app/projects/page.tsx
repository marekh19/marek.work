import Head from 'next/head'

import { apolloClient } from '@/services/apollo/apollo-client'
import GetProjectItemsOverview from '@/services/apollo/queries/GetProjectItemsOverview.gql'

import { type GetProjectItemsOverviewQuery } from '@/types/graphql'

import { InnerLayout } from '@ui/Layouts/InnerLayout'
import { Section } from '@ui/Section'

import { ProjectCard } from '@/components/projects/ProjectCard'

export default async function Projects() {
  const { data } = await apolloClient.query<GetProjectItemsOverviewQuery>({
    query: GetProjectItemsOverview,
  })

  return (
    <>
      <Head>
        <title>Portfolio - Marek Honzal</title>
      </Head>
      <InnerLayout>
        <Section heading="Projects" classNames="relative">
          <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
    </>
  )
}

export const revalidate = 300
