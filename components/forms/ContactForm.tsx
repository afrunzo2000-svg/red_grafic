'use client'

import { useState } from 'react'
import Link from 'next/link'

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '14px',
  color: '#F5F5F0',
  backgroundColor: '#1A1A1A',
  border: '1px solid #2A2A2A',
  padding: '14px 16px',
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#888888',
  display: 'block',
  marginBottom: '8px',
}

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoProgetto: '',
    messaggio: '',
    privacy: false,
    honeypot: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return
    if (!form.privacy) return

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ nome: '', email: '', telefono: '', tipoProgetto: '', messaggio: '', privacy: false, honeypot: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '48px',
          backgroundColor: '#1A1A1A',
          border: '1px solid #D42B2B',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '32px',
            color: '#D42B2B',
            marginBottom: '12px',
            letterSpacing: '0.05em',
          }}
        >
          MESSAGGIO INVIATO!
        </div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#888888' }}>
          Ti risponderò entro 48 ore. Grazie per avermi contattato!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={form.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}
          className="sm:grid-cols-2"
        >
          <div>
            <label style={labelStyle} htmlFor="nome">Nome e Cognome *</label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={form.nome}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Arturo Frunzo"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="email@esempio.it"
            />
          </div>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}
          className="sm:grid-cols-2"
        >
          <div>
            <label style={labelStyle} htmlFor="telefono">Telefono</label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              style={inputStyle}
              placeholder="+39 000 000 0000"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="tipoProgetto">Tipo di progetto *</label>
            <select
              id="tipoProgetto"
              name="tipoProgetto"
              required
              value={form.tipoProgetto}
              onChange={handleChange}
              style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
            >
              <option value="">Seleziona...</option>
              <option value="Logo">Logo</option>
              <option value="Grafica">Grafica</option>
              <option value="Illustrazione">Illustrazione</option>
              <option value="Character">Character</option>
              <option value="Locandina">Locandina</option>
              <option value="Altro">Altro</option>
            </select>
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor="messaggio">Messaggio *</label>
          <textarea
            id="messaggio"
            name="messaggio"
            required
            value={form.messaggio}
            onChange={handleChange}
            rows={6}
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-dm-sans)' }}
            placeholder="Raccontami del tuo progetto..."
          />
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            name="privacy"
            required
            checked={form.privacy}
            onChange={handleChange}
            style={{ marginTop: '3px', accentColor: '#D42B2B', flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              color: '#888888',
              lineHeight: 1.6,
            }}
          >
            Dichiaro di aver letto e compreso la{' '}
            <Link href="/privacy" style={{ color: '#D42B2B' }}>
              Privacy Policy
            </Link>{' '}
            e prendo atto che i miei dati personali saranno trattati dal Titolare
            per rispondere alla presente richiesta, ai sensi dell&apos;art. 6, c. 1,
            lett. b) del GDPR (misure pre-contrattuali). *
          </span>
        </label>

        {status === 'error' && (
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#D42B2B' }}>
            Si è verificato un errore. Riprova o scrivimi su WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#F5F5F0',
            backgroundColor: status === 'loading' ? '#888888' : '#D42B2B',
            border: 'none',
            padding: '16px 40px',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            alignSelf: 'flex-start',
            transition: 'background-color 0.2s',
          }}
        >
          {status === 'loading' ? 'Invio...' : 'Invia messaggio →'}
        </button>
      </div>
    </form>
  )
}
