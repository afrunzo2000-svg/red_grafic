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

const PROJECT_TYPES = [
  { id: 'logo', label: 'Logo & Brand Identity', num: '01' },
  { id: 'grafica', label: 'Grafica Pubblicitaria', num: '02' },
  { id: 'illustrazione', label: 'Illustrazione', num: '03' },
  { id: 'inviti', label: 'Inviti / Locandine', num: '04' },
  { id: 'character', label: 'Character Design', num: '05' },
  { id: 'altro', label: 'Altro', num: '06' },
]

interface FormData {
  tipoProgetto: string
  descrizione: string
  budget: string
  dataConsegna: string
  riferimenti: string
  nome: string
  email: string
  telefono: string
  privacy: boolean
  honeypot: string
}

const initial: FormData = {
  tipoProgetto: '',
  descrizione: '',
  budget: '',
  dataConsegna: '',
  riferimenti: '',
  nome: '',
  email: '',
  telefono: '',
  privacy: false,
  honeypot: '',
}

export default function BookingWizard() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initial)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm((p) => ({ ...p, [field]: value }))

  const handleSubmit = async () => {
    if (form.honeypot) return
    setStatus('loading')
    try {
      const res = await fetch('/api/prenotazione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          padding: '64px',
          textAlign: 'center',
          backgroundColor: '#1A1A1A',
          border: '1px solid #D42B2B',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '48px',
            color: '#D42B2B',
            letterSpacing: '0.05em',
            marginBottom: '16px',
            lineHeight: 0.95,
          }}
        >
          RICHIESTA
          <br />
          INVIATA!
        </div>
        <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '14px', color: '#888888', lineHeight: 1.6 }}>
          Ho ricevuto la tua richiesta per{' '}
          <strong style={{ color: '#F5F5F0' }}>{form.tipoProgetto}</strong>.
          <br />
          Ti contatterò entro 48 ore all&apos;indirizzo{' '}
          <strong style={{ color: '#F5F5F0' }}>{form.email}</strong>.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '48px' }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '16px',
                letterSpacing: '0.05em',
                color: step >= s ? '#F5F5F0' : '#888888',
                backgroundColor: step === s ? '#D42B2B' : step > s ? '#2A2A2A' : 'transparent',
                border: step < s ? '1px solid #2A2A2A' : 'none',
              }}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  backgroundColor: step > s ? '#D42B2B' : '#2A2A2A',
                }}
              />
            )}
          </div>
        ))}
        <div style={{ marginLeft: '8px', alignSelf: 'center' }}>
          <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#888888' }}>
            Step {step} di 3
          </span>
        </div>
      </div>

      {/* Step 1: Tipo di progetto */}
      {step === 1 && (
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '36px',
              letterSpacing: '0.05em',
              color: '#F5F5F0',
              marginBottom: '32px',
              lineHeight: 0.95,
            }}
          >
            TIPO DI
            <br />
            <span style={{ color: '#D42B2B' }}>PROGETTO</span>
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px',
            }}
            className="sm:grid-cols-3"
          >
            {PROJECT_TYPES.map((pt) => (
              <button
                key={pt.id}
                onClick={() => { set('tipoProgetto', pt.label); setStep(2) }}
                style={{
                  backgroundColor: form.tipoProgetto === pt.label ? '#D42B2B' : '#1A1A1A',
                  border: '1px solid',
                  borderColor: form.tipoProgetto === pt.label ? '#D42B2B' : '#2A2A2A',
                  padding: '36px 28px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '80px',
                    color: form.tipoProgetto === pt.label ? 'rgba(255,255,255,0.1)' : '#111111',
                    bottom: '4px',
                    right: '12px',
                    lineHeight: 1,
                  }}
                >
                  {pt.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '22px',
                    letterSpacing: '0.05em',
                    color: '#F5F5F0',
                    lineHeight: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {pt.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Dettagli */}
      {step === 2 && (
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '36px',
              letterSpacing: '0.05em',
              color: '#F5F5F0',
              marginBottom: '32px',
              lineHeight: 0.95,
            }}
          >
            DETTAGLI DEL
            <br />
            <span style={{ color: '#D42B2B' }}>PROGETTO</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={labelStyle}>Progetto selezionato</label>
              <div
                style={{
                  backgroundColor: '#D42B2B',
                  padding: '10px 16px',
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '16px',
                  letterSpacing: '0.05em',
                  color: '#F5F5F0',
                  display: 'inline-block',
                }}
              >
                {form.tipoProgetto}
              </div>
            </div>

            <div>
              <label style={labelStyle} htmlFor="descrizione">Descrizione del progetto *</label>
              <textarea
                id="descrizione"
                required
                value={form.descrizione}
                onChange={(e) => set('descrizione', e.target.value)}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Descrivi il tuo progetto, i tuoi obiettivi, il tuo pubblico target..."
              />
            </div>

            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}
              className="sm:grid-cols-2"
            >
              <div>
                <label style={labelStyle} htmlFor="budget">Budget indicativo *</label>
                <select
                  id="budget"
                  required
                  value={form.budget}
                  onChange={(e) => set('budget', e.target.value)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="">Seleziona...</option>
                  <option value="Meno di €100">Meno di €100</option>
                  <option value="€100–300">€100–300</option>
                  <option value="€300–500">€300–500</option>
                  <option value="Oltre €500">Oltre €500</option>
                  <option value="Da definire">Da definire</option>
                </select>
              </div>
              <div>
                <label style={labelStyle} htmlFor="dataConsegna">Data di consegna desiderata</label>
                <input
                  id="dataConsegna"
                  type="date"
                  value={form.dataConsegna}
                  onChange={(e) => set('dataConsegna', e.target.value)}
                  style={{ ...inputStyle, colorScheme: 'dark' }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle} htmlFor="riferimenti">Riferimenti o ispirazione</label>
              <textarea
                id="riferimenti"
                value={form.riferimenti}
                onChange={(e) => set('riferimenti', e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder="Link, stili di riferimento, esempi che ti piacciono..."
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  border: '1px solid #2A2A2A',
                  backgroundColor: 'transparent',
                  color: '#888888',
                }}
              >
                ← Indietro
              </button>
              <button
                onClick={() => {
                  if (!form.descrizione || !form.budget) return
                  setStep(3)
                }}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  cursor: 'pointer',
                  border: 'none',
                  backgroundColor: '#D42B2B',
                  color: '#F5F5F0',
                }}
              >
                Avanti →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Contatto & Conferma */}
      {step === 3 && (
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '36px',
              letterSpacing: '0.05em',
              color: '#F5F5F0',
              marginBottom: '32px',
              lineHeight: 0.95,
            }}
          >
            CONTATTO &
            <br />
            <span style={{ color: '#D42B2B' }}>CONFERMA</span>
          </h2>

          {/* Summary */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              padding: '20px',
              marginBottom: '28px',
            }}
          >
            <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '14px', color: '#888888', letterSpacing: '0.1em', marginBottom: '8px' }}>
              RIEPILOGO
            </div>
            <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#F5F5F0', lineHeight: 1.6 }}>
              <strong style={{ color: '#D42B2B' }}>{form.tipoProgetto}</strong>
              {form.budget && <> · Budget: {form.budget}</>}
              {form.dataConsegna && <> · Consegna: {form.dataConsegna}</>}
            </div>
          </div>

          <input type="text" name="honeypot" value={form.honeypot} onChange={(e) => set('honeypot', e.target.value)} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}
              className="sm:grid-cols-2"
            >
              <div>
                <label style={labelStyle} htmlFor="nome">Nome e Cognome *</label>
                <input id="nome" type="text" required value={form.nome} onChange={(e) => set('nome', e.target.value)} style={inputStyle} placeholder="Arturo Frunzo" />
              </div>
              <div>
                <label style={labelStyle} htmlFor="email">Email *</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => set('email', e.target.value)} style={inputStyle} placeholder="email@esempio.it" />
              </div>
            </div>
            <div>
              <label style={labelStyle} htmlFor="telefono">Telefono</label>
              <input id="telefono" type="tel" value={form.telefono} onChange={(e) => set('telefono', e.target.value)} style={inputStyle} placeholder="+39 000 000 0000" />
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                required
                checked={form.privacy}
                onChange={(e) => set('privacy', e.target.checked)}
                style={{ marginTop: '3px', accentColor: '#D42B2B', flexShrink: 0 }}
              />
              <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
                Dichiaro di aver letto e compreso la{' '}
                <Link href="/privacy" style={{ color: '#D42B2B' }}>Privacy Policy</Link>{' '}
                e prendo atto che i miei dati personali saranno trattati dal Titolare
                per gestire la presente richiesta di preventivo, ai sensi dell&apos;art. 6, c. 1,
                lett. b) del GDPR (misure pre-contrattuali). *
              </span>
            </label>

            {status === 'error' && (
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '13px', color: '#D42B2B' }}>
                Si è verificato un errore. Riprova o scrivici su WhatsApp.
              </p>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep(2)}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  border: '1px solid #2A2A2A',
                  backgroundColor: 'transparent',
                  color: '#888888',
                }}
              >
                ← Indietro
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.nome || !form.email || !form.privacy || status === 'loading'}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  cursor: !form.nome || !form.email || !form.privacy || status === 'loading' ? 'not-allowed' : 'pointer',
                  border: 'none',
                  backgroundColor: !form.nome || !form.email || !form.privacy ? '#2A2A2A' : '#D42B2B',
                  color: '#F5F5F0',
                  opacity: status === 'loading' ? 0.7 : 1,
                }}
              >
                {status === 'loading' ? 'Invio...' : 'Invia Richiesta →'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
