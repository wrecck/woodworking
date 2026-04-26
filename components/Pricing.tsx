type Tier = {
  name: string
  price: string
  detail: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Consultation',
    price: 'Free',
    detail: 'Site visit or video walkthrough, scope notes, and ballpark estimate.',
  },
  {
    name: 'Custom build',
    price: 'From $2.5k',
    detail: 'Furniture and built-ins priced from drawings; milestone billing and shop drawings included.',
    featured: true,
  },
  {
    name: 'Commercial',
    price: 'Quote',
    detail: 'Packages for offices, schools, and retail — phased install and dedicated project lead.',
  },
]

export function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <h2 id="pricing-heading" className="section-title section-title--center">
          Pricing
        </h2>
        <hr className="accent-line accent-line--center" />
        <p style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 2rem', color: 'var(--color-muted)' }}>
          Every project starts with material choice and joinery plan. Share your measurements and inspiration — we’ll
          respond with clear numbers.
        </p>
        <div className="pricing__grid">
          {tiers.map((tier) => (
            <div key={tier.name} className={`price-card${tier.featured ? ' price-card--featured' : ''}`}>
              <h3 className="card__title" style={{ marginTop: 0 }}>
                {tier.name}
              </h3>
              <p className="price-card__amount">{tier.price}</p>
              <p style={{ margin: 0, color: 'var(--color-muted)', fontSize: '0.92rem' }}>{tier.detail}</p>
              <a className="btn btn--primary" href="#contact" style={{ marginTop: '1.25rem' }}>
                Request a quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
