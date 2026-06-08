'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Cover the entire viewport so Navbar/Footer don't appear in the studio
export default function StudioPage() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <NextStudio config={config} />
    </div>
  )
}
