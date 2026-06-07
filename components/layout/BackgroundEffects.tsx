/**
 * Animated background: floating red gradient orbs + noise texture overlay.
 * fixed + pointer-events-none → never blocks clicks.
 */
export default function BackgroundEffects() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Orb 1 — top-right, large, primary glow */}
      <div className="bg-orb orb-1" />

      {/* Orb 2 — bottom-left, medium */}
      <div className="bg-orb orb-2" />

      {/* Orb 3 — center, slow pulse */}
      <div className="bg-orb orb-3" />

      {/* Orb 4 — top-left, accent */}
      <div className="bg-orb orb-4" />

      {/* Vignette edges */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Subtle noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
          opacity: 0.025,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
