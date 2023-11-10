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
      <Link href={ROUTES.projectDetail(slug)}>
        <article
          title={name}
          className="transition duration-300 hover:scale-105"
        >
          <div className="relative w-full">
            <Image
              src={imagePath}
              alt={name}
              width="600"
              height="315"
              sizes="464px"
              className="w-full rounded-lg"
            />
          </div>
          <h2 className="my-1.5 text-xl font-light tracking-wide md:text-2xl">
            {name}
          </h2>
          <p className="text-text/80">{description}</p>
        </article>
      </Link>
    )
  } else {
    return null
  }
}
