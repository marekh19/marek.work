import { getHomepage } from '@/sanity/queries/getHomepage'

import { InnerLayout } from '@ui/InnerLayout'
import { Background } from '@/components/homepage/Background'
import { Bio } from '@/components/homepage/Bio'
import { ILove } from '@/components/homepage/ILove'
import { Introduction } from '@/components/homepage/Introduction'
import { Links } from '@/components/homepage/Links'
import { Work } from '@/components/homepage/Work'

export default async function HomePage() {
  const homepage = await getHomepage()

  const background = homepage.sections.find(s => s.name === 'background')
  const work = homepage.sections.find(s => s.name === 'work')
  const love = homepage.sections.find(s => s.name === 'love')

  return (
    <InnerLayout>
      <Introduction data={homepage.intro} />
      <Background data={background} />
      <Work data={work} />
      <Bio data={homepage.bio} />
      <ILove data={love} />
      <Links />
    </InnerLayout>
  )
}
