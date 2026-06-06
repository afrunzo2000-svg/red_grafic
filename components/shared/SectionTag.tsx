interface SectionTagProps {
  text: string
  className?: string
}

export default function SectionTag({ text, className = '' }: SectionTagProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#D42B2B',
        display: 'block',
        marginBottom: '16px',
      }}
    >
      {text}
    </span>
  )
}
