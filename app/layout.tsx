import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Montserrat } from 'next/font/google'
import Script from 'next/script'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { getMetadataBase } from '@/lib/site'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-libre',
  display: 'swap',
})

const siteTitle = 'Best of Wood Projects | Custom Woodworking & Furniture in New York'
const siteDescription =
  'Family-owned woodworking studio in New York: custom furniture, built-ins, school furniture, wooden toys, and quality wood craft. Free consultation and clear pricing.'

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: siteTitle,
    template: '%s | Best of Wood Projects',
  },
  description: siteDescription,
  keywords: [
    'woodworking New York',
    'custom furniture',
    'wood shop',
    'built-ins',
    'wooden toys',
    'kitchen cabinetry',
    'commercial woodworking',
  ],
  applicationName: 'Best of Wood Projects',
  authors: [{ name: 'Best of Wood Projects', url: 'https://www.bestofwoodprojects.com' }],
  creator: 'Best of Wood Projects',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Best of Wood Projects',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: '/pexels-cottonbro-7480718.jpg', width: 1200, height: 630, alt: 'Wood workshop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best of Wood Projects',
    description: siteDescription,
    images: ['/pexels-cottonbro-7480718.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  category: 'business',
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3e2c22',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${libreBaskerville.variable}`}>
      <body className={montserrat.className}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NGRK054F7L" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NGRK054F7L');
          `}
        </Script>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  )
}
