const stats = [
  { number: '500', suffix: '+', label: 'Progetti', sub: 'dal 2016' },
  { number: '8',   suffix: '+', label: 'Anni',     sub: 'di esperienza' },
  { number: '100', suffix: '%', label: 'Originale', sub: 'nessun template' },
  { number: '48',  suffix: 'h', label: 'Risposta',  sub: 'garantita' },
]

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: '#0A0A0A', borderBottom: '1px solid #1f1f1f' }}>
      <div
        style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
        className="md:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '40px 32px',
              borderRight: i < stats.length - 1 ? '1px solid #1f1f1f' : 'none',
              borderBottom: '1px solid #1f1f1f',
            }}
            className="md:border-b-0"
          >
            <div style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '56px', lineHeight: 1, letterSpacing: '0.03em', color: '#F5F5F0' }}>
              {s.number}<span style={{ color: '#D42B2B' }}>{s.suffix}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#888888', marginTop: '6px' }}>
              {s.label}
            </div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#444444', marginTop: '2px', letterSpacing: '0.5px' }}>
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
