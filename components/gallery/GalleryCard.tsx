import Image from 'next/image'
import type { GalleryItem } from '@/lib/sanity/schemas/types'

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
  return `https://picsum.photos/seed/${seeds[hash % seeds.length]}/600/600`
}

interface GalleryCardProps {
  item: GalleryItem
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const imageUrl = item.image?.asset?.url ?? getPlaceholderUrl(item.category, item._id)

  return (
    <div
      className="group relative overflow-hidden cursor-pointer bg-[#1A1A1A]"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Image */}
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-[transform,filter] duration-500 ease-out scale-100 group-hover:scale-[1.06] [filter:grayscale(30%)_brightness(0.75)] group-hover:[filter:grayscale(0%)_brightness(1)]"
      />

      {/* Category tag — always visible */}
      <div className="absolute top-[14px] left-[14px] z-[2]"
        style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#D42B2B', backgroundColor: 'rgba(10,10,10,0.85)', padding: '4px 8px' }}>
        {item.category}
      </div>

      {/* Hover overlay with title */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-[3]"
        style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)' }}>
        <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '22px', letterSpacing: '0.05em', color: '#F5F5F0', lineHeight: 1, marginBottom: '4px' }}>
          {item.title}
        </div>
        <div style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '11px', color: '#D42B2B', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          {item.category}{item.year ? ` · ${item.year}` : ''}
        </div>
      </div>

      {/* Red left bar on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D42B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
    </div>
  )
}
