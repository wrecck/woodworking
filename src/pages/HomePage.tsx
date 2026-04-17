import { About } from '../components/About'
import { Articles } from '../components/Articles'
import { Contact } from '../components/Contact'
import { DownloadFreePlans } from '../components/DownloadFreePlans'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { Stats } from '../components/Stats'
import { Testimonials } from '../components/Testimonials'

function scrollToDownloadSection() {
  document.getElementById('free-plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <div className="hero__download-plans">
            <p>Download Free Easy Plans</p>
            <button type="button" className="btn btn--ghost hero__download-btn" onClick={scrollToDownloadSection}>
              Downloads
            </button>
          </div>
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
