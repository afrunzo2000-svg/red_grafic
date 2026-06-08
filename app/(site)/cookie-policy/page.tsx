import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Red_grafic',
  description: 'Informativa sull\'uso dei cookie sul sito Red_grafic, ai sensi delle Linee guida cookie del Garante (Provv. n. 231/2021) e del GDPR.',
}

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), sans-serif',
  fontSize: '14px',
  color: '#888888',
  lineHeight: 1.8,
  marginBottom: '12px',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-bebas), sans-serif',
  fontSize: '28px',
  letterSpacing: '0.05em',
  color: '#F5F5F0',
  marginBottom: '16px',
  lineHeight: 0.95,
}

const thStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#D42B2B',
  padding: '12px 16px',
  textAlign: 'left',
  borderBottom: '1px solid #2A2A2A',
  whiteSpace: 'nowrap',
}

const tdStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '13px',
  color: '#888888',
  padding: '12px 16px',
  borderBottom: '1px solid #1f1f1f',
  verticalAlign: 'top',
}

export default function CookiePolicyPage() {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 120px' }}>
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
            COOKIE POLICY
          </h1>
          <p style={{ ...pStyle, marginBottom: 0 }}>Ultimo aggiornamento: giugno 2026</p>
        </div>

        {/* Intro */}
        <div style={{ marginBottom: '48px' }}>
          <p style={pStyle}>
            La presente Cookie Policy è redatta ai sensi delle{' '}
            <strong style={{ color: '#F5F5F0' }}>Linee guida cookie e altri strumenti di tracciamento</strong>{' '}
            del Garante per la protezione dei dati personali (Provvedimento n. 231 del 10 luglio 2021,
            G.U. n. 181 del 28 luglio 2021, in vigore dal 9 gennaio 2022) e del Regolamento (UE) 2016/679 (GDPR).
          </p>
          <p style={pStyle}>
            Questa pagina descrive le tipologie di cookie utilizzati dal sito{' '}
            <strong style={{ color: '#F5F5F0' }}>red-grafic.it</strong> e le modalità per gestirli.
            Per informazioni sul trattamento dei dati personali, consulta la{' '}
            <a href="/privacy" style={{ color: '#D42B2B' }}>Privacy Policy</a>.
          </p>
        </div>

        {/* Cosa sono i cookie */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>1. Cosa sono i cookie</h2>
          <p style={pStyle}>
            I cookie sono piccoli file di testo che i siti visitati dall&apos;utente inviano e registrano
            sul suo computer o dispositivo mobile, per poi essere ritrasmessi agli stessi siti alla
            visita successiva. Permettono ai siti di ricordare le preferenze dell&apos;utente, di analizzare
            come viene utilizzato il sito e di mostrare contenuti o pubblicità personalizzati.
          </p>
        </div>

        {/* Cookie tecnici necessari */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>2. Cookie tecnici (necessari)</h2>
          <p style={pStyle}>
            Questi cookie sono indispensabili per il corretto funzionamento del sito e non possono
            essere disattivati. Non raccolgono dati personali a fini di profilazione.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#111111' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Nome</th>
                  <th style={thStyle}>Fornitore</th>
                  <th style={thStyle}>Scopo</th>
                  <th style={thStyle}>Scadenza</th>
                  <th style={thStyle}>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>cc_cookie</td>
                  <td style={tdStyle}>Red_grafic</td>
                  <td style={tdStyle}>Salva le preferenze del consenso cookie</td>
                  <td style={tdStyle}>6 mesi</td>
                  <td style={tdStyle}>HTTP</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, backgroundColor: '#0A0A0A' }}>__session</td>
                  <td style={{ ...tdStyle, backgroundColor: '#0A0A0A' }}>Red_grafic</td>
                  <td style={{ ...tdStyle, backgroundColor: '#0A0A0A' }}>Gestione sessione utente</td>
                  <td style={{ ...tdStyle, backgroundColor: '#0A0A0A' }}>Sessione</td>
                  <td style={{ ...tdStyle, backgroundColor: '#0A0A0A' }}>HTTP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cookie analitici */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>3. Cookie analitici</h2>
          <p style={pStyle}>
            Questi cookie, qualora attivati, vengono utilizzati solo con il previo consenso
            dell&apos;utente e ci aiutano a capire come i visitatori interagiscono con il sito,
            raccogliendo informazioni in forma anonima o aggregata.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#111111' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Nome</th>
                  <th style={thStyle}>Fornitore</th>
                  <th style={thStyle}>Scopo</th>
                  <th style={thStyle}>Scadenza</th>
                  <th style={thStyle}>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>Nessun cookie analitico attualmente in uso</td>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ ...pStyle, marginTop: '12px', fontSize: '13px', fontStyle: 'italic' }}>
            Qualora in futuro venissero introdotti strumenti di analisi (es. Google Analytics),
            questa sezione sarà aggiornata prima dell&apos;attivazione e il consenso sarà richiesto
            tramite il banner cookie.
          </p>
        </div>

        {/* Cookie di marketing */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>4. Cookie di marketing</h2>
          <p style={pStyle}>
            Questi cookie, attivati solo con il consenso dell&apos;utente, vengono utilizzati per
            mostrare annunci pubblicitari pertinenti e misurarne l&apos;efficacia.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#111111' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Nome</th>
                  <th style={thStyle}>Fornitore</th>
                  <th style={thStyle}>Scopo</th>
                  <th style={thStyle}>Scadenza</th>
                  <th style={thStyle}>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>Nessun cookie di marketing attualmente in uso</td>
                  <td style={tdStyle}>—</td>
                  <td style={tdStyle}>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gestione preferenze */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>5. Gestione delle preferenze e revoca del consenso</h2>
          <p style={pStyle}>
            Ai sensi delle Linee guida Garante n. 231/2021, il rifiuto dei cookie non essenziali deve
            essere accessibile con la stessa facilità dell&apos;accettazione. Le preferenze possono
            essere <strong style={{ color: '#F5F5F0' }}>modificate o revocate in qualsiasi momento</strong>{' '}
            tramite il pannello di gestione del consenso, accessibile cliccando su{' '}
            <strong style={{ color: '#F5F5F0' }}>&quot;Gestisci preferenze&quot;</strong> nel banner
            cookie o visitando nuovamente questa pagina. La revoca del consenso non pregiudica la
            liceità del trattamento basata sul consenso prestato prima della revoca.
          </p>
          <p style={pStyle}>
            È inoltre possibile gestire i cookie direttamente dal proprio browser:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { browser: 'Google Chrome', link: 'https://support.google.com/chrome/answer/95647' },
              { browser: 'Mozilla Firefox', link: 'https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie' },
              { browser: 'Safari', link: 'https://support.apple.com/it-it/guide/safari/sfri11471/mac' },
              { browser: 'Microsoft Edge', link: 'https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
            ].map((item, i) => (
              <li key={i} style={{ ...pStyle, marginBottom: '6px', paddingLeft: '16px', position: 'relative' }}>
                <span style={{ color: '#D42B2B', position: 'absolute', left: 0 }}>—</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#D42B2B' }}>
                  {item.browser}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ ...pStyle, marginTop: '12px' }}>
            <strong style={{ color: '#F5F5F0' }}>Attenzione:</strong> la disabilitazione di tutti i
            cookie potrebbe compromettere il corretto funzionamento del sito.
          </p>
        </div>

        {/* Contatti */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>6. Contatti</h2>
          <p style={pStyle}>
            Per qualsiasi domanda relativa alla presente Cookie Policy o al trattamento dei dati
            personali, contattare il Titolare:
          </p>
          <p style={pStyle}>
            <a href="mailto:arturoalessiofrunzo@gmail.com" style={{ color: '#D42B2B' }}>
              arturoalessiofrunzo@gmail.com
            </a>
            {' | '}
            <a href="https://www.garante.it" target="_blank" rel="noopener noreferrer" style={{ color: '#D42B2B' }}>
              Garante per la protezione dei dati personali — www.garante.it
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
