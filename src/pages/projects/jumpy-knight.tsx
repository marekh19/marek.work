import type { FC } from 'react'

import { InnerLayout } from '@ui/Layouts/InnerLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'Python', url: 'https://www.python.org/' },
  { name: 'pygame', url: 'https://www.pygame.org' },
]

const JumpyKnightPage: FC = () => {
  return (
    <InnerLayout>
      <ProjectDetailPage
        name="Jumpy Knight"
        year="2022"
        stack={stack}
        imagePaths={['/JumpyKnight/banner.jpg', '/JumpyKnight/1.jpg']}
        github={{
          name: 'jumpy-knight',
          url: 'https://github.com/marekh19/jumpy-knight',
        }}
      >
        <p className="mb-3">
          Simple game with a pixel art style. It&apos;s very similar to the &quot;jumping
          dinosaur&quot; Google Chrome game when your internet connection is down. There are 2 types
          of monsters and you have to jump to avoid them. It calculates a score (1 point per second)
          and stores a high score locally in a&nbsp;file.
        </p>
      </ProjectDetailPage>
    </InnerLayout>
  )
}

export default JumpyKnightPage
