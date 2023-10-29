import { type FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { cn } from '@/lib/utils'
import { type Maybe } from '@/types/__generated__/graphql'

type Props = {
  content?: Maybe<string>
  className?: string
}

export const Markdown: FC<Props> = ({ content, className }) => {
  if (!content) return null

  return (
    <div className={cn('w-full', className)}>
      <ReactMarkdown className="prose min-w-full text-text dark:prose-invert">
        {content}
      </ReactMarkdown>
    </div>
  )
}
