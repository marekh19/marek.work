'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export const NavLinks: FC<Props> = ({ className }) => {
  const path = usePathname()

  return (
    <nav
      className={cn('space-x-4 text-lg font-medium sm:space-x-6', className)}
    >
      <Link
        href={ROUTES.projects}
        className={cn(
          'transition-colors duration-300 ease-in-out hover:text-primary',
          {
            'text-primary/70': !path.includes(ROUTES.projects),
            'text-text': path === ROUTES.home,
          }
        )}
      >
        Projects
      </Link>
      <Link
        href={ROUTES.posts}
        className={cn(
          'transition-colors duration-300 ease-in-out hover:text-primary',
          {
            'text-primary/70': !path.includes(ROUTES.posts),
            'text-text': path === ROUTES.home,
          }
        )}
      >
        Posts
      </Link>
    </nav>
  )
}
