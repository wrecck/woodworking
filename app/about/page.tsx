import type { Metadata } from 'next'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Us — Family-Owned Woodworking Studio in New York',
  description:
    'Learn about Best of Wood Projects, a trusted family-owned woodworking studio in New York. Custom furniture, school projects, wooden toys, and quality wood craft since day one.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    title: 'About Best of Wood Projects | Custom Woodworking in New York',
    description:
      'Family-owned woodworking studio delivering custom furniture, built-ins, school furniture, and wooden toys across New York.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <About />
      </main>
      <Footer />
    </>
  )
}
