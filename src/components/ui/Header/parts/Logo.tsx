'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'
import { CodeBlock } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'

export const Logo: FC = () => {
  const closeMenu = useMobileMenuStore(state => state.close)

  return (
    <Link href={ROUTES.home} onClick={closeMenu}>
      <div className="flex items-center gap-x-1 text-text">
        <CodeBlock className="size-6 shrink-0 sm:size-8" />
        <span className="whitespace-nowrap font-display text-xl font-medium tracking-tight sm:text-2xl">
          Marek Honzal
        </span>
      </div>
    </Link>
  )
}
