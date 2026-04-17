import { Link } from 'react-router-dom'

const FREE_PLANS_URL = 'https://www.bestofwoodprojects.com/#free-plans'

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p className="not-found-page__code">404</p>
      <p className="not-found-page__message">This page doesn’t exist.</p>
      <div className="not-found-page__actions">
        <a className="not-found-page__link" href={FREE_PLANS_URL}>
          Download Free woodworking plans
        </a>
        <Link className="not-found-page__link not-found-page__link--muted" to="/">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}

