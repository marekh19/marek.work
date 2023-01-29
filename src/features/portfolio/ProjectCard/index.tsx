import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

type ProjectCardProps = {
  name: string
  description: string
  imagePath: string
  projectLink: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imagePath,
  name,
  projectLink,
}) => {
  return (
    <Link href={projectLink}>
      <article
        title={name}
        className="w-full p-2 text-gray-900 dark:text-gray-50"
      >
        <div className="relative w-full">
          <Image
            src={imagePath}
            alt={`${name} banner`}
            width="600"
            height="315"
            className="w-full rounded-md"
          />
        </div>
        <h2 className="my-2 text-xl font-light tracking-wide md:text-2xl">
          {name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </article>
    </Link>
  )
}
