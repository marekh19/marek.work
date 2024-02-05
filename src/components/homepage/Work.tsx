import type { FC } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'
import { type TextSection } from '@/types/cms-content'

import { Button } from '@ui/Button'
import { Markdown } from '@ui/Markdown'
import { Section } from '@ui/Section'

type Props = {
  data: TextSection
}

export const Work: FC<Props> = ({ data }) => {
  if (!data) return null

  return (
    <Section name={data.heading}>
      <Markdown content={data.content} className="md:text-justify" />
      <Link href={ROUTES.projects}>
        <Button className="mx-auto mt-6 gap-x-2" accent="secondary">
          <span>My portfolio</span>
          <ArrowRight className="size-5" />
        </Button>
      </Link>
    </Section>
  )
}
