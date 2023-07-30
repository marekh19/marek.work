import type { FC } from 'react'

import Head from 'next/head'

import { InnerLayout } from '@ui/Layouts/InnerLayout'
import { Section } from '@ui/Section'

import { CardsContainer } from '../CardsContainer'
import { projectsDetails } from '../lib/projects'
import { ProjectCard } from '../ProjectCard'

export const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Marek Honzal</title>
      </Head>
      <InnerLayout>
        <Section heading="Projects" classNames="relative">
          <CardsContainer>
            {projectsDetails.map(({ name, description, imagePath, projectLink }) => (
              <ProjectCard
                name={name}
                description={description}
                imagePath={imagePath}
                projectLink={projectLink}
                key={`${name}_${Math.random()}`}
              />
            ))}
          </CardsContainer>
        </Section>
      </InnerLayout>
    </>
  )
}
