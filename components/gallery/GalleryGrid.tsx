'use client'

import { useState } from 'react'
import type { GalleryItem } from '@/lib/sanity/schemas/types'
import GalleryFilter from './GalleryFilter'
import GalleryCard from './GalleryCard'

const CATEGORIES = ['Tutti', 'Loghi', 'Illustrazioni', 'Locandine', 'Character', 'Grafica']

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [active, setActive] = useState('Tutti')

  const filtered =
    active === 'Tutti' ? items : items.filter((i) => i.category === active)

  return (
    <div>
      <GalleryFilter categories={CATEGORIES} active={active} onChange={setActive} />

      {filtered.length === 0 ? (
        <div
          style={{
            padding: '80px 0',
            textAlign: 'center',
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '14px',
            color: '#888888',
          }}
        >
          Nessun elemento in questa categoria.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '4px',
          }}
        >
          {filtered.map((item) => (
            <GalleryCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
