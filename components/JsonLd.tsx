import { getMetadataBase, getSiteUrl } from '@/lib/site'

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function OrganizationJsonLd() {
  const base = getMetadataBase().origin
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${base}/#organization`,
    name: 'Best of Wood Projects',
    url: base,
    logo: `${base}/logo.png`,
    image: `${base}/pexels-cottonbro-7480718.jpg`,
    telephone: '+1-234-567-8900',
    email: 'hello@bestofwoodprojects.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '107-1 109th St',
      addressLocality: 'South Richmond Hill',
      addressRegion: 'NY',
      postalCode: '11419',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '11:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '19:00',
      },
    ],
    sameAs: ['https://www.facebook.com/WoodworkerProject'],
    description:
      'Family-owned woodworking studio in New York offering custom furniture, built-ins, school furniture, wooden toys, and commercial woodwork.',
  }
  return <JsonLdScript data={data} />
}

export function WebSiteJsonLd() {
  const siteUrl = getSiteUrl()
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: 'Best of Wood Projects',
    description:
      'Custom woodworking, furniture, and wood craft for homes, schools, and businesses in New York.',
    publisher: { '@id': `${getMetadataBase().origin}/#organization` },
    inLanguage: 'en-US',
  }
  return <JsonLdScript data={data} />
}
