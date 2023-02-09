import type { FC } from 'react'

import { InnerLayout } from '@ui/Layouts/InnerLayout'
import { ProjectDetailPage } from '@ui/ProjectDetailPage'
import type { Technology } from '@ui/ProjectDetailPage'

const stack: Technology[] = [
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { name: 'Next.js', url: 'https://nextjs.org/' },
  { name: 'React', url: 'https://reactjs.org/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
]

const SNIncidentPage: FC = () => {
  return (
    <InnerLayout>
      <ProjectDetailPage
        name="ServiceNow Incidents"
        year="2022"
        stack={stack}
        websiteUrl="https://sn-incidents.marek.work"
        imagePaths={['/SNIncident/banner.jpg']}
        github={{
          name: 'sn-incident-overview',
          url: 'https://github.com/marekh19/sn-incident-overview',
        }}
      >
        <p className="mb-3">
          When <span className="font-semibold">Next.js 13</span> came out I
          wanted to try the new approach by using{' '}
          <a
            className="text-indigo-600 dark:text-indigo-400"
            href="https://nextjs.org/docs/advanced-features/custom-app"
            target="_blank"
            rel="noreferrer"
          >
            app/
          </a>{' '}
          directory that is still in beta. I also wanted to show a couple of my
          team colleagues some <span className="font-semibold">React</span>{' '}
          introduction so I chose what we know very well -{' '}
          <span className="font-semibold">ServiceNow</span> platform as a data
          provider.
        </p>
        <p className="mb-3">
          I learned how to work with <span className="font-semibold">/app</span>{' '}
          directory in Next.js 13 and how to use{' '}
          <a
            className="text-indigo-600 dark:text-indigo-400"
            href="https://nextjs.org/docs/advanced-features/custom-app"
            target="_blank"
            rel="noreferrer"
          >
            React Server Components
          </a>
          .
        </p>
      </ProjectDetailPage>
    </InnerLayout>
  )
}

export default SNIncidentPage
