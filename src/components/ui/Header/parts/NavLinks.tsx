'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

export const NavLinks: FC = () => {
  const path = usePathname()

  return (
    <nav className="space-x-4 text-lg font-medium transition-colors duration-300 ease-in-out sm:space-x-6">
      <Link
        href={ROUTES.projects}
        className={cn('hover:text-text', {
          'text-primary/70': !path.includes(ROUTES.projects),
          'text-text': path === ROUTES.home,
        })}
      >
        Projects
      </Link>
      <Link
        href={ROUTES.posts}
        className={cn('hover:text-primary', {
          'text-primary/70': !path.includes(ROUTES.posts),
          'text-text': path === ROUTES.home,
        })}
      >
        Posts
      </Link>
    </nav>
  )
}
