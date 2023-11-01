import type { FC } from 'react'
import Link from 'next/link'
import { CodeBlock } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'

export const Logo: FC = () => (
  <Link href={ROUTES.home}>
    <div className="flex items-center gap-x-1 text-text">
      <CodeBlock className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
      <span className="whitespace-nowrap font-display text-xl font-medium tracking-tight sm:text-2xl">
        Marek Honzal
      </span>
    </div>
  </Link>
)
