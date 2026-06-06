'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1f1f1f',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '64px 24px 32px' }}>
        {/* Top: Logo + 3 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
          className="md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '32px',
                letterSpacing: '0.1em',
                color: '#F5F5F0',
                marginBottom: '8px',
              }}
            >
              RED<span style={{ color: '#D42B2B' }}>_</span>GRAFIC
            </div>
            <div
              style={{
                height: '2px',
                backgroundColor: '#D42B2B',
                width: '80px',
                marginBottom: '16px',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '13px',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              Capaccio Paestum, Campania
              <br />
              Grafica Originale dal Sud Italia
            </p>
          </div>

          {/* Pagine */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '18px',
                letterSpacing: '0.1em',
                color: '#F5F5F0',
                marginBottom: '20px',
              }}
            >
              Pagine
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/galleria', label: 'Galleria' },
                { href: '/servizi', label: 'Servizi' },
                { href: '/info', label: 'Info' },
                { href: '/contatti', label: 'Contatti' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D42B2B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contatti */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '18px',
                letterSpacing: '0.1em',
                color: '#F5F5F0',
                marginBottom: '20px',
              }}
            >
              Contatti
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: 'https://wa.me/393427404602',
                  label: 'WhatsApp',
                  external: true,
                },
                {
                  href: 'mailto:arturoalessiofrunzo@gmail.com',
                  label: 'Email',
                  external: false,
                },
                {
                  href: 'tel:+393427404602',
                  label: '+39 342 740 4602',
                  external: false,
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D42B2B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legale */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '18px',
                letterSpacing: '0.1em',
                color: '#F5F5F0',
                marginBottom: '20px',
              }}
            >
              Legale
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D42B2B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1f1f1f',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            textAlign: 'center',
          }}
          className="md:flex-row md:justify-between"
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '12px',
              color: '#888888',
            }}
          >
            © {new Date().getFullYear()} Red_grafic · Arturo Alessio Frunzo · Capaccio Paestum (SA)
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link
              href="/privacy"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#888888', textDecoration: 'none' }}
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#888888', textDecoration: 'none' }}
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
