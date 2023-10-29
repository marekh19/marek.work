import type { FC } from 'react'

import { Markdown } from '@ui/Markdown'
import { Section } from '@ui/Section'

type Props = {
  // TODO: fix types
  data: any[]
}

export const ILove: FC<Props> = ({ data }) => {
  const blockData = data.filter(block => block.name === 'I ❤️').at(0)
  if (!blockData) return null

  return (
    <Section name={blockData.name}>
      <Markdown content={blockData.content} />
    </Section>
  )
}
