import type { FC, ReactNode } from 'react'

import { Footer } from '../../Footer'
import { Header } from '../../Header'

type Props = {
  children: ReactNode
}

export const ProjectLayout: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
      <Header />
      <main className="mx-auto w-full flex-grow px-4 sm:px-6">{children}</main>
      <Footer />
    </div>
  )
}
