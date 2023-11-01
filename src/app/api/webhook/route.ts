import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

import { env } from '@/env.mjs'

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    if (secret !== env.STORYBLOK_WEBHOOK_SECRET) {
      return Response.json(
        { revalidated: false, message: 'Invalid secret' },
        { status: 401 }
      )
    }
    const body = (await request.json()) as Record<string, any>
    if ('full_slug' in body) {
      const pathToRevalidate = body.full_slug
      revalidatePath(pathToRevalidate)

      return Response.json(
        { revalidated: true, date: new Date().toISOString() },
        { status: 200 }
      )
    }
    return Response.json(
      { revalidated: false, message: 'No slug provided' },
      { status: 200 }
    )
  } catch (ex) {
    console.error(ex)
    return Response.json(
      { revalidated: false, message: JSON.stringify(ex) },
      { status: 500 }
    )
  }
}
