import type { Metadata } from 'next'
import Link from 'next/link'
import { ThankYouDownload } from '@/components/ThankYouDownload'

export const metadata: Metadata = {
  title: 'Thank you — free woodworking plans',
  description: 'Your free plan download should begin automatically. Return to Best of Wood Projects for more.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <ThankYouDownload />
      <p className="thank-you-page__message">Thanks, your downloading of the free plan should start soon.</p>
      <Link className="thank-you-page__link" href="/">
        ← Back to home
      </Link>
    </div>
  )
}
