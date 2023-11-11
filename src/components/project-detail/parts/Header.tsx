import { type FC } from 'react'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  year: string
  className?: string
}

export const Header: FC<Props> = ({ title, year, className }) => {
  return (
    <div className={cn('flex items-center gap-x-2', className)}>
      <Link
        href={ROUTES.projects}
        className="text-primary duration-300 ease-in-out hover:text-text"
      >
        Projects
      </Link>
      <CaretRight className="h-4 w-4" />
      <div className="flex items-center gap-x-2">
        <h1 className="text-xl font-medium sm:text-2xl">{title}</h1>
        <time className="rounded-lg bg-accent/50 px-1.5 py-1 text-xs font-bold">
          {year}
        </time>
      </div>
    </div>
  )
}
