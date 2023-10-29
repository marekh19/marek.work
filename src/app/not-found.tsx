import { type Metadata } from 'next'
import Link from 'next/link'

import { ROUTES } from '@/lib/routes'

import { Button } from '@ui/Button'
import { InnerLayout } from '@ui/InnerLayout'

export const metadata: Metadata = {
  title: 'Not found',
}

export default function NotFound() {
  return (
    <InnerLayout>
      <div className="relative mx-auto flex flex-col items-center rounded bg-gray-800/10 p-4 text-center text-gray-900 backdrop-blur-lg dark:bg-gray-200/10 dark:text-gray-50 sm:w-3/4">
        <h1 className="mb-3 text-4xl font-semibold">!good</h1>
        <p className="text-gray-600 dark:text-gray-400">
          This page is not found. Click below to return to homepage.
        </p>
        <Link href={ROUTES.home}>
          <Button text="GO" />
        </Link>
      </div>
    </InnerLayout>
  )
}
