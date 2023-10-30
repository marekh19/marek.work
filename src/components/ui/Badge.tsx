import { type FC } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  text: string
  className?: string
}

export const Badge: FC<Props> = ({ text, className }) => (
  <p
    className={cn(
      'inline-block rounded-lg bg-accent/50 px-1.5 py-1 text-sm font-bold',
      className
    )}
  >
    {text}
  </p>
)
