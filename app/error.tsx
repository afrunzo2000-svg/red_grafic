'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
        <h1
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '16px',
            lineHeight: 0.95,
          }}
        >
          ERRORE
          <br />
          <span style={{ color: '#D42B2B' }}>IMPREVISTO.</span>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '14px',
            color: '#888888',
            marginBottom: '40px',
          }}
        >
          Si è verificato un errore. Riprova o contattami direttamente.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#F5F5F0',
              backgroundColor: '#D42B2B',
              border: 'none',
              padding: '14px 32px',
              cursor: 'pointer',
            }}
          >
            Riprova
          </button>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#888888',
              border: '1px solid #2A2A2A',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
