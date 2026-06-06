'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GalleryItem } from '@/lib/sanity/schemas/types'

const MOSAIC_SEEDS = [60, 61, 62, 63, 64]

interface MosaicCellProps {
  item: { _id: string; title: string; category: string; image?: GalleryItem['image'] }
  style?: React.CSSProperties
  large?: boolean
  seedIndex?: number
}

export default function MosaicCell({ item, style, large = false, seedIndex = 0 }: MosaicCellProps) {
  const [hovered, setHovered] = useState(false)
  const seed = MOSAIC_SEEDS[seedIndex % MOSAIC_SEEDS.length]
  const imageUrl = item.image?.asset?.url ?? `https://picsum.photos/seed/${seed}/${large ? '800/900' : '500/500'}`

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#1A1A1A', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        sizes={large ? '40vw' : '20vw'}
        style={{
          objectFit: 'cover',
          filter: 'grayscale(25%) brightness(0.7)',
          transition: 'transform 0.5s ease, filter 0.4s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Red overlay tint on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(212,43,43,0.18)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s',
        zIndex: 2,
      }} />

      {/* Label */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s',
        display: 'flex', alignItems: 'flex-end', padding: '16px',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-bebas)', fontSize: large ? '22px' : '16px', letterSpacing: '0.05em', color: '#F5F5F0' }}>
            {item.title}
          </div>
          <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', color: '#D42B2B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            {item.category}
          </div>
        </div>
      </div>
    </div>
  )
}
