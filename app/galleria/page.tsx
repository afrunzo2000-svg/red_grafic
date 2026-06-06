import type { Metadata } from 'next'
import { getGalleryItems } from '@/lib/sanity/queries'
import type { GalleryItem } from '@/lib/sanity/schemas/types'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galleria | Red_grafic',
  description: 'Portfolio di lavori grafici: loghi, illustrazioni, locandine, character design e grafica pubblicitaria.',
}

export default async function GalleriaPage() {
  let items: GalleryItem[] = []
  try {
    items = await getGalleryItems()
  } catch {
    // Sanity not configured yet
  }

  // Placeholder items when Sanity is not configured
  if (items.length === 0) {
    items = Array.from({ length: 12 }, (_, i) => ({
      _id: `placeholder-${i}`,
      title: ['Brand Identity', 'Illustrazione', 'Locandina', 'Character Design', 'Logo', 'Grafica', 'Invito', 'Poster', 'Mascotte', 'Identità', 'Flyer', 'Copertina'][i],
      category: (['Loghi', 'Illustrazioni', 'Locandine', 'Character', 'Loghi', 'Grafica', 'Locandine', 'Grafica', 'Character', 'Loghi', 'Grafica', 'Illustrazioni'] as GalleryItem['category'][])[i],
      image: { asset: { _id: '', url: '', metadata: { dimensions: { width: 800, height: 800 }, lqip: '' } } },
      year: 2024 - (i % 3),
    }))
  }

  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {/* Hero */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 24px 64px',
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
          — Portfolio
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
          IL MIO /
          <br />
          <span style={{ color: '#D42B2B' }}>LAVORO.</span>
        </h1>
      </div>

      {/* Gallery */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '48px 24px 120px' }}>
        <GalleryGrid items={items} />
      </div>
    </div>
  )
}
