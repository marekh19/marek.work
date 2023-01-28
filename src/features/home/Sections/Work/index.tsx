import Link from 'next/link'
import type { FC } from 'react'

import { Section } from '~/features/ui/components/Section'

export const Work: FC = () => (
  <Section heading="Work">
    <p className="text-justify">
      I&apos;m a <span className="font-medium">ServiceNow/JavaScript</span>{' '}
      developer at{' '}
      <a
        href="https://www.accenture.com/"
        className="text-indigo-600 transition-colors duration-300 ease-in-out hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600"
        target="_blank"
        rel="noreferrer"
      >
        Accenture
      </a>{' '}
      by day and <span className="font-medium">React/Next.js</span> developer by
      night. In my fulltime job I work on many different features like:
    </p>
    <ul className="my-3 list-disc pl-4">
      <li className="my-1">
        CRUD Rest API to query and mutate data from outside ServiceNow platform
      </li>
      <li className="my-1">
        New frontend features for ServiceNow Portal in AngularJS
      </li>
      <li className="my-1">
        Transform map for parsing csv data into ServiceNow database
      </li>
    </ul>
    <p>
      When it&apos;s dark outside I work on my own web apps to improve my skills
      in technologies I&apos;m passionate about, like:{' '}
      <span className="font-medium">TypeScript, React, Next.js, Node.js</span>
    </p>
    <div className="text-center">
      <Link href="/projects">
        <button
          type="button"
          className="mt-5 inline-block rounded bg-indigo-600 px-6 py-2.5 font-semibold text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-300 hover:text-gray-800 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-600 dark:hover:text-gray-50"
        >
          My Portfolio &gt;
        </button>
      </Link>
    </div>
  </Section>
)
