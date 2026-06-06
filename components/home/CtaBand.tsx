import Link from 'next/link'

export default function CtaBand() {
  return (
    <section style={{ backgroundColor: '#D42B2B', padding: '80px 24px' }}>
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 0.95,
            letterSpacing: '0.05em',
            color: '#F5F5F0',
          }}
        >
          INIZIA IL TUO /
          <br />
          PROGETTO OGGI.
        </h2>
        <Link
          href="/prenotazione"
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#D42B2B',
            backgroundColor: '#F5F5F0',
            padding: '16px 40px',
            display: 'inline-block',
            flexShrink: 0,
            transition: 'background-color 0.2s',
          }}
        >
          Prenota una consulenza
        </Link>
      </div>
    </section>
  )
}
