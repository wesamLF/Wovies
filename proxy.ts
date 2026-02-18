import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const RATE_LIMIT = 100
const WINDOW = 60 * 1000

const ipMap = new Map<string, { count: number; time: number }>()

const blockedBots = [
  'Amazonbot',
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'Bytespider'
]

export function proxy(req: NextRequest) {
  const ua = req.headers.get('user-agent') || ''

  // Block bots first
  if (blockedBots.some(bot => ua.includes(bot))) {
    return new NextResponse('Blocked', { status: 403 })
  }

  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  const now = Date.now()
  const record = ipMap.get(ip)

  if (!record || now - record.time > WINDOW) {
    ipMap.set(ip, { count: 1, time: now })
  } else {
    record.count++
    if (record.count > RATE_LIMIT) {
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/movie/:path*'],
}
