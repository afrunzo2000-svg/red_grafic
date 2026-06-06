'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/sanity/schemas/types'

// Placeholder images per category (picsum seeds chosen for abstract/design look)
const PLACEHOLDER_SEEDS: Record<string, number[]> = {
  Loghi:         [10, 20, 30, 40, 50],
  Illustrazioni: [11, 22, 33, 44, 55],
  Locandine:     [12, 23, 34, 45, 56],
  Character:     [13, 24, 35, 46, 57],
  Grafica:       [14, 25, 36, 47, 58],
}

function getPlaceholderUrl(category: string, id: string): string {
  const seeds = PLACEHOLDER_SEEDS[category] ?? PLACEHOLDER_SEEDS['Grafica']
  const hash = id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const seed = seeds[hash % seeds.length]
  return `https://picsum.photos/seed/${seed}/600/600`
}

interface GalleryCardProps {
  item: GalleryItem
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false)
  const imageUrl = item.image?.asset?.url ?? getPlaceholderUrl(item.category, item._id)

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '1 / 1',
        cursor: 'pointer',
        backgroundColor: '#1A1A1A',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(30%) brightness(0.75)',
          transition: 'transform 0.5s ease, filter 0.4s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Category tag */}
      <div style={{
        position: 'absolute', top: '14px', left: '14px', zIndex: 2,
        fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 600,
        letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B',
        backgroundColor: 'rgba(10,10,10,0.85)', padding: '4px 8px',
      }}>
        {item.category}
      </div>

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '20px', zIndex: 3,
      }}>
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.05em', color: '#F5F5F0', lineHeight: 1, marginBottom: '4px' }}>
          {item.title}
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#D42B2B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          {item.category}{item.year ? ` · ${item.year}` : ''}
        </div>
      </div>

      {/* Red left bar on hover */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        backgroundColor: '#D42B2B', opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s', zIndex: 4,
      }} />
    </div>
  )
}
