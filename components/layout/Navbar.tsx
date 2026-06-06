'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/info', label: 'Info' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'background-color 0.3s, border-color 0.3s',
        backgroundColor: scrolled ? '#0A0A0A' : 'transparent',
        borderBottom: scrolled ? '1px solid #1f1f1f' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '28px',
              letterSpacing: '0.1em',
              color: '#F5F5F0',
              lineHeight: 1,
            }}
          >
            RED
            <span style={{ color: '#D42B2B' }}>_</span>
            GRAFIC
          </span>
          <div
            style={{
              height: '2px',
              backgroundColor: '#D42B2B',
              width: '100%',
              marginTop: '2px',
            }}
          />
        </Link>

        {/* Desktop links */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === l.href ? '#D42B2B' : '#F5F5F0',
                transition: 'color 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/prenotazione"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#D42B2B',
              border: '1px solid #D42B2B',
              padding: '8px 20px',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D42B2B'
              e.currentTarget.style.color = '#F5F5F0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#D42B2B'
            }}
          >
            Prenota ora
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: '#F5F5F0', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: '#0A0A0A',
            borderTop: '1px solid #1f1f1f',
            padding: '24px',
          }}
          className="flex md:hidden flex-col gap-6"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: pathname === l.href ? '#D42B2B' : '#F5F5F0',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/prenotazione"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#D42B2B',
              border: '1px solid #D42B2B',
              padding: '12px 24px',
              textAlign: 'center',
            }}
          >
            Prenota ora
          </Link>
        </div>
      )}
    </header>
  )
}
