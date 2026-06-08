import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsappFab from '@/components/layout/WhatsappFab'
import InstagramFab from '@/components/layout/InstagramFab'
import CookieBanner from '@/components/layout/CookieBanner'
import BackgroundEffects from '@/components/layout/BackgroundEffects'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BackgroundEffects />
      <CookieBanner />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <InstagramFab />
      <WhatsappFab />
    </>
  )
}
