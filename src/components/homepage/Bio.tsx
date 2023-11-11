import type { FC } from 'react'

import { type BioItem } from '@/types/cms-content'

import { Section } from '@ui/Section'

type Props = {
  data: BioItem[]
}

export const Bio: FC<Props> = ({ data }) => {
  if (!data) return null

  return (
    <Section name="Bio">
      <ol className="relative space-y-6 border-l border-secondary">
        {data.map(timelineItem => (
          <li key={timelineItem._key} className="ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <time className="mb-1 leading-none text-text/80">
              {timelineItem.year}
            </time>
            <h3 className="text-lg font-medium">{timelineItem.label}</h3>
            <p className="text-sm text-primary">{timelineItem.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
