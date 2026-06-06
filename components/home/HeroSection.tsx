import Link from 'next/link'
import SectionTag from '@/components/shared/SectionTag'

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 72px)',
        backgroundColor: '#0A0A0A',
        display: 'grid',
        gridTemplateColumns: '1fr',
        alignItems: 'center',
        padding: '80px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '64px',
      }}
      className="lg:grid-cols-2"
    >
      {/* Left: Text */}
      <div style={{ position: 'relative' }}>
        <SectionTag text="Capaccio Paestum · Campania" />

        <h1
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(72px, 10vw, 120px)',
            lineHeight: 0.9,
            letterSpacing: '0.03em',
            color: '#F5F5F0',
            marginBottom: '32px',
          }}
        >
          CREAZIONI
          <br />
          <span style={{ color: '#D42B2B' }}>UNICHE.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.7,
            maxWidth: '480px',
            marginBottom: '48px',
          }}
        >
          Grafica pubblicitaria, illustrazioni, loghi e character design.
          Originalità come unico standard.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link
            href="/servizi"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#F5F5F0',
              backgroundColor: '#D42B2B',
              padding: '14px 32px',
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
          >
            Scopri i Servizi
          </Link>
          <Link
            href="/galleria"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#888888',
              border: '1px solid #2A2A2A',
              padding: '14px 32px',
              display: 'inline-block',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            Galleria →
          </Link>
        </div>
      </div>

      {/* Right: Visual card */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#1A1A1A',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Ghost letters */}
        <div
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(120px, 18vw, 220px)',
            color: '#1f1f1f',
            userSelect: 'none',
            lineHeight: 1,
            letterSpacing: '0.05em',
            bottom: '-20px',
            right: '-10px',
          }}
        >
          RG
        </div>

        {/* Portfolio preview cards */}
        <div style={{ position: 'relative', zIndex: 2, padding: '40px', width: '100%' }}>
          {[
            { top: '0', left: '0', label: 'Brand Identity', w: '70%' },
            { top: '80px', left: '30%', label: 'Illustrazione', w: '65%' },
            { top: '160px', left: '10%', label: 'Character Design', w: '60%' },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                backgroundColor: '#111111',
                border: '1px solid #2A2A2A',
                padding: '20px 24px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#2A2A2A',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '16px',
                    letterSpacing: '0.1em',
                    color: '#F5F5F0',
                  }}
                >
                  {card.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    color: '#888888',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Red_grafic
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: '#D42B2B',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-width red line */}
      <div
        style={{
          gridColumn: '1 / -1',
          height: '3px',
          backgroundColor: '#D42B2B',
          width: '100%',
        }}
      />
    </section>
  )
}
