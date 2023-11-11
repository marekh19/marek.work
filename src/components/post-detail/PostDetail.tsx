import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { Content } from '@ui/Content'

import { Header } from './Header'

type Props = {
  children: ReactNode
  className?: string
}

const PostDetail = ({ children, className }: Props) => (
  <div className={cn('backdrop-blur-md', className)}>{children}</div>
)

PostDetail.Header = Header
PostDetail.Content = Content

export default PostDetail
