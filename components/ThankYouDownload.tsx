'use client'

import { useEffect } from 'react'

export function ThankYouDownload() {
  useEffect(() => {
    const url = '/free-easy-plans.zip'
    const a = document.createElement('a')
    a.href = url
    a.setAttribute('download', 'free-easy-plans.zip')
    a.rel = 'noopener'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    const t = window.setTimeout(() => {
      a.remove()
    }, 1000)
    return () => window.clearTimeout(t)
  }, [])

  return null
}
