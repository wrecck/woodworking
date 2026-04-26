/** Canonical production URL — set NEXT_PUBLIC_SITE_URL on Vercel if the domain differs. */
export const DEFAULT_PRODUCTION_URL = 'https://www.bestofwoodprojects.com'

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '')
  return 'http://localhost:3000'
}

export function getMetadataBase(): URL {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  const raw = fromEnv || DEFAULT_PRODUCTION_URL
  const withSlash = raw.endsWith('/') ? raw : `${raw}/`
  return new URL(withSlash)
}
