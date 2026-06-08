import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'picsum.photos' },
      { hostname: 'fastly.picsum.photos' },
    ],
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      // Security headers for all routes except /studio
      {
        source: '/((?!studio).*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Minimal headers for Sanity Studio (needs iframe support)
      {
        source: '/studio(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

export default nextConfig
