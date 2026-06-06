import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://red-grafic.it'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/galleria`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/servizi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/info`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contatti`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/prenotazione`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
