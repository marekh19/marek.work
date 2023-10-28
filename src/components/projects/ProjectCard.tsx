import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/lib/routes'
import { type Maybe } from '@/types/__generated__/graphql'

type ProjectCardProps = {
  name?: Maybe<string>
  description?: Maybe<string>
  imagePath?: Maybe<string>
  slug?: Maybe<string>
}

export const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imagePath,
  name,
  slug,
}) => {
  if (name && description && imagePath && slug) {
    return (
      // TODO: implement routes resolver
      <Link href={ROUTES.projectDetail(slug)}>
        <article
          title={name}
          className="w-full p-2 text-gray-900 dark:text-gray-50"
        >
          <div className="relative w-full">
            <Image
              src={imagePath}
              alt={name}
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
  } else {
    return null
  }
}
