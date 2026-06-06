import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contatti | Red_grafic',
  description: 'Contatta Red_grafic per un preventivo, una consulenza o per discutere del tuo progetto grafico.',
}

export default function ContattiPage() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 24px 120px' }}>
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
            — Contattami
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(64px, 10vw, 120px)',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              color: '#F5F5F0',
              marginBottom: '8px',
            }}
          >
            PARLIAMO.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '15px',
              color: '#888888',
            }}
          >
            Capaccio Paestum (SA), Campania
          </p>
        </div>

        {/* Split: Form + Contacts */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '80px',
          }}
          className="lg:grid-cols-3"
        >
          {/* Form — 2/3 */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contacts — 1/3 */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* WhatsApp */}
              <div
                style={{
                  backgroundColor: '#111111',
                  padding: '32px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    backgroundColor: '#25D366',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '8px',
                  }}
                >
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/393427404602"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '22px',
                    letterSpacing: '0.05em',
                    color: '#25D366',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Scrivimi su WhatsApp
                </a>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  Risposta entro 48 ore
                </p>
              </div>

              {/* Email */}
              <div style={{ padding: '0 0 24px', borderBottom: '1px solid #1f1f1f' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '8px',
                  }}
                >
                  Email
                </div>
                <a
                  href="mailto:arturoalessiofrunzo@gmail.com"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#F5F5F0',
                    textDecoration: 'none',
                  }}
                >
                  arturoalessiofrunzo@gmail.com
                </a>
              </div>

              {/* Telefono */}
              <div style={{ padding: '0 0 24px', borderBottom: '1px solid #1f1f1f' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '8px',
                  }}
                >
                  Telefono
                </div>
                <a
                  href="tel:+393427404602"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#F5F5F0',
                    textDecoration: 'none',
                  }}
                >
                  +39 342 740 4602
                </a>
              </div>

              {/* Location */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#888888',
                    marginBottom: '8px',
                  }}
                >
                  Studio
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#F5F5F0',
                    lineHeight: 1.6,
                  }}
                >
                  Capaccio Paestum (SA)
                  <br />
                  84047 · Campania, Italia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
