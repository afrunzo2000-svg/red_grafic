import type { Metadata } from 'next'
import BookingWizard from '@/components/forms/BookingWizard'

export const metadata: Metadata = {
  title: 'Prenota | Red_grafic',
  description: 'Inizia il tuo progetto grafico con Red_grafic. Compila il modulo in pochi passi e ricevi un preventivo personalizzato.',
}

export default function PrenotazionePage() {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 120px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px', borderBottom: '1px solid #1f1f1f', paddingBottom: '48px' }}>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D42B2B',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            — Online booking
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              color: '#F5F5F0',
              marginBottom: '16px',
            }}
          >
            INIZIA IL TUO
            <br />
            <span style={{ color: '#D42B2B' }}>PROGETTO.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '15px',
              color: '#888888',
              lineHeight: 1.6,
              maxWidth: '500px',
            }}
          >
            Compila il modulo in 3 semplici passi. Riceverai una risposta entro 48 ore.
          </p>
        </div>

        <BookingWizard />
      </div>
    </div>
  )
}
