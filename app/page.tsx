import type { Metadata } from 'next'
import { HomePage } from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Custom Woodworking & Furniture in New York',
  description:
    'Quality custom wood furniture, built-ins, school projects, and toys from a trusted family-owned New York studio. See pricing, testimonials, and request a quote.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Best of Wood Projects | Custom Woodworking & Furniture in New York',
    description:
      'Quality custom wood furniture, built-ins, school projects, and toys from a trusted family-owned New York studio.',
  },
}

export default function Home() {
  return <HomePage />
}
