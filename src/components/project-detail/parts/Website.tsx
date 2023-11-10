import type { FC } from 'react'

import { cn } from '@/lib/utils'

import { Badge } from '@ui/Badge'

type Props = {
  link: {
    url: string
    title: string
    [key: string]: string
  } | null
  className?: string
}

export const Website: FC<Props> = ({ link, className }) => {
  if (!link?.url) return null

  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <Badge text="Website" />

      <a
        className="text-primary transition-colors duration-300 ease-in-out hover:text-primary/80"
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.title}
      </a>
    </div>
  )
}
