'use client'

import Link from 'next/link'
import SectionTag from '@/components/shared/SectionTag'

const services = [
  {
    num: '01',
    title: 'Loghi & Brand Identity',
    desc: 'Identità visive che raccontano chi sei. Marchi memorabili, costruiti per durare.',
  },
  {
    num: '02',
    title: 'Grafica Pubblicitaria',
    desc: 'Materiali visivi che catturano, comunicano e convertono.',
  },
  {
    num: '03',
    title: 'Illustrazioni',
    desc: 'Immagini originali a mano o digitali, con uno stile inconfondibile.',
  },
  {
    num: '04',
    title: 'Inviti & Locandine',
    desc: 'Dal matrimonio all\'evento aziendale: ogni occasione merita un design unico.',
  },
  {
    num: '05',
    title: 'Character Design',
    desc: 'Personaggi e mascotte che danno vita al tuo brand con carattere.',
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            backgroundColor: '#1f1f1f',
          }}
          className="md:grid-cols-3"
        >
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}

          {/* CTA card */}
          <div
            style={{
              backgroundColor: '#0A0A0A',
              padding: '40px 32px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '200px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '32px',
                letterSpacing: '0.05em',
                color: '#D42B2B',
                marginBottom: '16px',
                lineHeight: 0.95,
              }}
            >
              HAI UN
              <br />
              PROGETTO?
            </h3>
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
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#D42B2B',
                border: '1px solid #D42B2B',
                padding: '12px 24px',
                display: 'inline-block',
                alignSelf: 'flex-start',
              }}
            >
              Inizia ora →
            </Link>
          </div>
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

function ServiceCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div
      style={{
        backgroundColor: '#0A0A0A',
        padding: '40px 32px',
        position: 'relative',
        cursor: 'default',
        transition: 'background-color 0.2s',
        overflow: 'hidden',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.backgroundColor = '#111111'
        const bar = el.querySelector('.red-bar') as HTMLElement
        if (bar) bar.style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.backgroundColor = '#0A0A0A'
        const bar = el.querySelector('.red-bar') as HTMLElement
        if (bar) bar.style.opacity = '0'
      }}
    >
      {/* Ghost number — clipped inside card */}
      <div
        style={{
          position: 'absolute',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: '100px',
          color: '#1A1A1A',
          userSelect: 'none',
          lineHeight: 1,
          right: '16px',
          bottom: '8px',
        }}
      >
        {num}
      </div>

      {/* Red left bar on hover */}
      <div
        className="red-bar"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#D42B2B',
          opacity: 0,
          transition: 'opacity 0.2s',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '13px',
            letterSpacing: '3px',
            color: '#D42B2B',
            marginBottom: '12px',
          }}
        >
          {num}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '12px',
            lineHeight: 1.1,
            wordBreak: 'break-word',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '13px',
            color: '#888888',
            lineHeight: 1.6,
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
