import Image from 'next/image'
import type { FC } from 'react'

export const Introduction: FC = () => (
  <div className="mt-5 flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-medium tracking-wide sm:text-4xl">
        Marek Honzal
      </h1>
      <h2 className="font-light sm:text-lg">Full-stack web developer</h2>
    </div>
    <div className="relative h-28 w-28">
      <Image
        src="/marek.jpg"
        alt="Picture of Marek"
        title="Marek Honzal"
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="rounded-full border-2 border-indigo-300 dark:border-gray-50"
      />
    </div>
  </div>
)
