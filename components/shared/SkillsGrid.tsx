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
          className="hover:bg-[#D42B2B] hover:border-[#D42B2B] transition-colors duration-200"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #2A2A2A',
            padding: '16px 32px',
            fontFamily: 'var(--font-bebas), sans-serif',
            fontSize: '20px',
            letterSpacing: '0.05em',
            color: '#F5F5F0',
            cursor: 'default',
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  )
}
