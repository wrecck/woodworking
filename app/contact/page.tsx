import type { Metadata } from 'next'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Contact Us — Request a Quote for Custom Woodworking',
  description:
    'Contact Best of Wood Projects in South Richmond Hill, NY. Request a quote for custom furniture, built-ins, school projects, or ready-made wood pieces.',
  alternates: { canonical: '/contact' },
  openGraph: {
    url: '/contact',
    title: 'Contact Best of Wood Projects | Custom Woodworking New York',
    description:
      'Reach our New York woodworking studio for quotes, orders, and project questions. Open Monday–Saturday 11 AM–9 PM.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
