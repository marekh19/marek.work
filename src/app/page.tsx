import { InnerLayout } from '@ui/Layouts/InnerLayout'

import { Introduction } from '@/components/homepage/Introduction'
import { Background } from '@/components/homepage/sections/Background'
import { Bio } from '@/components/homepage/sections/Bio'
import { ILove } from '@/components/homepage/sections/ILove'
import { Links } from '@/components/homepage/sections/Links'
import { Work } from '@/components/homepage/sections/Work'

export default function Home() {
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
