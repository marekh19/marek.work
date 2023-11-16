import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/lib/routes'
import { getTimeAgo } from '@/lib/utils'
import { type Post } from '@/sanity/queries/getAllPosts'
import { type Project } from '@/sanity/queries/getAllProjects'

import { Badge } from './Badge'

type Props = {
  data: Post | Project
}

export const ArticleCard: FC<Props> = ({ data }) => {
  const { title, slug, summary, thumbnail, _type } = data

  return (
    <Link
      href={
        _type === 'project'
          ? ROUTES.projectDetail(slug)
          : ROUTES.postDetail(slug)
      }
    >
      <article
        title={title}
        className="transition duration-300 hover:scale-105"
      >
        <div className="relative w-full">
          {_type === 'project' && data.work_in_progress && (
            <Badge text="Work in progress" className="absolute left-2 top-2" />
          )}
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width="600"
            height="315"
            sizes="464px"
            className="aspect-2/1 w-full rounded-lg object-cover"
          />
        </div>
        <h2 className="my-1.5 text-xl font-light tracking-wide md:text-2xl">
          {title}
        </h2>
        <p className="text-text/80">{summary}</p>
        {_type === 'post' && (
          <p className="text-sm text-text/80">{getTimeAgo(data._createdAt)}</p>
        )}
      </article>
    </Link>
  )
}
