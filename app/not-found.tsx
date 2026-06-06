import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#0A0A0A',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(80px, 20vw, 200px)',
            color: '#1A1A1A',
            lineHeight: 0.9,
            letterSpacing: '0.05em',
            userSelect: 'none',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '16px',
            lineHeight: 0.95,
          }}
        >
          PAGINA NON
          <br />
          <span style={{ color: '#D42B2B' }}>TROVATA.</span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '14px',
            color: '#888888',
            marginBottom: '40px',
          }}
        >
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#F5F5F0',
            backgroundColor: '#D42B2B',
            padding: '14px 32px',
            display: 'inline-block',
          }}
        >
          Torna alla home →
        </Link>
      </div>
    </div>
  )
}
