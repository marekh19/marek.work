import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@ui/Button'
import { DefaultLayout } from '~/features/ui/components/Layouts/DefaultLayout'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page not found - Marek Honzal</title>
      </Head>

      <DefaultLayout>
        <div className=" relative mx-auto flex flex-col items-center rounded bg-gray-800 bg-opacity-10 p-4 text-center text-gray-900 backdrop-blur-lg dark:bg-gray-50 dark:bg-opacity-10 dark:text-gray-50 sm:w-3/4">
          <h1 className="mb-3 text-4xl font-semibold">!good</h1>
          <p className="text-gray-600 dark:text-gray-400">
            This page is not found. Click below to return to homepage.
          </p>
          <Link href="/">
            <Button text="GO" />
          </Link>
        </div>
      </DefaultLayout>
    </>
  )
}

export default NotFoundPage
