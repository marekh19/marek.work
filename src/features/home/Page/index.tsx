import type { FC } from 'react'

import { Introduction } from '../Introduction'
import { Background } from '../Sections/Background'
import { Bio } from '../Sections/Bio'
import { ILove } from '../Sections/ILove'
import { Links } from '../Sections/Links'
import { Work } from '../Sections/Work'

export const Home: FC = () => {
  return (
    <div>
      <cite className="mx-auto block w-full rounded bg-white bg-opacity-20 py-3 text-center not-italic drop-shadow-lg backdrop-blur-lg sm:w-3/4">
        Hi, I&apos;m a web developer based in&nbsp;Czech&nbsp;Republic!
      </cite>
      <Introduction />
      <Background />
      <Work />
      <Bio />
      <ILove />
      <Links />
    </div>
  )
}
