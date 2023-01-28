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
        className="w-10 h-10 text-yellow-500"
        role="button"
        onClick={() => setTheme('light')}
      />
    )
  }
  return (
    <MoonIcon
      className="w-10 h-10 text-gray-900 "
      role="button"
      onClick={() => setTheme('dark')}
    />
  )
}
