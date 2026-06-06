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

        {/* Contacts + Instagram */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexShrink: 0, flexWrap: 'wrap' }}>
          <a
            href="https://instagram.com/red_grafic"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#888888', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#E1306C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>
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
