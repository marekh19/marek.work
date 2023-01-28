import type { FC } from 'react'

import { Lipsum } from '~/features/ui/components/Lipsum'

export const Home: FC = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <Lipsum />
    </div>
  )
}
