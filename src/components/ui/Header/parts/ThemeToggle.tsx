'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

export const ThemeToggle: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDarkTheme: boolean = currentTheme === 'dark'

  if (!isMounted) {
    return (
      <div>
        <Sun className="h-6 w-6 text-gray-500" />
      </div>
    )
  }
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={isDarkTheme ? 'dark' : 'light'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="ml-2"
      >
        {isDarkTheme ? (
          <Sun
            className="h-6 w-6 text-text transition duration-300 ease-in-out hover:text-yellow-500"
            role="button"
            onClick={() => setTheme('light')}
            aria-label="Switch to light theme"
          />
        ) : (
          <Moon
            className="h-6 w-6 text-text transition duration-300 ease-in-out hover:text-yellow-500"
            role="button"
            onClick={() => setTheme('dark')}
            aria-label="Switch to dark theme"
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
