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
    <div className={cn('', className)}>
      <Markdown>{description}</Markdown>
    </div>
  )
}
