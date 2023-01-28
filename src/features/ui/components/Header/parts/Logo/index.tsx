import { CommandLineIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import type { FC } from 'react'

export const Logo: FC = () => (
  <Link href="/">
    <div className="my-2 flex items-center space-x-1 text-indigo-500 dark:text-indigo-400">
      <CommandLineIcon className="h-8 w-8 flex-shrink-0" />
      <span className="font-bold text-xl sm:text-3xl font-sans tracking-tight whitespace-nowrap">
        Marek Honzal
      </span>
    </div>
  </Link>
)
