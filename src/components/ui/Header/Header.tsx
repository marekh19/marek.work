import type { FC } from 'react'

import { Logo, NavLinks, ThemeToggle } from './parts'

export const Header: FC = () => (
  <header className="sticky top-0 z-50 h-16 w-full backdrop-blur-md">
    <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-6 sm:px-8">
      <div className="flex items-center gap-x-6 sm:gap-x-10">
        <Logo />
        <NavLinks />
      </div>
      <ThemeToggle />
    </div>
  </header>
)
