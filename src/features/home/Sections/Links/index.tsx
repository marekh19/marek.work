import type { FC } from 'react'

import { Section } from '~/features/ui/components/Section'

import { GitHubIcon } from './parts/GitHubIcon'
import { LinkedInIcon } from './parts/LinkedInIcon'

export const Links: FC = () => (
  <Section heading="On the web">
    <div>
      <a href="https://github.com/marekh19" target="_blank" rel="noreferrer">
        <button
          type="button"
          className="my-3 flex items-center justify-center rounded-lg bg-transparent p-3 text-yellow-600 transition duration-300 ease-in-out hover:bg-yellow-200 dark:text-yellow-500 dark:hover:bg-yellow-900"
        >
          <GitHubIcon />
          <span className="ml-2 font-semibold">@marekh19</span>
        </button>
      </a>
      <a
        href="https://linkedin.com/in/marekhonzal/"
        target="blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="my-3 flex items-center justify-center rounded-lg bg-transparent p-3 text-yellow-600 transition duration-300 ease-in-out hover:bg-yellow-200 dark:text-yellow-500 dark:hover:bg-yellow-900"
        >
          <LinkedInIcon />
          <span className="ml-2 font-semibold">Marek Honzal</span>
        </button>
      </a>
    </div>
  </Section>
)
