import type { FC } from 'react'
import Link from 'next/link'
import { TerminalWindow } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'

export const Logo: FC = () => (
  <Link href={ROUTES.home}>
    <div className="my-2 flex items-center space-x-1 text-indigo-600 dark:text-indigo-400">
      <TerminalWindow className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
      <span className="whitespace-nowrap text-xl font-medium tracking-tight sm:text-2xl">
        Marek Honzal
      </span>
    </div>
  </Link>
)
