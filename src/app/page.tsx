import { InnerLayout } from '@ui/InnerLayout'
import { Background } from '@/components/homepage/Background'
import { Bio } from '@/components/homepage/Bio'
import { ILove } from '@/components/homepage/ILove'
import { Introduction } from '@/components/homepage/Introduction'
import { Links } from '@/components/homepage/Links'
import { Work } from '@/components/homepage/Work'

export default function Home() {
  return (
    <InnerLayout>
      <Introduction />
      <Background />
      <Work />
      <Bio />
      <ILove />
      <Links />
    </InnerLayout>
  )
}
