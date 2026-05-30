import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DownloadPlansArticle } from '@/components/DownloadPlansArticle'

export const metadata: Metadata = {
  title: 'New Wood Working Plans — Download Free DIY Woodworking Plans',
  description:
    'Download new free woodworking plans for the DIY woodworker. Easy, economical projects with cut lists and step-by-step instructions from Best of Wood Projects.',
  alternates: { canonical: '/download-new-free-woodworking' },
  openGraph: {
    url: '/download-new-free-woodworking',
    title: 'New Wood Working Plans | Free DIY Woodworking Downloads',
    description:
      'Get new free woodworking plans for DIY builders. Workbenches, coffee tables, shelves, and beginner-friendly projects.',
  },
}

export default function Page() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <section className="download-plans" aria-label="Page content">
          <div className="container">
            <div className="download-plans__inner" style={{ maxWidth: '780px' }}>
              <h1 className="section-title">New Wood Working Plans</h1>
              <hr className="accent-line" />
              <DownloadPlansArticle ctaHref="/#download-plans" ctaLabel="Download New Free Woodworking Plans" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
