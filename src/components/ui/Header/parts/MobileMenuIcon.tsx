'use client'

import { type FC } from 'react'
import { useMobileMenuStore } from '@/stores/useMobileMenuStore'
import { List, X } from '@phosphor-icons/react/dist/ssr'

type Props = {
  className?: string
}

export const MobileMenuIcon: FC<Props> = ({ className }) => {
  const isOpen = useMobileMenuStore(state => state.isOpen)
  const toggleMenu = useMobileMenuStore(state => state.toggleOpen)

  return (
    <div className={className}>
      {!isOpen && (
        <button aria-label="Open menu" title="Open menu" onClick={toggleMenu}>
          <List className="size-7" />
        </button>
      )}
      {isOpen && (
        <button aria-label="Close menu" title="Close menu" onClick={toggleMenu}>
          <X className="size-7" />
        </button>
      )}
    </div>
  )
}
