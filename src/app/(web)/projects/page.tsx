import { type Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { getAllProjects } from '@/sanity/queries/getAllProjects'

import { InnerLayout } from '@ui/InnerLayout'
import { Section } from '@ui/Section'
import { ArticleCard } from '@/components/ui/ArticleCard'

export const metadata: Metadata = {
  title: 'Portfolio',
  alternates: {
    canonical: `${siteConfig.baseUrl}/projects`,
  },
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  const hasAnyProjects = projects && projects?.length > 0

  return (
    <InnerLayout>
      <Section name="Projects" fullWidth>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {hasAnyProjects &&
            projects?.map(project => (
              <ArticleCard key={project?._id} data={project} />
            ))}
          {!hasAnyProjects && <p className="font-medium">No projects yet.</p>}
        </div>
      </Section>
    </InnerLayout>
  )
}
