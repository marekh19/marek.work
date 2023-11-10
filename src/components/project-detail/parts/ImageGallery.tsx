import type { FC } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  images:
    | {
        url: string
        alt: string
        _key: string
      }[]
    | null
  className?: string
}

export const ImageGallery: FC<Props> = ({ images, className }) => {
  if (!images) return null

  return (
    <div
      className={cn('mx-auto flex w-full max-w-xl flex-col gap-6', className)}
    >
      {images.map(img => (
        <div className="relative w-full" key={img?._key}>
          <Image
            src={img.url}
            alt="Project screenshot"
            width="600"
            height="315"
            sizes="576px"
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}
