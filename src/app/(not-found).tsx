import { type Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/lib/routes'

import { Button } from '@ui/Button'
import { InnerLayout } from '@ui/InnerLayout'

export const metadata: Metadata = {
  title: 'Not found',
}

// TODO: Check how to properly make a not found page when working with groupped routes

export default function NotFound() {
  return (
    <InnerLayout>
      <div className="mx-auto flex max-w-[42.5rem] flex-col items-center rounded-lg bg-accent/20 p-4 text-center backdrop-blur-lg">
        <h1 className="mb-4 text-4xl font-semibold text-primary">!good</h1>
        <p className="mb-2">This page is not found.</p>
        <p className="mb-4">Click below to go to the homepage</p>
        <Link href={ROUTES.home}>
          <Button accent="secondary" className="gap-2">
            <span>GO</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </InnerLayout>
  )
}
