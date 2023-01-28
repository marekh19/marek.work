import type { FC } from 'react'

import { Section } from '~/features/ui/components/Section'

export const Background: FC = () => (
  <Section heading="Background">
    <p className="text-justify">
      I used to work in sales/marketing field for 7 years. 2 years ago I decided
      to take a big step and completely change my well established career. I
      felt a need to follow my passion instead of climbing the career ladder in
      an industry that was not fulfilling me. So I quit and joined the{' '}
      <a
        href="https://www.greenfoxacademy.cz/en/home"
        className="text-indigo-600 transition-colors duration-300 ease-in-out hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600"
        target="_blank"
        rel="noreferrer"
      >
        Green Fox Academy
      </a>{' '}
      bootcamp. And I&apos;m proud I can say it was the best career decision I
      ever made.
    </p>
  </Section>
)