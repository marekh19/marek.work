import Link from 'next/link'
import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { ToggleTheme } from './parts/ThemeToggle'

export const Header: FC = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md">
    <div className="flex items-center justify-between px-4 py-4 sm:px-6">
      <Logo />
      <nav className="text-lg font-medium">
        <Link href="/projects">
          <button
            type="button"
            className="transition duration-300 ease-in-out hover:scale-105"
          >
            Projects
          </button>
        </Link>
      </nav>
      <ToggleTheme />
    </div>
  </header>
)
