import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Content, Github, Header, ImageGallery, Stack, Website } from './parts'

type Props = {
  children: ReactNode
  className?: string
}

const ProjectDetail = ({ children, className }: Props) => (
  <div className={cn('backdrop-blur-md', className)}>{children}</div>
)

ProjectDetail.Header = Header
ProjectDetail.Content = Content
ProjectDetail.Stack = Stack
ProjectDetail.Website = Website
ProjectDetail.Github = Github
ProjectDetail.ImageGallery = ImageGallery

export default ProjectDetail
