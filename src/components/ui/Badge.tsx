import { type FC } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  text: string
  className?: string
}

export const Badge: FC<Props> = ({ text, className }) => (
  <p
    className={cn(
      'inline-block rounded-md bg-gray-300 p-1 font-semibold uppercase dark:bg-gray-700',
      className
    )}
  >
    {text}
  </p>
)
