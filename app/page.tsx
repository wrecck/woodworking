import type { Metadata } from 'next'
import { HomePage } from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Free Woodworking Plans & DIY Projects | Custom Wood Furniture New York',
  description:
    'Best of Wood Projects offers free easy woodworking plans, DIY project guides, and custom wood furniture from a family-owned New York studio. Download plans and read our woodworking blogs.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    title: 'Best of Wood Projects | Free Woodworking Plans & Custom Furniture',
    description:
      'Download free easy woodworking plans and explore DIY project blogs from a trusted family-owned New York wood studio.',
  },
}

export default function Home() {
  return <HomePage />
}
