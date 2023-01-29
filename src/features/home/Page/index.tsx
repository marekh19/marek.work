import type { FC } from 'react'

import { DefaultLayout } from '@ui/Layouts/DefaultLayout'

import { Introduction } from '../Introduction'
import { Background } from '../Sections/Background'
import { Bio } from '../Sections/Bio'
import { ILove } from '../Sections/ILove'
import { Links } from '../Sections/Links'
import { Work } from '../Sections/Work'

export const Home: FC = () => {
  return (
    <DefaultLayout>
      <cite className="mx-auto block w-5/6 rounded bg-gray-800 bg-opacity-10 py-3 text-center not-italic backdrop-blur-lg dark:bg-gray-50 dark:bg-opacity-10 sm:w-3/4">
        Hi, I&apos;m a web developer based in&nbsp;Czech&nbsp;Republic!
      </cite>
      <Introduction />
      <Background />
      <Work />
      <Bio />
      <ILove />
      <Links />
    </DefaultLayout>
  )
}
