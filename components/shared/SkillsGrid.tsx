'use client'

const skills = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Procreate',
  'Adobe InDesign',
  'After Effects',
]

export default function SkillsGrid() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {skills.map((skill) => (
        <div
          key={skill}
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            padding: '16px 32px',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '20px',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            cursor: 'default',
            transition: 'background-color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D42B2B'
            e.currentTarget.style.borderColor = '#D42B2B'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1A1A1A'
            e.currentTarget.style.borderColor = '#2A2A2A'
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  )
}
