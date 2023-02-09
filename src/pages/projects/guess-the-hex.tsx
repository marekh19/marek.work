import type { FC } from 'react'

import { InnerLayout } from '@ui/Layouts/InnerLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'styled-components', url: 'https://styled-components.com/' },
]

const GuessTheHexPage: FC = () => {
  return (
    <InnerLayout>
      <ProjectDetailPage
        name="Guess the Hex"
        year="2022"
        stack={stack}
        imagePaths={['/GuessTheHex/1.png']}
        websiteUrl="https://guessthehex.marek.work"
        github={{
          name: 'GuessTheHex',
          url: 'https://github.com/marekh19/GuessTheHex',
        }}
      >
        <p className="mb-3">
          Single-page app/game. A hex color code is shown and you have to guess
          which of the 3&nbsp;colors it represents. It counts a streak of
          successful guesses and if you guess wrong, it&apos;s reset
          back&nbsp;to&nbsp;0.
        </p>
        <p className="mb-3">
          I wanted to build something quick and fun to practice using multiple
          hooks in a single component and also a timeout mechanic.
        </p>
      </ProjectDetailPage>
    </InnerLayout>
  )
}

export default GuessTheHexPage
