import { About } from '@/components/About'
import { Articles } from '@/components/Articles'
import { Contact } from '@/components/Contact'
import { DownloadFreePlans } from '@/components/DownloadFreePlans'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroDownloadCta } from '@/components/HeroDownloadCta'
import { Pricing } from '@/components/Pricing'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <HeroDownloadCta />
        </Hero>
        <About />
        <Stats />
        <DownloadFreePlans />
        <Articles />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
