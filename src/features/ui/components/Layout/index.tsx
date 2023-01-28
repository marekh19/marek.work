import type { FC, ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  children: ReactNode
  className: string
}

export const Layout: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} mx-auto flex min-h-screen max-w-3xl flex-col`}
    >
      <Header />

      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex w-full flex-col items-center bg-gray-200 px-4 py-28 text-3xl dark:bg-gray-800 sm:px-6">
          3D placeholder
        </div>
      </div>

      <main className="mx-auto w-full flex-grow px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  )
}
