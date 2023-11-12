'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Moon, Sun } from '@phosphor-icons/react/dist/ssr'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

type Props = {
  isMobile?: boolean
  className?: string
}

export const ThemeToggle: FC<Props> = ({ isMobile, className }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isDarkTheme: boolean = currentTheme === 'dark'

  if (!isMounted) {
    return (
      <div className={className}>
        <Sun
          className={cn('ml-2 h-6 w-6 text-gray-500', {
            'h-9 w-9': isMobile,
          })}
        />
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
        className={cn(className, {
          'ml-2': !isMobile,
          'mb-12': isMobile,
        })}
      >
        {isDarkTheme ? (
          <Sun
            className={cn(
              'h-6 w-6 text-text transition duration-300 ease-in-out hover:text-yellow-500',
              { 'h-9 w-9': isMobile }
            )}
            role="button"
            onClick={() => setTheme('light')}
            aria-label="Switch to light theme"
          />
        ) : (
          <Moon
            className={cn(
              'h-6 w-6 text-text transition duration-300 ease-in-out hover:text-yellow-500',
              { 'h-9 w-9': isMobile }
            )}
            role="button"
            onClick={() => setTheme('dark')}
            aria-label="Switch to dark theme"
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
