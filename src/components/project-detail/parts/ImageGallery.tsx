import type { FC } from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

type Props = {
  // TODO: fix this ugly type
  images:
    | ({
        __typename?: 'Asset' | undefined
        id?: number | null | undefined
        name?: string | null | undefined
        filename: string
      } | null)[]
    | null
    | undefined
  className?: string
}

export const ImageGallery: FC<Props> = ({ images, className }) => {
  if (!images) return null

  return (
    <div
      className={cn('mx-auto flex w-full max-w-xl flex-col gap-6', className)}
    >
      {images.map(img => (
        <div className="relative w-full" key={img?.id}>
          <Image
            src={img?.filename ?? ''}
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
