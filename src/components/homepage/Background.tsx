import type { FC } from 'react'

import { type TextSection } from '@/types/cms-content'

import { Markdown } from '@ui/Markdown'
import { Section } from '@ui/Section'

type Props = {
  data: TextSection
}

export const Background: FC<Props> = ({ data }) => {
  if (!data) return null

  return (
    <Section name={data.heading}>
      <Markdown content={data.content} className="text-justify" />
    </Section>
  )
}
