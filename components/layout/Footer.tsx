import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/info', label: 'Info' },
  { href: '/contatti', label: 'Contatti' },
]

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#888888',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #1f1f1f' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px 0', borderBottom: '1px solid #1f1f1f' }}>

        {/* ── MOBILE layout ── */}
        <div className="lg:hidden pb-8 flex flex-col gap-8">

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <Image src="/logo.png" alt="Red_grafic" width={1328} height={225} style={{ height: '28px', width: 'auto' }} />
          </Link>

          {/* Nav — 2-column grid, no wrapping */}
          <nav className="grid grid-cols-2 gap-x-6 gap-y-4">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Social row */}
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/red_grafic" target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a href="https://wa.me/393427404602" target="_blank" rel="noopener noreferrer" style={linkStyle}>WhatsApp</a>
            <a href="mailto:arturoalessiofrunzo@gmail.com" style={linkStyle}>Email</a>
          </div>

          {/* CTA — full width on mobile */}
          <Link
            href="/prenotazione"
            style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', border: '1px solid #D42B2B', padding: '14px 24px', textDecoration: 'none', textAlign: 'center', display: 'block' }}
          >
            Prenota
          </Link>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-8 pb-8">
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'inline-flex' }}>
            <Image src="/logo.png" alt="Red_grafic" width={1328} height={225} style={{ height: '28px', width: 'auto' }} />
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={linkStyle}
                className="hover:!text-[#D42B2B] transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/red_grafic" target="_blank" rel="noopener noreferrer"
              style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '5px' }}
              className="hover:!text-[#E1306C] transition-colors duration-200">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a href="https://wa.me/393427404602" target="_blank" rel="noopener noreferrer" style={linkStyle}
              className="hover:!text-[#25D366] transition-colors duration-200">WhatsApp</a>
            <a href="mailto:arturoalessiofrunzo@gmail.com" style={linkStyle}
              className="hover:!text-[#D42B2B] transition-colors duration-200">Email</a>
            <Link href="/prenotazione"
              className="hover:bg-[#D42B2B] hover:!text-[#F5F5F0] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', border: '1px solid #D42B2B', padding: '9px 18px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Prenota
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px 24px' }}>
        <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#444444', margin: 0 }}>
            © {new Date().getFullYear()} Red_grafic · Arturo · Capaccio Paestum (SA)
            <span style={{ marginLeft: '12px', color: '#333333' }}>·</span>
            <span style={{ marginLeft: '12px' }}>Created by <span style={{ color: '#888888' }}>RBC Design</span> · All rights reserved</span>
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[{ href: '/privacy', label: 'Privacy' }, { href: '/cookie-policy', label: 'Cookie Policy' }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:!text-[#888888] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#444444', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
