import type { GetPageItemQuery } from '@/types/__generated__/graphql'
import { apolloClient } from '@/services/apollo/apollo-client'
import GetPageItem from '@/services/apollo/queries/GetPageItem.gql'

import { InnerLayout } from '@ui/InnerLayout'
import { Background } from '@/components/homepage/Background'
import { Bio } from '@/components/homepage/Bio'
import { ILove } from '@/components/homepage/ILove'
import { Introduction } from '@/components/homepage/Introduction'
import { Links } from '@/components/homepage/Links'
import { Work } from '@/components/homepage/Work'

export default async function HomePage() {
  const { data } = await apolloClient.query<GetPageItemQuery>({
    query: GetPageItem,
    variables: { pageItemId: 'homepage' },
    fetchPolicy: 'no-cache',
  })

  const elements = data.PageItem?.content?.blocks

  return (
    <InnerLayout>
      <Introduction data={elements} />
      <Background data={elements} />
      <Work data={elements} />
      <Bio data={elements} />
      <ILove data={elements} />
      <Links />
    </InnerLayout>
  )
}
