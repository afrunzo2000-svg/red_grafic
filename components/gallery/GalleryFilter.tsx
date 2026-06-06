'use client'

interface GalleryFilterProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
  counts: Record<string, number>
  total: number
}

export default function GalleryFilter({ categories, active, onChange, counts, total }: GalleryFilterProps) {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '32px', flexWrap: 'wrap', borderBottom: '1px solid #1f1f1f', paddingBottom: '24px' }}>
      {categories.map((cat) => {
        const count = cat === 'Tutti' ? total : (counts[cat] ?? 0)
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '8px 20px',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: isActive ? '#D42B2B' : '#2A2A2A',
              backgroundColor: isActive ? '#D42B2B' : 'transparent',
              color: isActive ? '#F5F5F0' : '#888888',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {cat}
            <span style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '10px',
              fontWeight: 700,
              backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : '#1A1A1A',
              color: isActive ? '#F5F5F0' : '#444444',
              padding: '1px 6px',
              minWidth: '20px',
              textAlign: 'center',
            }}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
