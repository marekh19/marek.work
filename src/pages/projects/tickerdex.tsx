import type { FC } from 'react'

import { ProjectLayout } from '@ui/Layouts/ProjectLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'styled-components', url: 'https://styled-components.com/' },
  { name: 'Supabase', url: 'https://supabase.com/' },
]

const TickerdexPage: FC = () => {
  return (
    <ProjectLayout>
      <ProjectDetailPage
        name="Tickerdex"
        year="2022-"
        stack={stack}
        websiteUrl="https://dev.tickerdex.com"
        imagePaths={[
          '/Tickerdex/1.png',
          '/Tickerdex/2.png',
          '/Tickerdex/3.png',
        ]}
      >
        <p className="mb-3 inline-block rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
          work in progress
        </p>
        <p className="mb-3">
          I created a{' '}
          <a
            className="text-indigo-600 dark:text-indigo-400"
            href="https://github.com/marekh19/Valuat.io"
            target="_blank"
            rel="noreferrer"
          >
            very similar app
          </a>{' '}
          about a year ago in the{' '}
          <span className="font-semibold">Django Python framework</span>. But I
          wasn&apos;t satisfied with it. At that time I started to learn React
          and Next.js so I thought it would be a good idea to build it once
          again but better and with much more features.
        </p>
        <p className="mb-3">
          When it&apos;s ready to release it will offer a detailed analysis of
          stocks, ETFs, scoring, S&P 500 rankings based on this score, creating
          custom watch lists and more.
        </p>
        <p>
          During the development process, I&apos;ve learnt many new concepts
          like <span className="font-semibold">input debouncing</span>, using{' '}
          <span className="font-semibold">abort controller</span>,{' '}
          <span className="font-semibold">React Context API</span>, how to
          implement <span className="font-semibold">auth</span> etc.
        </p>
      </ProjectDetailPage>
    </ProjectLayout>
  )
}

export default TickerdexPage
