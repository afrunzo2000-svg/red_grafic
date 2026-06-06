import Link from 'next/link'

export default function AboutTeaser() {
  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
        className="md:grid-cols-2"
      >
        {/* Visual */}
        <div
          style={{
            backgroundColor: '#1A1A1A',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '200px',
              color: '#111111',
              userSelect: 'none',
              lineHeight: 1,
              letterSpacing: '0.05em',
            }}
          >
            AAF
          </div>
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#2A2A2A',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '48px',
                  color: '#D42B2B',
                  letterSpacing: '0.05em',
                }}
              >
                AF
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          style={{
            padding: '80px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D42B2B',
              marginBottom: '16px',
            }}
          >
            — Il creativo
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 0.95,
              letterSpacing: '0.05em',
              color: '#F5F5F0',
              marginBottom: '24px',
            }}
          >
            ARTURO /
            <br />
            ALESSIO /
            <br />
            FRUNZO
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '15px',
              color: '#888888',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            Grafico e illustratore da Capaccio Paestum. Oltre 8 anni di esperienza
            nella creazione di identità visive, illustrazioni e materiali grafici
            con uno stile unico e riconoscibile.
          </p>
          <Link
            href="/info"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#D42B2B',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Scopri di più →
          </Link>
        </div>
      </div>
    </section>
  )
}
