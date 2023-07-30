import type { FC, ReactNode } from 'react'

type CardsContainerProps = {
  children: ReactNode
}

export const CardsContainer: FC<CardsContainerProps> = ({ children }) => {
  return <div className="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2">{children}</div>
}
