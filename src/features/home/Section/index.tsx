import type { FC, ReactNode } from 'react'

type Props = {
  heading: string
  children: ReactNode
}

export const Section: FC<Props> = ({ heading, children }) => (
  <section className="mt-5">
    <h3 className="mb-2 inline-block border-b-4 border-gray-400 text-2xl dark:border-gray-600">
      {heading}
    </h3>
    {children}
  </section>
)
