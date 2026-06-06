'use client'

import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/info', label: 'Info' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #1f1f1f' }}>
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '28px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          borderBottom: '1px solid #1f1f1f',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-bebas), sans-serif', fontSize: '22px', letterSpacing: '0.1em', color: '#F5F5F0' }}>
            RED<span style={{ color: '#D42B2B' }}>_</span>GRAFIC
          </span>
        </Link>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888888', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D42B2B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Contacts */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexShrink: 0 }}>
          <a
            href="https://wa.me/393427404602"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888888', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#25D366')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
          >
            WhatsApp
          </a>
          <a
            href="mailto:arturoalessiofrunzo@gmail.com"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888888', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D42B2B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
          >
            Email
          </a>
          <Link
            href="/prenotazione"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', border: '1px solid #D42B2B', padding: '8px 16px', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#D42B2B'; e.currentTarget.style.color = '#F5F5F0' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#D42B2B' }}
          >
            Prenota
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#444444', margin: 0 }}>
          © {new Date().getFullYear()} Red_grafic · Arturo · Capaccio Paestum (SA)
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[{ href: '/privacy', label: 'Privacy' }, { href: '/cookie-policy', label: 'Cookie Policy' }].map((l) => (
            <Link key={l.href} href={l.href} style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#444444', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#888888')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
