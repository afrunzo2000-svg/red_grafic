import type { Metadata } from 'next'
import Link from 'next/link'
import { getServices } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Servizi | Red_grafic',
  description: 'Servizi di grafica professionale: loghi, grafica pubblicitaria, illustrazioni, inviti, locandine e character design a Capaccio Paestum.',
}

const defaultServices = [
  {
    _id: '1',
    num: '01',
    title: 'Loghi & Brand Identity',
    description: 'Il tuo marchio è la prima cosa che il mondo vede. Creo identità visive che raccontano chi sei con autenticità e forza — logo, palette, tipografia e tutto ciò che rende il tuo brand unico e riconoscibile.',
    includes: ['Logo principale + varianti', 'Brand manual', 'Palette colori', 'Tipografia', 'Biglietti da visita', 'File in tutti i formati (AI, PDF, PNG, SVG)'],
    timeframe: '7–14 giorni lavorativi',
  },
  {
    _id: '2',
    num: '02',
    title: 'Grafica Pubblicitaria',
    description: 'Materiali visivi che catturano l\'attenzione e comunicano il messaggio giusto. Dai social media alle campagne stampa, ogni elemento è progettato per convertire.',
    includes: ['Post e stories social', 'Banner pubblicitari', 'Materiali stampa', 'Brochure e cataloghi', 'Presentazioni aziendali'],
    timeframe: '3–7 giorni lavorativi',
  },
  {
    _id: '3',
    num: '03',
    title: 'Illustrazioni',
    description: 'Immagini originali che parlano un linguaggio unico. Illustrazioni digitali o miste, con uno stile inconfondibile che si adatta al tuo progetto editoriale, commerciale o personale.',
    includes: ['Illustrazione editoriale', 'Illustrazione commerciale', 'Arte da parete', 'Copertine', 'Sticker e merchandise'],
    timeframe: '5–10 giorni lavorativi',
  },
  {
    _id: '4',
    num: '04',
    title: 'Inviti & Locandine',
    description: 'Dal matrimonio all\'evento aziendale, ogni occasione merita un design che si ricordi. Creo materiali stampabili che lasciano il segno, con attenzione maniacale ai dettagli.',
    includes: ['Inviti matrimonio', 'Locandine eventi', 'Flyer promozionali', 'Programmi di sala', 'File print-ready ad alta risoluzione'],
    timeframe: '4–8 giorni lavorativi',
  },
  {
    _id: '5',
    num: '05',
    title: 'Character Design',
    description: 'Personaggi e mascotte che danno vita al tuo brand con personalità e carattere. Ideali per prodotti, app, campagne pubblicitarie e merchandising.',
    includes: ['Character concept (3 varianti)', 'Character sheet completo', 'Espressioni e pose', 'File vettoriale editabile', 'Guida all\'uso'],
    timeframe: '10–20 giorni lavorativi',
  },
]

export default async function ServiziPage() {
  let sanityServices: Awaited<ReturnType<typeof getServices>> = []
  try {
    sanityServices = await getServices()
  } catch {
    // Sanity not configured yet
  }

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px 80px',
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
          — Cosa offro
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(64px, 10vw, 120px)',
            lineHeight: 0.9,
            letterSpacing: '0.03em',
            color: '#F5F5F0',
          }}
        >
          SERVIZI /
          <br />
          <span style={{ color: '#D42B2B' }}>CREATIVI.</span>
        </h1>
      </div>

      {/* Services list */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {defaultServices.map((s, i) => (
          <div
            key={s._id}
            style={{
              borderBottom: '1px solid #1f1f1f',
              padding: '0 24px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gap: '48px',
                padding: '80px 0',
                position: 'relative',
              }}
              className="grid-cols-1 lg:grid-cols-2"
            >
              {/* Left: Number + Title */}
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    fontFamily: 'var(--font-bebas), sans-serif',
                    fontSize: 'clamp(100px, 14vw, 180px)',
                    color: '#111111',
                    userSelect: 'none',
                    lineHeight: 1,
                    top: '-20px',
                    left: '-10px',
                  }}
                >
                  {s.num}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#D42B2B',
                      marginBottom: '12px',
                    }}
                  >
                    {s.num}
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-bebas), sans-serif',
                      fontSize: 'clamp(36px, 5vw, 56px)',
                      lineHeight: 0.95,
                      letterSpacing: '0.05em',
                      color: '#F5F5F0',
                      marginBottom: '24px',
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '15px',
                      color: '#888888',
                      lineHeight: 1.7,
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Right: Includes + Timeframe + CTA */}
              <div
                style={{
                  backgroundColor: '#111111',
                  padding: '40px',
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
                    backgroundColor: '#D42B2B',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#D42B2B',
                    marginBottom: '16px',
                  }}
                >
                  Cosa include
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {s.includes.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '14px',
                        color: '#F5F5F0',
                        padding: '8px 0',
                        borderBottom: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span style={{ color: '#D42B2B', fontWeight: 700 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: '#888888',
                      marginBottom: '4px',
                    }}
                  >
                    Tempi
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '20px',
                      letterSpacing: '0.05em',
                      color: '#F5F5F0',
                    }}
                  >
                    {s.timeframe}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '11px',
                      color: '#444444',
                      marginTop: '4px',
                    }}
                  >
                    dall&apos;approvazione del progetto
                  </div>
                </div>

                <Link
                  href="/prenotazione"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: '#F5F5F0',
                    backgroundColor: '#D42B2B',
                    padding: '12px 24px',
                    display: 'inline-block',
                  }}
                >
                  Richiedi un preventivo →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preventivo bottom CTA */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            marginBottom: '16px',
            lineHeight: 0.95,
          }}
        >
          PREVENTIVO SU RICHIESTA
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '15px',
            color: '#888888',
            marginBottom: '32px',
          }}
        >
          Ogni progetto è unico. Contattami per un preventivo personalizzato.
        </p>
        <Link
          href="/prenotazione"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#F5F5F0',
            backgroundColor: '#D42B2B',
            padding: '16px 40px',
            display: 'inline-block',
          }}
        >
          Inizia il tuo progetto →
        </Link>
      </div>
    </div>
  )
}
