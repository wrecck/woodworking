import { DownloadFreePlans } from '@/components/DownloadFreePlans'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroDownloadCta } from '@/components/HeroDownloadCta'
import { Stats } from '@/components/Stats'
import { WoodworkingBlogs } from '@/components/WoodworkingBlogs'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <HeroDownloadCta />
        </Hero>
        <WoodworkingBlogs />
        <Stats />
        <DownloadFreePlans />
      </main>
      <Footer />
    </>
  )
}
