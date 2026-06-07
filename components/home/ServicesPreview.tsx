'use client'

import Link from 'next/link'
import SectionTag from '@/components/shared/SectionTag'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const services = [
  {
    num: '01',
    title: 'Loghi & Brand Identity',
    desc: 'Identità visive che raccontano chi sei. Marchi memorabili, costruiti per durare.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Grafica Pubblicitaria',
    desc: 'Materiali visivi che catturano, comunicano e convertono.',
    icon: '◉',
  },
  {
    num: '03',
    title: 'Illustrazioni',
    desc: 'Immagini originali a mano o digitali, con uno stile inconfondibile.',
    icon: '◐',
  },
  {
    num: '04',
    title: 'Inviti & Locandine',
    desc: 'Dal matrimonio all\'evento aziendale: ogni occasione merita un design unico.',
    icon: '◆',
  },
  {
    num: '05',
    title: 'Character Design',
    desc: 'Personaggi e mascotte che danno vita al tuo brand con carattere.',
    icon: '◎',
  },
]

export default function ServicesPreview() {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '120px 24px',
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <SectionTag text="— Cosa facciamo" />
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '0.05em',
              color: '#F5F5F0',
            }}
          >
            SERVIZI /
            <br />
            <span style={{ color: '#D42B2B' }}>CREATIVI</span>
          </h2>
        </div>

        <div
          style={{ display: 'grid', gap: '12px' }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}

          {/* CTA card */}
          <Card className="relative overflow-hidden ring-0 border border-[#D42B2B]/40 bg-[#0A0A0A] group hover:bg-[#D42B2B]/5 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D42B2B]/10 to-transparent pointer-events-none" />
            <CardHeader className="pt-8 px-8 pb-2">
              <div
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: 'clamp(28px, 3vw, 36px)',
                  letterSpacing: '0.05em',
                  color: '#D42B2B',
                  lineHeight: 0.95,
                }}
              >
                HAI UN
                <br />
                PROGETTO?
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}
              >
                Parliamone. Ogni idea merita di diventare realtà.
              </p>
              <Link
                href="/prenotazione"
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: '#F5F5F0',
                  backgroundColor: '#D42B2B',
                  padding: '12px 24px',
                  display: 'inline-block',
                }}
              >
                Inizia ora →
              </Link>
            </CardContent>
          </Card>
        </div>

        <div style={{ marginTop: '32px', textAlign: 'right' }}>
          <Link
            href="/servizi"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Tutti i servizi →
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  num,
  title,
  desc,
  icon,
}: {
  num: string
  title: string
  desc: string
  icon: string
}) {
  return (
    <Card className="relative overflow-hidden ring-0 border border-[#1f1f1f] bg-[#111111] group hover:border-[#D42B2B]/50 hover:bg-[#141414] transition-all duration-300">
      {/* Red top accent line — grows on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D42B2B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

      {/* Ghost number */}
      <div
        className="absolute bottom-3 right-4 select-none pointer-events-none font-bebas leading-none text-[#1A1A1A] group-hover:text-[#1f1f1f] transition-colors duration-300"
        style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}
      >
        {num}
      </div>

      <CardHeader className="pt-8 px-8 pb-3">
        {/* Number + icon row */}
        <div className="flex items-center justify-between mb-4">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '3px',
              color: '#D42B2B',
            }}
          >
            {num}
          </span>
          <span
            className="text-[#2A2A2A] group-hover:text-[#D42B2B] transition-colors duration-300 text-lg"
          >
            {icon}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(22px, 2.5vw, 28px)',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        {/* Divider */}
        <div className="w-8 h-[1px] bg-[#D42B2B] mb-4 origin-left scale-x-100 group-hover:w-full transition-all duration-500" />

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '13px',
            color: '#888888',
            lineHeight: 1.7,
          }}
        >
          {desc}
        </p>

        {/* Arrow — appears on hover */}
        <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform">
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#D42B2B',
            }}
          >
            Scopri
          </span>
          <span style={{ color: '#D42B2B' }}>→</span>
        </div>
      </CardContent>
    </Card>
  )
}
