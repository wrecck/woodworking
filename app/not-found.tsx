import Link from 'next/link'
import { getSiteUrl } from '@/lib/site'

export default function NotFound() {
  const base = getSiteUrl()
  const freePlansUrl = `${base}/#free-plans`

  return (
    <div className="not-found-page">
      <p className="not-found-page__code">404</p>
      <p className="not-found-page__message">This page doesn’t exist.</p>
      <div className="not-found-page__actions">
        <a className="not-found-page__link" href={freePlansUrl}>
          Download free woodworking plans
        </a>
        <Link className="not-found-page__link not-found-page__link--muted" href="/">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
