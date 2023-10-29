import type { FC } from 'react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'

import { Button } from '@ui/Button'
import { Markdown } from '@ui/Markdown'
import { Section } from '@ui/Section'

type Props = {
  // TODO: fix types
  data: any[]
}

export const Work: FC<Props> = ({ data }) => {
  const blockData = data.filter(block => block.name === 'Work').at(0)
  if (!blockData) return null

  return (
    <Section name={blockData.name}>
      <Markdown content={blockData.content} className="text-justify" />
      <Link href={ROUTES.projects}>
        <Button className="mx-auto mt-6 gap-x-2" accent="secondary">
          <span>My portfolio</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </Link>
    </Section>
  )
}
