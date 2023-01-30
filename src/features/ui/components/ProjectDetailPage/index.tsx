import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

export type Technology = {
  name: string
  url: string
}

export type Github = {
  name: string
  url: string
}

type Props = {
  children: ReactNode
  name: string
  year: string
  stack: Technology[]
  imagePaths: string[]
  websiteUrl?: string
  github?: Github
}

export const ProjectDetailPage: FC<Props> = ({
  children,
  name,
  year,
  imagePaths,
  stack,
  github,
  websiteUrl,
}) => {
  return (
    <>
      <Head>
        <title>{`${name} - Marek Honzal`}</title>
      </Head>
      <div className="mt-3">
        <div className="flex items-center">
          <Link
            href="/projects"
            className="text-indigo-600 dark:text-indigo-400"
          >
            Projects
          </Link>
          <ChevronRightIcon className="mx-1 h-4" />
          <h1 className="mr-2 text-xl font-medium sm:text-2xl">{name}</h1>
          <h2 className="rounded-md bg-gray-300 p-1 text-xs font-bold dark:bg-gray-700">
            {year}
          </h2>
        </div>

        <div className="mt-3">{children}</div>
        <div className="mt-5 flex items-center">
          <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
            Stack
          </h3>
          <div className="ml-3">
            {stack.map((tech, index) => (
              <>
                <a
                  className="text-indigo-600 dark:text-indigo-400"
                  key={`${tech.name}_${Math.random()}`}
                  href={tech.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tech.name}
                </a>
                {index !== stack.length - 1 && <span>, </span>}
              </>
            ))}
          </div>
        </div>
        {websiteUrl && (
          <div className="mt-5 flex items-center">
            <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
              Website
            </h3>
            <a
              className="ml-3 text-indigo-600 dark:text-indigo-400"
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {websiteUrl}
            </a>
          </div>
        )}
        {github && (
          <div className="mt-5 flex items-center">
            <h3 className="rounded-md bg-gray-300 p-1 text-xs font-bold uppercase dark:bg-gray-700">
              Github
            </h3>
            <a
              className="ml-3 flex items-center text-indigo-600 dark:text-indigo-400"
              href={github.url}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span className="ml-1 lowercase">{github.name}</span>
            </a>
          </div>
        )}
        <div className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-5">
          {imagePaths.map((path, index) => (
            <div className="relative w-full" key={`${path}_${Math.random()}`}>
              <Image
                src={path}
                alt={`${name} screenshot ${index + 1}`}
                width="600"
                height="315"
                className="w-full rounded-md"
                quality={95}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
