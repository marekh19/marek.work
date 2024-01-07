import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { getAllProjects } from '@/sanity/queries/getAllProjects'
import { getProject } from '@/sanity/queries/getProject'

import { Badge } from '@ui/Badge'
import { InnerLayout } from '@ui/InnerLayout'
import ProjectDetail from '@/components/project-detail/ProjectDetail'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const project = await getProject(slug)

  return {
    title: project?.title,
    alternates: {
      canonical: `${siteConfig.baseUrl}/projects/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  if (!projects) return []

  return projects?.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const project = await getProject(slug)
  if (!project) notFound()

  return (
    <InnerLayout>
      <ProjectDetail className="mx-auto mt-6 max-w-[42.5rem] space-y-6">
        <ProjectDetail.Header title={project.title} year={project.year} />
        {project?.work_in_progress && (
          <Badge text="Work in progress" className="text-base" />
        )}
        <ProjectDetail.Content content={project.content} />
        <ProjectDetail.Stack stack={project.stack} />
        <ProjectDetail.Website link={project.website_url} />
        <ProjectDetail.Github link={project.github_url} />
        <ProjectDetail.ImageGallery
          images={project.images}
          className="!mt-10"
        />
      </ProjectDetail>
    </InnerLayout>
  )
}
