import Link from 'next/link'
import Image from 'next/image'
import SectionTag from '@/components/shared/SectionTag'

export default function HeroSection() {
  return (
    // section ist immer full-width → kein Containerrand sichtbar
    <section style={{ backgroundColor: 'transparent' }}>
      <div
        style={{
          minHeight: 'calc(100vh - 72px)',
          display: 'grid',
          alignItems: 'center',
          padding: '80px 24px',
          maxWidth: '1400px',
          margin: '0 auto',
          gap: '64px',
        }}
        className="grid-cols-1 lg:grid-cols-2"
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

        {/* Right: Visual composition — desktop only */}
        <div
          className="hidden lg:grid"
          style={{
            position: 'relative',
            minHeight: '520px',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '4px',
          }}
        >
          {/* Main large image */}
          <div style={{ position: 'relative', gridColumn: '1', gridRow: '1 / 3', overflow: 'hidden', backgroundColor: '#1A1A1A' }}>
            <Image
              src="https://picsum.photos/seed/rg1/600/800"
              alt="Red_grafic portfolio"
              fill
              priority
              sizes="30vw"
              style={{ objectFit: 'cover', filter: 'grayscale(20%) brightness(0.7)' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(212,43,43,0.15) 0%, transparent 60%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '16px', left: '16px',
              fontFamily: 'var(--font-bebas)', fontSize: '20px',
              letterSpacing: '0.1em', color: '#F5F5F0',
              backgroundColor: 'rgba(10,10,10,0.7)', padding: '6px 12px',
            }}>
              Brand Identity
            </div>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', backgroundColor: '#D42B2B' }} />
          </div>

          {/* Top-right image */}
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#1A1A1A' }}>
            <Image
              src="https://picsum.photos/seed/rg2/400/400"
              alt="Illustrazione"
              fill
              sizes="15vw"
              style={{ objectFit: 'cover', filter: 'grayscale(30%) brightness(0.65)' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '12px', left: '12px',
              fontFamily: 'var(--font-bebas)', fontSize: '14px',
              letterSpacing: '0.1em', color: '#F5F5F0',
            }}>
              Illustrazione
            </div>
          </div>

          {/* Bottom-right image */}
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#1A1A1A' }}>
            <Image
              src="https://picsum.photos/seed/rg3/400/400"
              alt="Character Design"
              fill
              sizes="15vw"
              style={{ objectFit: 'cover', filter: 'grayscale(30%) brightness(0.65)' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '12px', left: '12px',
              fontFamily: 'var(--font-bebas)', fontSize: '14px',
              letterSpacing: '0.1em', color: '#F5F5F0',
            }}>
              Character Design
            </div>
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '40px', height: '40px', backgroundColor: '#D42B2B',
            }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', paddingBottom: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#444444', display: 'block', marginBottom: '10px' }}>
              Scorri
            </span>
            <div className="scroll-line" />
          </div>
        </div>
      </div>

      {/* Red bottom line — full width */}
      <div style={{ height: '3px', backgroundColor: '#D42B2B', width: '100%' }} />
    </section>
  )
}
