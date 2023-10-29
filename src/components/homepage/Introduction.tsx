import type { FC } from 'react'
import Image from 'next/image'

type Props = {
  // TODO: fix types
  data: any[]
}

export const Introduction: FC<Props> = ({ data }) => {
  const blockData = data.filter(block => block.component === 'intro').at(0)
  if (!blockData) return null

  return (
    <div className="mx-auto max-w-[42.5rem]">
      <cite className="mx-auto block w-5/6 rounded bg-accent/20 p-4 text-center not-italic shadow-md backdrop-blur-lg sm:w-3/4">
        {blockData?.cite}
      </cite>
      <div className="mt-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-medium tracking-wide sm:text-4xl">
            {blockData?.name}
          </h1>
          <h2 className="font-light text-primary sm:text-lg">
            {blockData?.job}
          </h2>
        </div>
        <div className="relative h-28 w-28 shrink-0">
          <Image
            src={blockData?.profile_picture.filename}
            alt={blockData?.profile_picture.name}
            title={blockData?.profile_picture.name}
            fill
            sizes="256px"
            className="rounded-full border-2 border-accent"
          />
        </div>
      </div>
    </div>
  )
}
