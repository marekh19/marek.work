import type { FC } from 'react'

import type { Maybe } from '@/types/__generated__/graphql'

import { Section } from '@ui/Section'

type Props = {
  // TODO: fix types
  data: any[]
}

type TimelineItem = {
  _uid?: Maybe<string>
  year?: Maybe<string>
  headline?: Maybe<string>
  component?: Maybe<string>
  description?: Maybe<string>
}

export const Bio: FC<Props> = ({ data }) => {
  const blockData = data.filter(block => block.name === 'Bio').at(0)
  if (!blockData.blocks) return null
  const timeline = blockData.blocks as TimelineItem[]

  return (
    <Section name={blockData.name}>
      <ol className="relative space-y-8 border-l border-secondary">
        {timeline.map(timelineItem => (
          <li key={timelineItem._uid} className="ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <time className="mb-1 leading-none text-text/80">
              {timelineItem.year}
            </time>
            <h3 className="text-lg font-medium">{timelineItem.headline}</h3>
            <p className="text-sm text-primary">{timelineItem.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
