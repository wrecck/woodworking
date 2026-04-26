import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// Copy this folder to create a new page:
// - Duplicate `app/_page-template/` to `app/your-new-slug/`
// - Update `metadata` (title/description/canonical)
// - Paste content inside the marked section below

export const metadata: Metadata = {
  title: 'Page title',
  description: 'Short page description for SEO.',
  alternates: { canonical: '/your-new-slug' },
  robots: { index: false, follow: true }, // change to `true` when ready to index
}

export default function PageTemplate() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <section className="download-plans" aria-label="Page content">
          <div className="container">
            <div className="download-plans__inner" style={{ maxWidth: '780px' }}>
              {/* Paste your page content here */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

