import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type Props = {
  name: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export const Section: FC<Props> = ({
  name,
  children,
  className,
  fullWidth,
}) => (
  <section
    className={cn(
      'mx-auto mt-12 w-full sm:mt-16',
      !fullWidth && 'max-w-[42.5rem]',
      className
    )}
  >
    <h3 className="mb-4 inline-block border-b-4 border-accent font-display text-2xl">
      {name}
    </h3>
    {children}
  </section>
)
