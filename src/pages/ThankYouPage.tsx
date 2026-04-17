import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { publicAsset } from '../utils/publicAsset'

export function ThankYouPage() {
  useEffect(() => {
    const url = publicAsset('free-easy-plans.zip')
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download', 'free-easy-plans.zip')
    a.rel = 'noopener'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
      a.remove()
    }, 1000)
  }, [])

  return (
    <div className="thank-you-page">
      <p className="thank-you-page__message">Thanks, your downloading of the free plan should start soon.</p>
      <Link className="thank-you-page__link" to="/">
        ← Back to home
      </Link>
    </div>
  )
}
