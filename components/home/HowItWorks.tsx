import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Contattami',
    desc: 'Scrivi su WhatsApp o compila il form. Nessun burocrazia — basta un messaggio per iniziare.',
    action: { label: 'Scrivimi ora', href: 'https://wa.me/393427404602', external: true },
  },
  {
    num: '02',
    title: 'Briefing',
    desc: 'Discutiamo insieme il progetto: stile, obiettivi, tempi e budget. Nessun impegno fino all\'approvazione.',
    action: null,
  },
  {
    num: '03',
    title: 'Consegna',
    desc: 'Ricevi il tuo progetto finito nei formati che ti servono. Revisioni incluse fino alla soddisfazione.',
    action: { label: 'Prenota ora', href: '/prenotazione', external: false },
  },
]

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: 'transparent', borderBottom: '1px solid #1f1f1f', padding: '100px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#D42B2B', display: 'block', marginBottom: '12px' }}>
              — Come funziona
            </span>
            <h2 style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 0.95, letterSpacing: '0.05em', color: '#F5F5F0' }}>
              SEMPLICE /
              <br />
              <span style={{ color: '#D42B2B' }}>DIRETTO.</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#888888', lineHeight: 1.7, maxWidth: '320px' }}>
            Tre passi per trasformare un&apos;idea in un progetto grafico finito.
          </p>
        </div>
      </div>

      {/* Steps — full-width gap-as-divider grid */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gap: '12px',
            backgroundColor: 'transparent',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#111111',
                border: '1px solid #1f1f1f',
              }}
            >
              {/* Ghost number */}
              <div style={{
                position: 'absolute', right: '20px', bottom: '10px', zIndex: 0,
                fontFamily: 'var(--font-bebas)', fontSize: 'clamp(48px, 5vw, 72px)',
                color: '#111111', userSelect: 'none', lineHeight: 1, pointerEvents: 'none',
              }}>
                {step.num}
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#D42B2B', marginBottom: '20px' }}>
                  {step.num}
                </div>

                {/* Connector arrow — desktop only */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', right: '-20px', top: '50%',
                    transform: 'translateY(-50%)',
                    fontFamily: 'var(--font-bebas)', fontSize: '24px',
                    color: '#2A2A2A', zIndex: 2,
                  }} className="hidden md:block">
                    →
                  </div>
                )}

                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '32px', letterSpacing: '0.05em', color: '#F5F5F0', marginBottom: '12px', lineHeight: 0.95 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#888888', lineHeight: 1.7, marginBottom: step.action ? '24px' : 0 }}>
                  {step.desc}
                </p>
                {step.action && (
                  step.action.external ? (
                    <a
                      href={step.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', textDecoration: 'none' }}
                    >
                      {step.action.label} →
                    </a>
                  ) : (
                    <Link
                      href={step.action.href}
                      style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', textDecoration: 'none' }}
                    >
                      {step.action.label} →
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
