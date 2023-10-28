import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { Maybe } from '@/types/__generated__/graphql'

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
    <div className={cn('flex items-center', className)}>
      <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
        Stack
      </h3>
      <div className="ml-3">
        {stack?.map((tech, index) => (
          <span key={tech?.name}>
            <a
              className="text-indigo-600 dark:text-indigo-400"
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
