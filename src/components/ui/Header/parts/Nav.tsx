'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

export const Nav: FC = () => {
  const path = usePathname()

  return (
    <nav className="space-x-4 text-lg font-medium transition-colors duration-300 ease-in-out sm:space-x-6">
      <Link
        href={ROUTES.projects}
        className={cn('hover:text-primary', {
          'text-accent': path.includes(ROUTES.projects),
        })}
      >
        Projects
      </Link>
      <Link
        href={ROUTES.posts}
        className={cn('hover:text-primary', {
          'text-accent': path.includes(ROUTES.posts),
        })}
      >
        Posts
      </Link>
    </nav>
  )
}
