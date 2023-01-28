import Link from 'next/link'
import type { FC } from 'react'

import { Introduction } from '../Introduction'
import { Section } from '../Section'

export const Home: FC = () => {
  return (
    <div>
      <cite className="mx-auto block w-full rounded bg-white bg-opacity-20 py-3 text-center not-italic drop-shadow-lg backdrop-blur-lg sm:w-3/4">
        Hi, I&apos;m a web developer based in&nbsp;Czech&nbsp;republic!
      </cite>
      <Introduction />
      <Section heading="Background">
        <p className="text-justify">
          I used to work in sales/marketing field for 7 years. 2 years ago I
          decided to take a big step and completely change my well established
          career. I felt a need to follow my passion instead of climbing the
          career ladder in an industry that was not fulfilling me. So I quit and
          joined the{' '}
          <a
            href="https://www.greenfoxacademy.cz/en/home"
            className="text-indigo-600 dark:text-indigo-400"
            target="_blank"
            rel="noreferrer"
          >
            Green Fox Academy
          </a>{' '}
          bootcamp. And I&apos;m proud I can say it was the best career decision
          I ever made.
        </p>
      </Section>
      <Section heading="Work">
        <p className="text-justify">
          I&apos;m a <span className="font-medium">ServiceNow/JavaScript</span>{' '}
          developer at{' '}
          <a
            href="https://www.accenture.com/"
            className="text-indigo-600 dark:text-indigo-400"
            target="_blank"
            rel="noreferrer"
          >
            Accenture
          </a>{' '}
          by day and <span className="font-medium">React/Next.js</span>{' '}
          developer by night. In my fulltime job I work on many different
          features like:
        </p>
        <ul className="my-3 list-disc pl-4">
          <li className="my-1">
            CRUD Rest API to query and mutate data from outside ServiceNow
            platform
          </li>
          <li className="my-1">
            New frontend features for ServiceNow Portal in AngularJS
          </li>
          <li className="my-1">
            Transform map for parsing csv data into ServiceNow database
          </li>
        </ul>
        <p>
          When it&apos;s dark outside I work on my own web apps to improve my
          skills in technologies I&apos;m passionate about, like:{' '}
          <span className="font-medium">
            TypeScript, React, Next.js, Node.js
          </span>
        </p>
        <div className="text-center">
          <Link href="/projects">
            <button
              type="button"
              className="mt-5 inline-block rounded bg-indigo-600 px-6 py-2.5 font-medium text-gray-50 transition duration-300 ease-in-out hover:bg-indigo-400 hover:text-gray-800 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-600 dark:hover:text-gray-50"
            >
              My Portfolio &gt;
            </button>
          </Link>
        </div>
      </Section>
    </div>
  )
}
