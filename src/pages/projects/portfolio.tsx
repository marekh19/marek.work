import type { FC } from 'react'

import { ProjectLayout } from '@ui/Layouts/ProjectLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Three.js', url: 'https://threejs.org/' },
]

const PortfolioPage: FC = () => {
  return (
    <ProjectLayout>
      <ProjectDetailPage
        name="My Portfolio"
        year="2023"
        stack={stack}
        websiteUrl="https://marek.work"
        imagePaths={['/Portfolio/banner.jpg']}
        github={{
          name: 'marek.work',
          url: 'https://github.com/marekh19/marek.work',
        }}
      >
        <p className="mb-3">
          I felt it would be good to create a website where I can showcase
          projects I&apos;ve been working on in a well-arranged way. So other
          developers can see what I&apos;m working on and learn something about
          me. I also wanted to try to bring a 3D object to a website with
          Three.js and I think this was a perfect fit.
        </p>
        <p>
          I also wanted to practice little more with Tailwind CSS since I mostly
          used styled-components before.
        </p>
      </ProjectDetailPage>
    </ProjectLayout>
  )
}

export default PortfolioPage
