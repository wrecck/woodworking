import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Blank Page',
  description: 'Blank page description.',
  alternates: { canonical: '/blank' },
}

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <section className="download-plans" aria-label="Page content">
          <div className="container">
            <div className="download-plans__inner" style={{ maxWidth: '780px' }}>
              <h1 className="section-title">Blank Page Title</h1>
              <hr className="accent-line" />
              <p className="download-plans__lead">
                This is a sample paragraph. Replace this content with your own copy when creating a new page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

