'use client'

import type { GalleryItem } from '@/lib/sanity/schemas/types'

interface MosaicCellProps {
  item: { _id: string; title: string; category: string; image?: GalleryItem['image'] }
  style?: React.CSSProperties
  large?: boolean
}

export default function MosaicCell({ item, style, large = false }: MosaicCellProps) {
  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        ...style,
      }}
    >
      {/* Placeholder visual */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: large ? '80px' : '48px',
          color: '#222222',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}
      >
        RG
      </div>

      {/* Hover overlay */}
      <div
        className="mosaic-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(212,43,43,0.15)',
          opacity: 0,
          transition: 'opacity 0.3s',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-bebas), sans-serif',
              fontSize: '18px',
              letterSpacing: '0.05em',
              color: '#F5F5F0',
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
            {item.category}
          </div>
        </div>
      </div>
    </div>
  )
}
