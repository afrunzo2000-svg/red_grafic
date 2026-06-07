import type { Metadata } from 'next'
import Link from 'next/link'
import SkillsGrid from '@/components/shared/SkillsGrid'

export const metadata: Metadata = {
  title: 'Info | Red_grafic · Arturo Alessio Frunzo',
  description: 'Grafico e illustratore da Capaccio Paestum (SA), Campania. Scopri la storia e la filosofia dietro Red_grafic.',
}

const values = [
  {
    num: '01',
    title: 'Originale',
    desc: 'Nessun template, nessun copia-incolla. Ogni progetto nasce da zero, con una visione unica.',
  },
  {
    num: '02',
    title: 'Qualità',
    desc: 'Ogni pixel è una scelta. La cura del dettaglio è il minimo standard accettabile.',
  },
  {
    num: '03',
    title: 'Puntuale',
    desc: 'Le scadenze si rispettano. La creatività non è un alibi per il ritardo.',
  },
]

export default function InfoPage() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hero Split */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          borderBottom: '1px solid #1f1f1f',
        }}
        className="grid-cols-1 lg:grid-cols-2 lg:min-h-[80vh]"
      >
        {/* Text — first in DOM = top on mobile, left on desktop */}
        <div
          style={{
            padding: '64px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="lg:px-12 lg:py-20"
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D42B2B',
              marginBottom: '16px',
              display: 'block',
            }}
          >
            — Chi sono
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              color: '#F5F5F0',
              marginBottom: '32px',
            }}
          >
            ARTURO
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: '#888888',
              lineHeight: 1.7,
              marginBottom: '16px',
            }}
          >
            Sono un grafico e illustratore con oltre 8 anni di esperienza, nato e cresciuto a Capaccio Paestum, nel cuore della Campania.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '16px',
              color: '#888888',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            Ho fondato Red_grafic con un obiettivo semplice: creare identità visive che abbiano un&apos;anima. Che siano riconoscibili. Che siano originali.
          </p>
          <Link
            href="/contatti"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#F5F5F0',
              backgroundColor: '#D42B2B',
              padding: '14px 32px',
              display: 'inline-block',
              alignSelf: 'flex-start',
            }}
          >
            Parliamo →
          </Link>
        </div>

        {/* Visual — bottom on mobile, right on desktop */}
        <div
          style={{
            backgroundColor: '#111111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="lg:min-h-full"
        >
          <div
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(100px, 20vw, 240px)',
              color: '#0A0A0A',
              userSelect: 'none',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              textAlign: 'center',
            }}
          >
            AAF
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: '160px',
              height: '160px',
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '64px',
                color: '#D42B2B',
                letterSpacing: '0.05em',
              }}
            >
              AF
            </span>
          </div>
        </div>
      </div>

      {/* Filosofia */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px',
          borderBottom: '1px solid #1f1f1f',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: '64px',
            alignItems: 'center',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          <div>
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
              — Studio
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 0.95,
                letterSpacing: '0.05em',
                color: '#F5F5F0',
                marginBottom: '24px',
              }}
            >
              IL TERRITORIO
              <br />
              COME ISPIRAZIONE
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                color: '#888888',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Capaccio Paestum — terra di storia, di Magna Grecia, di paesaggi che parlano. Il Sud Italia non è solo un luogo geografico; è un modo di sentire, di vedere, di creare. Questa radice si riflette in ogni progetto.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '15px',
                color: '#888888',
                lineHeight: 1.7,
              }}
            >
              Red_grafic lavora principalmente per clienti in Campania e nel territorio del Salernitano, ma collabora con realtà di tutta Italia grazie alla comunicazione digitale.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div
              style={{
                backgroundColor: '#1A1A1A',
                padding: '24px 32px',
                fontFamily: 'var(--font-bebas), sans-serif',
                fontSize: '28px',
                letterSpacing: '0.05em',
                color: '#F5F5F0',
              }}
            >
              Capaccio Paestum (SA)
            </div>
            <div
              style={{
                backgroundColor: '#111111',
                padding: '24px 32px',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                color: '#888888',
                lineHeight: 1.6,
              }}
            >
              84047 · Provincia di Salerno
              <br />
              Campania, Sud Italia
            </div>
            <div
              style={{
                backgroundColor: '#1A1A1A',
                padding: '24px 32px',
              }}
            >
              <a
                href="https://maps.google.com/?q=Capaccio+Paestum"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#D42B2B',
                  textDecoration: 'none',
                }}
              >
                Vedi sulla mappa →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px',
          borderBottom: '1px solid #1f1f1f',
        }}
      >
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
          — Strumenti
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 0.95,
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '48px',
          }}
        >
          SOFTWARE & SKILLS
        </h2>
        <SkillsGrid />
      </div>

      {/* Values */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px 120px',
        }}
      >
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
          — Valori
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 0.95,
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '48px',
          }}
        >
          I MIEI PRINCIPI
        </h2>
        <div
          style={{
            display: 'grid',
            gap: '4px',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {values.map((v) => (
            <div
              key={v.num}
              style={{
                backgroundColor: '#111111',
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  fontFamily: 'var(--font-bebas), sans-serif',
                  fontSize: '120px',
                  color: '#1A1A1A',
                  bottom: '8px',
                  right: '10px',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {v.num}
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: '#D42B2B',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: '32px',
                    letterSpacing: '0.05em',
                    color: '#F5F5F0',
                    marginBottom: '12px',
                    lineHeight: 0.95,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    color: '#888888',
                    lineHeight: 1.6,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
