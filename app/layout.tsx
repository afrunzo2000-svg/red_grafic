import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsappFab from '@/components/layout/WhatsappFab'
import CookieBanner from '@/components/layout/CookieBanner'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Red_grafic | Grafica, Loghi e Illustrazioni · Capaccio Paestum',
  description:
    'Studio di grafica pubblicitaria, illustrazioni, loghi, inviti e character design a Capaccio Paestum (SA), Campania. Originalità come unico standard.',
  keywords: [
    'grafico Capaccio Paestum',
    'logo design Salerno',
    'illustrazioni Campania',
    'grafica pubblicitaria Paestum',
    'character design SA',
  ],
  openGraph: {
    locale: 'it_IT',
    type: 'website',
    siteName: 'Red_grafic',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Red_grafic',
  description:
    'Studio di grafica pubblicitaria, illustrazioni, loghi e character design',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Capaccio Paestum',
    addressRegion: 'SA',
    postalCode: '84047',
    addressCountry: 'IT',
  },
  telephone: '+393427404602',
  email: 'arturoalessiofrunzo@gmail.com',
  priceRange: '€€',
  areaServed: 'Campania, Italia',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.4231,
    longitude: 15.0044,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className={`${bebas.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <CookieBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappFab />
      </body>
    </html>
  )
}
