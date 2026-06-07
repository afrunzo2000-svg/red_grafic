'use client'

import { useEffect } from 'react'
import 'vanilla-cookieconsent/dist/cookieconsent.css'


export default function CookieBanner() {
  useEffect(() => {
    const init = async () => {
      const { run } = await import('vanilla-cookieconsent')
      run({
        guiOptions: {
          consentModal: {
            layout: 'box inline',
            position: 'bottom left',
          },
          preferencesModal: {
            layout: 'box',
          },
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            enabled: false,
          },
          marketing: {
            enabled: false,
          },
        },
        language: {
          default: 'it',
          translations: {
            it: {
              consentModal: {
                title: 'Utilizziamo i cookie',
                description:
                  'Questo sito utilizza cookie tecnici necessari al funzionamento e, previo consenso, cookie analitici e di marketing. Per maggiori informazioni visita <a href="https://www.garante.it" target="_blank" rel="noopener noreferrer">www.garante.it</a> e la nostra <a href="/cookie-policy">Cookie Policy</a>.',
                acceptAllBtn: 'Accetta tutti',
                acceptNecessaryBtn: 'Solo necessari',
                showPreferencesBtn: 'Gestisci preferenze',
              },
              preferencesModal: {
                title: 'Preferenze cookie',
                acceptAllBtn: 'Accetta tutti',
                acceptNecessaryBtn: 'Solo necessari',
                savePreferencesBtn: 'Salva preferenze',
                closeIconLabel: 'Chiudi',
                sections: [
                  {
                    title: 'Cookie tecnici necessari',
                    description:
                      'Questi cookie sono necessari per il corretto funzionamento del sito e non possono essere disattivati.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Cookie analitici',
                    description:
                      'Questi cookie ci permettono di analizzare le visite al sito per migliorarne le prestazioni.',
                    linkedCategory: 'analytics',
                  },
                  {
                    title: 'Cookie di marketing',
                    description:
                      'Questi cookie sono utilizzati per mostrarti pubblicità pertinente ai tuoi interessi.',
                    linkedCategory: 'marketing',
                  },
                  {
                    title: 'Ulteriori informazioni',
                    description:
                      'Per qualsiasi domanda relativa al trattamento dei dati, contattaci a <a href="mailto:arturoalessiofrunzo@gmail.com">arturoalessiofrunzo@gmail.com</a>. Per maggiori informazioni sul trattamento dei dati personali, visita il sito del <a href="https://www.garante.it" target="_blank" rel="noopener noreferrer">Garante per la protezione dei dati personali</a>.',
                  },
                ],
              },
            },
          },
        },
      })
    }
    init()
  }, [])

  return (
    <style>{`
      #cc-main {
        --cc-font-family: var(--font-dm-sans), sans-serif;
        --cc-bg: #0A0A0A;
        --cc-text: #F5F5F0;
        --cc-btn-primary-bg: #D42B2B;
        --cc-btn-primary-text: #F5F5F0;
        --cc-btn-primary-hover-bg: #b82424;
        --cc-btn-secondary-bg: #2A2A2A;
        --cc-btn-secondary-text: #F5F5F0;
        --cc-btn-secondary-hover-bg: #1A1A1A;
        --cc-separator-border-color: #1f1f1f;
        --cc-cookie-category-bg: #1A1A1A;
        --cc-cookie-category-border: #2A2A2A;
        --cc-toggle-on-bg: #D42B2B;
        --cc-toggle-off-bg: #2A2A2A;
        --cc-toggle-readonly-bg: #2A2A2A;
        --cc-overlay-bg: rgba(0,0,0,0.7);
        border: 1px solid #2A2A2A;
      }
      #cc-main .cm__title {
        font-family: var(--font-bebas), sans-serif;
        letter-spacing: 0.05em;
        font-size: 22px;
        color: #F5F5F0;
      }
      #cc-main .cm__btn {
        border-radius: 0 !important;
      }
      #cc-main .cm__btns {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }
      #cc-main .cm__btn-group {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 8px !important;
      }
      #cc-main .cm__btn.cm__btn--secondary {
        background: transparent !important;
        border: 1px solid #F5F5F0 !important;
        color: #F5F5F0 !important;
      }
      #cc-main .cm__btn.cm__btn--secondary:hover {
        background: #1A1A1A !important;
        color: #F5F5F0 !important;
      }
    `}</style>
  )
}
