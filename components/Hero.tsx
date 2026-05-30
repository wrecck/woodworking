import type { ReactNode } from 'react'

type HeroProps = {
  children?: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__main">
          <h1 className="hero__title">We Offer Products Made of Wood.</h1>
          <hr className="hero__line" />
          <p className="hero__lead">
            We’re a family-owned studio and one of the most trusted wood craft teams in New York — building better so you
            can create more.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#download-plans">
              Get Free Plans
            </a>
            <a className="btn btn--ghost" href="#woodworking-blogs">
              Woodworking Blogs
            </a>
          </div>
        </div>
      </div>
      {children}
    </section>
  )
}
