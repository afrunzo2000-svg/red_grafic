import Image from 'next/image'
import type { GalleryItem } from '@/lib/sanity/schemas/types'

const MOSAIC_SEEDS = [60, 61, 62, 63, 64]

interface MosaicCellProps {
  item: { _id: string; title: string; category: string; image?: GalleryItem['image'] }
  style?: React.CSSProperties
  className?: string
  large?: boolean
  seedIndex?: number
}

export default function MosaicCell({ item, style, className, large = false, seedIndex = 0 }: MosaicCellProps) {
  const seed = MOSAIC_SEEDS[seedIndex % MOSAIC_SEEDS.length]
  const imageUrl = item.image?.asset?.url ?? `https://picsum.photos/seed/${seed}/${large ? '800/900' : '500/500'}`

  return (
    <div
      className={`group ${className ?? ''}`}
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#1A1A1A', ...style }}
    >
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        sizes={large ? '40vw' : '20vw'}
        className="object-cover transition-[transform,filter] duration-500 ease-out scale-100 group-hover:scale-105 [filter:grayscale(25%)_brightness(0.7)] group-hover:[filter:grayscale(0%)_brightness(1)]"
      />

      {/* Red overlay tint on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(212,43,43,0.18)', zIndex: 2 }} />

      {/* Label reveal on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)', zIndex: 3 }}>
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
