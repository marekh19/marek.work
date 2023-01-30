import type { FC } from 'react'

import { ProjectLayout } from '~/features/ui/components/Layouts/ProjectLayout'
import { ProjectDetailPage } from '~/features/ui/components/ProjectDetailPage'

const stack = [
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
]

const TickerdexPage: FC = () => {
  return (
    <ProjectLayout>
      <ProjectDetailPage
        name="Tickerdex"
        year="2022-"
        stack={stack}
        websiteUrl="https://dev.tickerdex.com"
        github={{ name: 'Tickerdex', url: 'https://github.com' }}
        imagePaths={['/Tickerdex/demo/1.jpg', '/Tickerdex/demo/2.jpg']}
      >
        <p className="mb-3">
          Tool for in-depth stock analysis I&apos;m currently working on.
          It&apos;s far from finished but I believe it will be truly useful and
          easy to understand even for beginners. But I believe it will be truly
          useful and easy to understand even for beginners.
        </p>
        <p>
          Tool for in-depth stock analysis I&apos;m currently working on.
          It&apos;s far from finished but I believe it will be truly useful and
          easy to understand even for beginners.
        </p>
      </ProjectDetailPage>
    </ProjectLayout>
  )
}

export default TickerdexPage
