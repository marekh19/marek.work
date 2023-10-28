import { type FC } from 'react'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { type Maybe } from '@/types/__generated__/graphql'

type Props = {
  name?: Maybe<string>
  year?: Maybe<string>
  className?: string
}

export const Header: FC<Props> = ({ name, year, className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Link
        href={ROUTES.projects}
        className="text-indigo-600 dark:text-indigo-400"
      >
        Projects
      </Link>
      <CaretRight className="mx-1 h-4" />
      <h1 className="mr-2 text-xl font-medium sm:text-2xl">{name}</h1>
      <h2 className="rounded-md bg-gray-300 p-1 text-xs font-bold dark:bg-gray-700">
        {year}
      </h2>
    </div>
  )
}
