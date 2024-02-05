import type { FC } from 'react'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'

import { Section } from '@ui/Section'

export const Links: FC = () => (
  <Section name="On the web">
    <div className="space-y-2">
      <a
        href="https://github.com/marekh19"
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <button className="flex items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 py-2 transition duration-300 ease-in-out hover:bg-secondary">
          <GithubLogo className="size-8" />
          <span className="font-semibold">marekh19</span>
        </button>
      </a>
      <a
        href="https://linkedin.com/in/marekhonzal/"
        target="blank"
        rel="noreferrer"
        className="block"
      >
        <button className="flex items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 py-2 transition duration-300 ease-in-out hover:bg-secondary">
          <LinkedinLogo className="size-8" />
          <span className="font-semibold">Marek Honzal</span>
        </button>
      </a>
    </div>
  </Section>
)
