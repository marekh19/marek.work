import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import type { FC } from 'react'
import { useState, useEffect } from 'react'

export const ToggleTheme: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const isDarkTheme = currentTheme === 'dark'

  if (isDarkTheme) {
    return (
      <SunIcon
        className="h-8 w-8 text-yellow-500 transition duration-300 ease-in-out hover:text-orange-400"
        role="button"
        onClick={() => setTheme('light')}
        title="Switch to light theme"
        aria-label="Switch to light theme"
      />
    )
  }
  return (
    <MoonIcon
      className="h-8 w-8 text-gray-700 transition duration-300 ease-in-out hover:text-yellow-500"
      role="button"
      onClick={() => setTheme('dark')}
      title="Switch to dark theme"
      aria-label="Switch to dark theme"
    />
  )
}
