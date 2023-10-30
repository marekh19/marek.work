import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { Maybe } from '@/types/__generated__/graphql'

import { Badge } from '@ui/Badge'

type Props = {
  // TODO: fix this ugly type later
  stack:
    | ({
        __typename?: 'Story'
        name?: Maybe<string>
        content?: any
      } | null)[]
    | null
    | undefined
  className?: string
}

export const Stack: FC<Props> = ({ stack, className }) => {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <Badge text="Stack" />
      <div>
        {stack?.map((tech, index) => (
          <span key={tech?.name}>
            <a
              className="text-primary transition-colors duration-300 ease-in-out hover:text-primary/80"
              href={tech?.content?.url?.url}
              target="_blank"
              rel="noreferrer"
            >
              {tech?.name}
            </a>
            {index !== stack.length - 1 && <span>, </span>}
          </span>
        ))}
      </div>
    </div>
  )
}
