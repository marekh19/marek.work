import type { FC, ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen mx-auto max-w-3xl flex flex-col">
      <Header />

      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="w-full bg-gray-200 dark:bg-gray-800 px-4 sm:px-6 flex py-28 flex-col items-center text-3xl">
          3D placeholder
        </div>
      </div>

      <main className="flex-grow w-full mx-auto px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  )
}
