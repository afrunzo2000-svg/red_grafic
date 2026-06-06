import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import HowItWorks from '@/components/home/HowItWorks'
import ServicesPreview from '@/components/home/ServicesPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import AboutTeaser from '@/components/home/AboutTeaser'
import CtaBand from '@/components/home/CtaBand'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorks />
      <ServicesPreview />
      <GalleryPreview />
      <AboutTeaser />
      <CtaBand />
    </>
  )
}
