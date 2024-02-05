import type { FC } from 'react'
import Image from 'next/image'

type Props = {
  data: {
    quote: string
    full_name: string
    job: string
    profile_picture: {
      url: string
      alt: string
    }
  }
}

export const Introduction: FC<Props> = ({ data }) => (
  <div className="mx-auto max-w-[42.5rem]">
    <cite className="mx-auto block w-5/6 rounded bg-accent/20 p-4 text-center not-italic shadow-md backdrop-blur-lg sm:w-3/4">
      {data.quote}
    </cite>
    <div className="mt-8 flex items-center justify-between">
      <div>
        <h1 className="font-display text-2xl font-medium tracking-wide sm:text-4xl">
          {data.full_name}
        </h1>
        <h2 className="font-light text-primary sm:text-lg">{data.job}</h2>
      </div>
      <div className="relative size-28 shrink-0">
        <Image
          src={data.profile_picture.url}
          alt={data.profile_picture.alt}
          title={data.full_name}
          fill
          sizes="256px"
          className="rounded-full border-2 border-accent"
        />
      </div>
    </div>
  </div>
)
