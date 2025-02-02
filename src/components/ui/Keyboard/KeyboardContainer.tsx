'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Loading } from '@ui/Loading'

const KeyboardCanvas = dynamic(
  () =>
    import('@ui/Keyboard/KeyboardCanvas').then(mod => ({
      default: mod.KeyboardCanvas,
    })),
  {
    loading: () => <KeyboardLoader />,
    ssr: false,
  }
)

export const KeyboardContainer = () => {
  const path = usePathname()
  const isDetailPage = path.includes('projects/') || path.includes('posts/')
  const [shouldRotate, setShouldRotate] = useState(true)

  if (isDetailPage) return null

  return (
    <div
      className={cn(
        'relative m-auto my-[-8rem] h-[28rem] w-full max-w-screen-lg px-6',
        'sm:h-[36rem] sm:px-8'
      )}
    >
      <KeyboardCanvas
        shouldRotate={shouldRotate}
        setShouldRotate={setShouldRotate}
      />
    </div>
  )
}

const KeyboardLoader = () => (
  <div className="grid size-full place-content-center">
    <Loading className="size-16 text-primary" />
  </div>
)
