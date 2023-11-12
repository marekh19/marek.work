import { revalidateTag } from 'next/cache'
import { NextResponse, type NextRequest } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

import { env } from '@/env.mjs'

export async function POST(req: NextRequest) {
  try {
    console.log('REVALIDATE: triggered')
    const { isValidSignature, body } = await parseBody<{
      _type: string
      slug: string
    }>(req, env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      })
    }
    console.log('REVALIDATE: valid signature')
    console.log('REVALIDATE:', body)

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(JSON.stringify({ message, body }), { status: 400 })
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    revalidateTag(body._type)
    if (body.slug) revalidateTag(body.slug)
    console.log('REVALIDATE: should be revalidated')

    return NextResponse.json({ body })
  } catch (err) {
    console.error(err)
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 })
    }
    return new Response('Unknown error', { status: 500 })
  }
}
