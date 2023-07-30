import type { FC } from 'react'

import { InnerLayout } from '@ui/Layouts/InnerLayout'

import { Introduction } from '../Introduction'
import { Background } from '../Sections/Background'
import { Bio } from '../Sections/Bio'
import { ILove } from '../Sections/ILove'
import { Links } from '../Sections/Links'
import { Work } from '../Sections/Work'

export const Home: FC = () => {
  return (
    <InnerLayout>
      <cite className="mx-auto block w-5/6 rounded bg-gray-900/10 py-3 text-center not-italic shadow-md backdrop-blur-lg dark:bg-gray-200/10 sm:w-3/4">
        Hi, I&apos;m a web developer based in the&nbsp;Czech&nbsp;Republic!
      </cite>
      <Introduction />
      <Background />
      <Work />
      <Bio />
      <ILove />
      <Links />
    </InnerLayout>
  )
}
