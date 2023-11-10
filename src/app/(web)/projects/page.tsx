import { type Metadata } from 'next'

import { getAllProjects } from '@/sanity/queries/getAllProjects'

import { InnerLayout } from '@ui/InnerLayout'
import { Section } from '@ui/Section'
import { ProjectCard } from '@/components/projects/ProjectCard'

export const metadata: Metadata = {
  title: 'Portfolio',
}

// FIXME: this is not static for some reason
export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <InnerLayout>
      <Section name="Projects" fullWidth>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {projects?.map(project => (
            <ProjectCard
              key={project?._id}
              name={project?.name}
              slug={project?.slug}
              description={project?.summary}
              imagePath={project?.thumbnail.url}
            />
          ))}
        </div>
      </Section>
    </InnerLayout>
  )
}
