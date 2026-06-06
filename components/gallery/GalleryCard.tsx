'use client'

import { useState } from 'react'
import type { GalleryItem } from '@/lib/sanity/schemas/types'

interface GalleryCardProps {
  item: GalleryItem
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '1 / 1',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category tag */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 2,
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#D42B2B',
          backgroundColor: '#0A0A0A',
          padding: '4px 8px',
        }}
      >
        {item.category}
      </div>

      {/* Placeholder visual */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: '64px',
          color: '#222222',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}
      >
        RG
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10,10,10,0.85)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '22px',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            lineHeight: 1,
            marginBottom: '4px',
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '11px',
            color: '#D42B2B',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          {item.category} {item.year ? `· ${item.year}` : ''}
        </div>
      </div>

      {/* Red left bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#D42B2B',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          zIndex: 4,
        }}
      />
    </div>
  )
}
