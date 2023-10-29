import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ButtonProps = {
  children: ReactNode
  className?: string
  accent?: 'primary' | 'secondary' | 'accent'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  accent = 'primary',
}) => {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center justify-center rounded-lg px-6 py-2 text-lg font-semibold transition-colors duration-300 ease-in-out',
        { 'bg-primary hover:bg-primary/80': accent === 'primary' },
        { 'bg-secondary hover:bg-secondary/70': accent === 'secondary' },
        { 'bg-accent hover:bg-accent/80': accent === 'accent' },
        className
      )}
    >
      {children}
    </button>
  )
}
