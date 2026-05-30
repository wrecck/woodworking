import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogPostCta } from '@/components/BlogPostCta'
import { ArticleJsonLd } from '@/components/JsonLd'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/woodworking-blogs'
import { getSiteUrl } from '@/lib/site'

type PageProps = { params: { slug: string } }

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const blog = getBlogBySlug(params.slug)
  if (!blog) return {}

  const url = `/woodworking-blog/${blog.slug}`

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.image, width: 1200, height: 630, alt: blog.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  }
}

export default function WoodworkingBlogPage({ params }: PageProps) {
  const blog = getBlogBySlug(params.slug)
  if (!blog) notFound()

  const siteUrl = getSiteUrl()
  const pageUrl = `${siteUrl}/woodworking-blog/${blog.slug}`

  return (
    <>
      <ArticleJsonLd
        title={blog.title}
        description={blog.description}
        url={pageUrl}
        image={`${siteUrl}${blog.image}`}
      />
      <Header />

      <main style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <article className="blog-post">
          <div className="container">
            <div className="blog-post__inner">
              <nav className="blog-post__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link href="/#woodworking-blogs">Woodworking Blogs</Link>
                <span aria-hidden="true"> / </span>
                <span>{blog.title}</span>
              </nav>

              <h1 className="section-title">{blog.title}</h1>
              <hr className="accent-line" />

              <figure className="blog-post__hero-image">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  width={1200}
                  height={800}
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>

              <p className="blog-post__lead">{blog.excerpt}</p>

              {blog.sections.map((section, i) => (
                <section key={i}>
                  {section.heading ? <h2>{section.heading}</h2> : null}
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </section>
              ))}

              <BlogPostCta planImage={blog.image} />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
