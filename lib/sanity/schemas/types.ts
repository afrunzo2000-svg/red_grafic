export interface SanityImage {
  asset: {
    _id: string
    url: string
    metadata: {
      dimensions: { width: number; height: number }
      lqip: string
    }
  }
}

export interface GalleryItem {
  _id: string
  title: string
  category: 'Loghi' | 'Illustrazioni' | 'Locandine' | 'Character' | 'Grafica'
  image: SanityImage
  year: number
  description?: string
  featured?: boolean
  order?: number
}

export interface Service {
  _id: string
  title: string
  slug: { current: string }
  number: number
  description: string
  includes: string[]
  timeframe: string
}

export interface SiteSettings {
  email: string
  phone: string
  whatsapp: string
  instagram?: string
  tagline?: string
}
