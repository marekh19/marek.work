import type { FC } from 'react'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { cn } from '@/lib/utils'

import { Badge } from '@ui/Badge'

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
    <div className={cn('flex items-center space-x-4', className)}>
      <Badge text="Github" />
      <a
        className="flex items-center text-primary transition-colors duration-300 ease-in-out hover:text-primary/80"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo className="h-5 w-5" />
        <span className="ml-1">{getGithubRepoPath(link.url)}</span>
      </a>
    </div>
  )
}
