const stats = [
  { number: '500', suffix: '+', label: 'Progetti' },
  { number: '8', suffix: '+', label: 'Anni' },
  { number: '100', suffix: '%', label: 'Originale' },
  { number: '48', suffix: 'h', label: 'Risposta' },
]

export default function StatsBar() {
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
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
        className="md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '48px 32px',
              borderRight: i < stats.length - 1 ? '1px solid #1f1f1f' : 'none',
              borderBottom: '1px solid #1f1f1f',
            }}
            className="md:border-b-0"
          >
            <div
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '56px',
                lineHeight: 1,
                letterSpacing: '0.03em',
                color: '#F5F5F0',
              }}
            >
              {s.number}
              <span style={{ color: '#D42B2B' }}>{s.suffix}</span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#888888',
                marginTop: '8px',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
