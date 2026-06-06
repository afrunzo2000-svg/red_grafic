'use client'

interface GalleryFilterProps {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}

export default function GalleryFilter({ categories, active, onChange }: GalleryFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        marginBottom: '32px',
        flexWrap: 'wrap',
        borderBottom: '1px solid #1f1f1f',
        paddingBottom: '24px',
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '8px 20px',
            cursor: 'pointer',
            border: '1px solid',
            borderColor: active === cat ? '#D42B2B' : '#2A2A2A',
            backgroundColor: active === cat ? '#D42B2B' : 'transparent',
            color: active === cat ? '#F5F5F0' : '#888888',
            transition: 'all 0.2s',
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
