import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contatti | Red_grafic',
  description: 'Contatta Red_grafic per un preventivo, una consulenza o per discutere del tuo progetto grafico.',
}

export default function ContattiPage() {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
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

        {/* WhatsApp primary CTA */}
        <a
          href="https://wa.me/393427404602"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#25D366',
            padding: '24px 32px',
            textDecoration: 'none',
            marginBottom: '64px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <div>
            <div style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '22px', letterSpacing: '0.05em', color: '#fff', lineHeight: 1 }}>
              Scrivimi su WhatsApp — risposta entro 48h
            </div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>
              Il modo più rapido per iniziare
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-bebas)', fontSize: '28px', color: '#fff' }}>→</div>
        </a>

        {/* Split: Form + Contacts */}
        <div
          style={{
            display: 'grid',
            gap: '80px',
          }}
          className="grid-cols-1 lg:grid-cols-3"
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
