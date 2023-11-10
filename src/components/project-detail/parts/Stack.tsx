import { type FC } from 'react'

import { cn } from '@/lib/utils'

import { Badge } from '@ui/Badge'

type Props = {
  stack: {
    name: string
    url: string
  }[]
  className?: string
}

export const Stack: FC<Props> = ({ stack, className }) => {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      <Badge text="Stack" />
      <div>
        {stack?.map((technology, index) => (
          <span key={technology.name}>
            <a
              className="text-primary transition-colors duration-300 ease-in-out hover:text-primary/80"
              href={technology.url}
              target="_blank"
              rel="noreferrer"
            >
              {technology.name}
            </a>
            {index !== stack.length - 1 && <span>, </span>}
          </span>
        ))}
      </div>
    </div>
  )
}
