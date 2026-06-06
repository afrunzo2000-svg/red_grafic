import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import AboutTeaser from '@/components/home/AboutTeaser'
import CtaBand from '@/components/home/CtaBand'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <GalleryPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  )
}
