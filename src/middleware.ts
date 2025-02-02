import { NextResponse, type NextRequest } from 'next/server'

import { siteConfig } from '@/config/site'

export function middleware(request: NextRequest) {
  if (!request.nextUrl.origin.includes('vercel.app')) {
    return NextResponse.next()
  }

  return NextResponse.redirect(siteConfig.baseUrl, 301)
}
