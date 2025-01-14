import { NextResponse, type NextRequest } from 'next/server'

import { env } from './env.mjs'

export function middleware(request: NextRequest) {
  // NOTE: Prevent accessing the site via deployment URL
  // https://github.com/vercel/vercel/discussions/6525
  if (!request.nextUrl.origin.includes('vercel.app')) {
    return NextResponse.next()
  }

  return NextResponse.redirect(env.NEXT_PUBLIC_SITE_URL, 301)
}
