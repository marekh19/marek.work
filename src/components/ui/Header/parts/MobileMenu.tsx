'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'
import { Cube, Note } from '@phosphor-icons/react/dist/ssr'
import { AnimatePresence, motion } from 'framer-motion'
import { useLockedBody } from 'usehooks-ts'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

import { ThemeToggle } from './ThemeToggle'

type Props = {
  className?: string
}

export const MobileMenu: FC<Props> = ({ className }) => {
  const path = usePathname()
  const isOpen = useMobileMenuStore(state => state.isOpen)
  const closeMenu = useMobileMenuStore(state => state.close)

  useLockedBody(isOpen, 'root')

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            'fixed left-0 top-16 h-[calc(100vh-64px)] w-full bg-background p-6',
            className
          )}
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <nav className="flex flex-col gap-y-6">
                <Link
                  href={ROUTES.projects}
                  onClick={closeMenu}
                  className={cn('flex items-center gap-x-2 text-3xl', {
                    'text-primary/70': !path.includes(ROUTES.projects),
                    'text-text': path === ROUTES.home,
                  })}
                >
                  <Cube className="size-6" />
                  <span>Projects</span>
                </Link>
                <Link
                  href={ROUTES.posts}
                  onClick={closeMenu}
                  className={cn('flex items-center gap-x-2 text-3xl', {
                    'text-primary/70': !path.includes(ROUTES.posts),
                    'text-text': path === ROUTES.home,
                  })}
                >
                  <Note className="size-6" />
                  <span>Posts</span>
                </Link>
              </nav>
            </div>
            <ThemeToggle isMobile />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
