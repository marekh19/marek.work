import type { FC } from 'react'
import Link from 'next/link'

import { ROUTES } from '@/lib/routes'

import { Section } from '@ui/Section'

export const ILove: FC = () => (
  <Section heading="I ♥">
    <p>
      My wife, our 2 whippet dogs, traveling, investing &&nbsp;all&nbsp;kinds of
      tech stuff - working on{' '}
      <Link href={ROUTES.projects}>
        <span className="text-indigo-600 transition-colors duration-300 ease-in-out hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
          my&nbsp;apps
        </span>
      </Link>
      , Linux, homelab, mechanical keyboards
    </p>
  </Section>
)
