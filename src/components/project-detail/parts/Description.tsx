import { type FC } from 'react'

import { type Maybe } from '@/types/__generated__/graphql'

import { Markdown } from '@ui/Markdown'

type Props = {
  description?: Maybe<string>
  className?: string
}

export const Description: FC<Props> = ({ description, className }) => {
  return <Markdown content={description} className={className} />
}
