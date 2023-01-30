import type { FC } from 'react'

import { ProjectLayout } from '@ui/Layouts/ProjectLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'styled-components', url: 'https://styled-components.com/' },
  { name: 'PlanetScale', url: 'https://planetscale.com/' },
  { name: 'Prisma', url: 'https://www.prisma.io/' },
  { name: 'tRPC', url: 'https://trpc.io/' },
]

const CutestMonPage: FC = () => {
  return (
    <ProjectLayout>
      <ProjectDetailPage
        name="Cutest Pokémon"
        year="2022"
        stack={stack}
        websiteUrl="https://cutest-mon.marek.work"
        imagePaths={['/CutestMon/1.png', '/CutestMon/2.png']}
        github={{
          name: 'cutest-mon',
          url: 'https://github.com/marekh19/cutest-mon',
        }}
      >
        <p className="mb-3">
          I wanted to learn more about connecting Next.js app to a database. So
          I created a very similar app that Theo shows in his{' '}
          <a
            className="text-indigo-600 dark:text-indigo-400"
            href="https://youtu.be/PKy2lYEnhgs"
            target="_blank"
            rel="noreferrer"
          >
            tutorial
          </a>
          . I&nbsp;used styled-components instead of TailwindCSS and did some
          things differently to not just blindly follow a tutorial video.
        </p>
        <p className="mb-3">
          I learned how to use SSG for the results page, tRPC, and interact with
          a database through Prisma ORM.
        </p>
      </ProjectDetailPage>
    </ProjectLayout>
  )
}

export default CutestMonPage
