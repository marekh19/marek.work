import type { FC } from 'react'
import { CodeBlock } from '@phosphor-icons/react/dist/ssr'

import '@/styles/globals.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- from sanity studio
export const Logo: FC = (props: any) => {
  const { title } = props
  return (
    <div className="flex items-center space-x-2 p-1">
      <CodeBlock className="h-8 w-8 fill-current" />
      <span>{title}</span>
    </div>
  )
}
