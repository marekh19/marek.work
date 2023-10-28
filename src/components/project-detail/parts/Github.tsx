import type { FC } from 'react'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

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

const getGithubRepoPath = (url: string) => {
  return url.replace('https://github.com/', '')
}

export const Github: FC<Props> = ({ link, className }) => {
  if (!link?.url) return null

  return (
    <div className={cn('flex items-center', className)}>
      <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
        Github
      </h3>
      <a
        className="ml-3 flex items-center text-indigo-600 dark:text-indigo-400"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo className="h-5 w-5" />
        <span className="ml-1 lowercase">{getGithubRepoPath(link.url)}</span>
      </a>
    </div>
  )
}
