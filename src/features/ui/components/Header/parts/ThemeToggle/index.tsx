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

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className="h-8 w-8 text-yellow-500 transition duration-300 ease-in-out hover:text-orange-400"
        role="button"
        onClick={() => setTheme('light')}
      />
    )
  }
  return (
    <MoonIcon
      className="h-8 w-8 text-gray-700 transition duration-300 ease-in-out hover:text-yellow-500"
      role="button"
      onClick={() => setTheme('dark')}
    />
  )
}
