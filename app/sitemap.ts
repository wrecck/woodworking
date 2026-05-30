import type { MetadataRoute } from 'next'
import { getAllBlogSlugs } from '@/lib/woodworking-blogs'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${base}/download-free-woodworking-plans-for-the-diy-woodworker`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/download-new-free-woodworking`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${base}/woodworking-blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...blogPages]
}
