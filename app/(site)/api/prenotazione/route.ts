import { NextRequest, NextResponse } from 'next/server'
import { sendBookingEmail } from '@/lib/mail'

const ipCounts = new Map<string, { count: number; reset: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 60 * 60 * 1000

function getRateLimitKey(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0] ?? req.headers.get('x-real-ip') ?? 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = ipCounts.get(ip)
  if (!entry || entry.reset < now) {
    ipCounts.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(req: NextRequest) {
  const ip = getRateLimitKey(req)
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Troppe richieste. Riprova tra un ora.' }, { status: 429 })
  }

  let body: Record<string, string>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 })
  }

  const { tipoProgetto, descrizione, budget, dataConsegna, riferimenti, nome, email, telefono, honeypot } = body

  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  if (!tipoProgetto?.trim() || !descrizione?.trim() || !budget?.trim() || !nome?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Email non valida.' }, { status: 400 })
  }

  try {
    await sendBookingEmail({ tipoProgetto, descrizione, budget, dataConsegna, riferimenti, nome, email, telefono })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Booking mail error:', err)
    return NextResponse.json({ error: 'Errore invio email.' }, { status: 500 })
  }
}
