import SectionTag from './SectionTag'

interface SectionHeaderProps {
  tag?: string
  title: string
  titleAccent?: string
  subtitle?: string
}

export default function SectionHeader({ tag, title, titleAccent, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {tag && <SectionTag text={tag} />}
      <h2
        style={{
          fontFamily: 'var(--font-bebas), sans-serif',
          fontSize: 'clamp(40px, 6vw, 64px)',
          lineHeight: 0.95,
          letterSpacing: '0.05em',
          color: '#F5F5F0',
          marginBottom: subtitle ? '16px' : 0,
        }}
      >
        {title}
        {titleAccent && (
          <>
            {' '}
            <span style={{ color: '#D42B2B' }}>{titleAccent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '15px',
            color: '#888888',
            lineHeight: 1.6,
            maxWidth: '600px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
