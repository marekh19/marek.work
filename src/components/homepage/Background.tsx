import type { FC } from 'react'

import { Markdown } from '@ui/Markdown'
import { Section } from '@ui/Section'

type Props = {
  // TODO: fix types
  data: any[]
}

export const Background: FC<Props> = ({ data }) => {
  const blockData = data.filter(block => block.name === 'Background').at(0)
  if (!blockData) return null

  return (
    <Section name={blockData.name}>
      <Markdown content={blockData.content} className="text-justify" />
    </Section>
  )
}
