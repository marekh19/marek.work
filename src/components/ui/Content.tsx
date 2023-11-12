import { type FC } from 'react'

import { Markdown } from '@ui/Markdown'

type Props = {
  content: string | null
  className?: string
}

export const Content: FC<Props> = ({ content, className }) => {
  if (!content) return null
  return <Markdown content={content} className={className} />
}
