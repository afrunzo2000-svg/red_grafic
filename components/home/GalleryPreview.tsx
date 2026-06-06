import Link from 'next/link'
import { getFeaturedGalleryItems } from '@/lib/sanity/queries'
import type { GalleryItem } from '@/lib/sanity/schemas/types'
import MosaicCell from './MosaicCell'

export default async function GalleryPreview() {
  let items: GalleryItem[] = []
  try {
    items = await getFeaturedGalleryItems()
  } catch {
    // Sanity not configured yet — show placeholders
  }

  const placeholders = Array.from({ length: 5 }, (_, i) => ({
    _id: `placeholder-${i}`,
    title: ['Brand Identity', 'Illustrazione', 'Locandina', 'Character', 'Logo'][i],
    category: ['Loghi', 'Illustrazioni', 'Locandine', 'Character', 'Loghi'][i] as GalleryItem['category'],
  }))

  const displayItems = items.length > 0 ? items : placeholders

  return (
    <section
      style={{
        backgroundColor: '#0A0A0A',
        padding: '120px 24px',
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: 0.95,
              letterSpacing: '0.05em',
              color: '#F5F5F0',
            }}
          >
            GALLERIA
          </h2>
          <Link
            href="/galleria"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            Vedi tutto il portfolio →
          </Link>
        </div>

        {/* Asymmetric mosaic */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            gap: '4px',
          }}
        >
          {/* Large cell */}
          <MosaicCell
            item={displayItems[0] ?? { _id: 'p0', title: 'Portfolio', category: 'Loghi' }}
            style={{ gridRow: '1 / 3', minHeight: '480px' }}
            large
            seedIndex={0}
          />
          {/* 4 smaller cells */}
          {displayItems.slice(1, 5).map((item, i) => (
            <MosaicCell key={item._id} item={item} style={{ minHeight: '236px' }} seedIndex={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
