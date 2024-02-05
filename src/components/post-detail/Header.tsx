import { type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'
import { format, parseISO } from 'date-fns'

import { ROUTES } from '@/lib/routes'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  publishedAt: string
  thumbnail: {
    url: string
    alt: string
  }
  className?: string
}

export const Header: FC<Props> = ({
  title,
  publishedAt,
  thumbnail,
  className,
}) => {
  return (
    <div className={cn('', className)}>
      <Link
        href={ROUTES.posts}
        className="flex items-center space-x-2 text-primary duration-300 ease-in-out hover:text-text"
      >
        <CaretLeft className="size-4" />
        <span>Posts</span>
      </Link>
      <div className="relative mt-6 w-full">
        <Image
          src={thumbnail.url}
          alt={thumbnail.alt}
          width="680"
          height="360"
          sizes="680px"
          className="aspect-2/1 w-full rounded-lg object-cover"
        />
      </div>
      <p className="mt-4 text-text/80">
        Published at {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
      </p>
      <h1 className="mt-4 font-display text-3xl sm:text-5xl">{title}</h1>
    </div>
  )
}
