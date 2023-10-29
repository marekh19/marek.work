import { type FC } from 'react'
import Markdown from 'react-markdown'

import { cn } from '@/lib/utils'
import { type Maybe } from '@/types/__generated__/graphql'

type Props = {
  description?: Maybe<string>
  className?: string
}

export const Description: FC<Props> = ({ description, className }) => {
  return (
    <div className={cn('w-full', className)}>
      <Markdown className="prose min-w-full text-text dark:prose-invert">
        {description}
      </Markdown>
    </div>
  )
}
