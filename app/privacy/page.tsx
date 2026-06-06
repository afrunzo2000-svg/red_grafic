import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Red_grafic',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR e del D.Lgs. 196/2003.',
}

const sectionStyle: React.CSSProperties = {
  marginBottom: '48px',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-bebas), sans-serif',
  fontSize: '28px',
  letterSpacing: '0.05em',
  color: '#F5F5F0',
  marginBottom: '16px',
  lineHeight: 0.95,
}

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '14px',
  color: '#888888',
  lineHeight: 1.8,
  marginBottom: '12px',
}

const liStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '14px',
  color: '#888888',
  lineHeight: 1.8,
  marginBottom: '6px',
  paddingLeft: '16px',
  position: 'relative',
}

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 120px' }}>
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
            — Legale
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(48px, 7vw, 72px)',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              color: '#F5F5F0',
              marginBottom: '16px',
            }}
          >
            PRIVACY POLICY
          </h1>
          <p style={{ ...pStyle, marginBottom: 0 }}>
            Ultimo aggiornamento: giugno 2025
          </p>
        </div>

        {/* Intro */}
        <div style={sectionStyle}>
          <p style={pStyle}>
            La presente informativa è resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679
            (GDPR) e del D.Lgs. 196/2003 (Codice Privacy), come modificato dal D.Lgs. 101/2018,
            a tutti i soggetti che interagiscono con il sito web di Red_grafic.
          </p>
        </div>

        {/* 1. Titolare */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>1. Titolare del trattamento</h2>
          <div
            style={{
              backgroundColor: '#111111',
              padding: '24px 32px',
              borderLeft: '2px solid #D42B2B',
              marginBottom: '16px',
            }}
          >
            <p style={{ ...pStyle, marginBottom: '4px', color: '#F5F5F0' }}>
              <strong>Arturo Alessio Frunzo</strong>
            </p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>Capaccio Paestum (SA), 84047 — Italia</p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>
              Email:{' '}
              <a href="mailto:arturoalessiofrunzo@gmail.com" style={{ color: '#D42B2B' }}>
                arturoalessiofrunzo@gmail.com
              </a>
            </p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              Tel:{' '}
              <a href="tel:+393427404602" style={{ color: '#D42B2B' }}>
                +39 342 740 4602
              </a>
            </p>
          </div>
        </div>

        {/* 2. Tipi di dati */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>2. Tipi di dati raccolti</h2>
          <p style={pStyle}>Il sito raccoglie le seguenti categorie di dati personali:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Dati di contatto forniti tramite moduli: nome, cognome, indirizzo email, numero di telefono, messaggio',
              'Dati relativi al progetto: tipo di progetto, budget, data di consegna, riferimenti stilistici',
              'Dati di navigazione: log tecnici del server (indirizzo IP, tipo di browser, pagine visitate, data e ora di accesso)',
              'Cookie: come descritto nella Cookie Policy separata',
            ].map((item, i) => (
              <li key={i} style={liStyle}>
                <span style={{ color: '#D42B2B', position: 'absolute', left: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Finalità e base giuridica */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>3. Finalità e base giuridica del trattamento</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                title: 'Risposta alle richieste di contatto e preventivo',
                base: 'Consenso esplicito dell\'interessato (Art. 6, c. 1, lett. a GDPR)',
              },
              {
                title: 'Gestione del rapporto commerciale e pre-contrattuale',
                base: 'Esecuzione di misure pre-contrattuali (Art. 6, c. 1, lett. b GDPR)',
              },
              {
                title: 'Adempimento di obblighi legali',
                base: 'Obbligo legale (Art. 6, c. 1, lett. c GDPR)',
              },
              {
                title: 'Analisi statistica del traffico (solo se acconsentito)',
                base: 'Consenso esplicito tramite cookie banner (Art. 6, c. 1, lett. a GDPR)',
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#111111',
                  padding: '16px 20px',
                  borderBottom: '1px solid #1f1f1f',
                }}
              >
                <p style={{ ...pStyle, color: '#F5F5F0', marginBottom: '4px' }}>
                  <strong>{item.title}</strong>
                </p>
                <p style={{ ...pStyle, marginBottom: 0, fontSize: '13px' }}>
                  Base giuridica: {item.base}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Periodo di conservazione */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>4. Periodo di conservazione</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Dati dei moduli di contatto e prenotazione: 12 mesi dalla ricezione',
              'Log tecnici di navigazione: 30 giorni',
              'Cookie analitici: secondo le durate indicate nella Cookie Policy',
              'In caso di instaurazione di rapporto contrattuale: 10 anni ai sensi dell\'art. 2220 c.c.',
            ].map((item, i) => (
              <li key={i} style={liStyle}>
                <span style={{ color: '#D42B2B', position: 'absolute', left: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Diritti dell'interessato */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>5. Diritti dell&apos;interessato (Artt. 15–22 GDPR)</h2>
          <p style={pStyle}>
            L&apos;interessato ha il diritto di:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Accesso — ottenere conferma del trattamento e copia dei dati (Art. 15)',
              'Rettifica — correggere dati inesatti o incompleti (Art. 16)',
              'Cancellazione (diritto all\'oblio) — ottenere la cancellazione dei dati (Art. 17)',
              'Limitazione — ottenere la limitazione del trattamento in determinati casi (Art. 18)',
              'Portabilità — ricevere i dati in formato strutturato (Art. 20)',
              'Opposizione — opporsi al trattamento per motivi legittimi (Art. 21)',
              'Revoca del consenso — in qualsiasi momento, senza pregiudizio per il trattamento precedente',
            ].map((item, i) => (
              <li key={i} style={liStyle}>
                <span style={{ color: '#D42B2B', position: 'absolute', left: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ ...pStyle, marginTop: '16px' }}>
            Per esercitare tali diritti, inviare una richiesta a:{' '}
            <a href="mailto:arturoalessiofrunzo@gmail.com" style={{ color: '#D42B2B' }}>
              arturoalessiofrunzo@gmail.com
            </a>
          </p>
        </div>

        {/* 6. Diritto di reclamo */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>6. Diritto di reclamo al Garante</h2>
          <p style={pStyle}>
            L&apos;interessato ha il diritto di proporre reclamo all&apos;Autorità di controllo competente:
          </p>
          <div
            style={{
              backgroundColor: '#111111',
              padding: '24px 32px',
              borderLeft: '2px solid #D42B2B',
            }}
          >
            <p style={{ ...pStyle, color: '#F5F5F0', marginBottom: '4px' }}>
              <strong>Garante per la protezione dei dati personali</strong>
            </p>
            <p style={{ ...pStyle, marginBottom: '4px' }}>Piazza Venezia 11, 00187 Roma</p>
            <p style={{ ...pStyle, marginBottom: 0 }}>
              <a
                href="https://www.garante.it"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D42B2B' }}
              >
                www.garante.it
              </a>
            </p>
          </div>
        </div>

        {/* 7. Riferimenti normativi */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>7. Riferimenti normativi</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Regolamento (UE) 2016/679 del Parlamento Europeo e del Consiglio (GDPR)',
              'D.Lgs. 30 giugno 2003, n. 196 — Codice in materia di protezione dei dati personali',
              'D.Lgs. 10 agosto 2018, n. 101 — Adeguamento del Codice Privacy al GDPR',
              'Provvedimento del Garante dell\'8 maggio 2014 sui cookie',
            ].map((item, i) => (
              <li key={i} style={liStyle}>
                <span style={{ color: '#D42B2B', position: 'absolute', left: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Trasferimento dati */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>8. Trasferimento dei dati</h2>
          <p style={pStyle}>
            I dati personali non sono trasferiti a paesi terzi al di fuori dell&apos;Unione Europea.
            Il sito è ospitato su infrastrutture localizzate nell&apos;UE o in paesi che garantiscono
            adeguato livello di protezione ai sensi del GDPR.
          </p>
        </div>

        {/* 9. Modifiche */}
        <div style={sectionStyle}>
          <h2 style={h2Style}>9. Modifiche alla presente informativa</h2>
          <p style={pStyle}>
            Il Titolare si riserva il diritto di apportare modifiche alla presente informativa in
            qualsiasi momento, dandone pubblicità agli utenti su questa pagina. Si prega pertanto
            di consultare regolarmente questa pagina.
          </p>
        </div>
      </div>
    </div>
  )
}
