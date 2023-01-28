import Link from 'next/link'
import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { ToggleTheme } from './parts/ThemeToggle'

export const Header: FC = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md">
    <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
      <Logo />
      <Link href="/projects">
        <span className="">Projects</span>
      </Link>
      <ToggleTheme />
    </div>
  </header>
)
