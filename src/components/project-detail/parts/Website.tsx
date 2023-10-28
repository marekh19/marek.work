import type { FC } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  // TODO: fix this ugly type
  link:
    | {
        __typename?: 'Link' | undefined
        url: string
      }
    | null
    | undefined
  className?: string
}

export const Website: FC<Props> = ({ link, className }) => {
  if (!link?.url) return null

  return (
    <div className={cn('flex items-center', className)}>
      <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
        Website
      </h3>
      <a
        className="ml-3 text-indigo-600 dark:text-indigo-400"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.url}
      </a>
    </div>
  )
}
