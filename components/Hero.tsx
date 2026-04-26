import type { ReactNode } from 'react'

type HeroProps = {
  children?: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: 'url(/pexels-cottonbro-7480718.jpg)' }}>
      <div className="hero__content">
        <h1 className="hero__title">We Offer Products Made of Wood.</h1>
        <hr className="hero__line" />
        <p className="hero__lead">
          We’re a family-owned studio and one of the most trusted wood craft teams in New York — building better so you
          can create more.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            Contact Us
          </a>
          <a className="btn btn--ghost" href="#about">
            Learn More
          </a>
        </div>
        {children}
      </div>
    </section>
  )
}
