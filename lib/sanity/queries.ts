import { groq } from 'next-sanity'
import { sanityFetch } from './client'
import type { GalleryItem, Service, SiteSettings } from './schemas/types'

export const galleryQuery = groq`
  *[_type == "galleryItem"] | order(order asc, _createdAt desc) {
    _id, title, category, year, description, featured, order,
    image { asset->{ _id, url, metadata { dimensions, lqip } } }
  }
`

export const featuredGalleryQuery = groq`
  *[_type == "galleryItem" && featured == true] | order(order asc) [0...6] {
    _id, title, category, year,
    image { asset->{ _id, url, metadata { dimensions, lqip } } }
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(number asc) {
    _id, title, slug, number, description, includes, timeframe
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    email, phone, whatsapp, instagram, tagline
  }
`

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return sanityFetch<GalleryItem[]>(galleryQuery)
}

export async function getFeaturedGalleryItems(): Promise<GalleryItem[]> {
  return sanityFetch<GalleryItem[]>(featuredGalleryQuery)
}

export async function getServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(servicesQuery)
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings | null>(siteSettingsQuery)
}
