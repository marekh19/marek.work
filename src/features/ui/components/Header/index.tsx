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
            className="rounded-md border-2 border-gray-900 px-2 font-semibold tracking-wide transition duration-300 ease-in-out hover:bg-gray-900 hover:text-gray-50 dark:border-gray-50 dark:hover:bg-gray-50 dark:hover:text-gray-900"
          >
            Portfolio
          </button>
        </Link>
      </nav>
      <ToggleTheme />
    </div>
  </header>
)
