import Image from 'next/image'
import Link from 'next/link'
import { woodworkingBlogs } from '@/lib/woodworking-blogs'

export function WoodworkingBlogs() {
  return (
    <section className="articles" id="woodworking-blogs" aria-labelledby="woodworking-blogs-heading">
      <div className="container">
        <div className="articles__intro">
          <h2 id="woodworking-blogs-heading" className="section-title section-title--center">
            Woodworking Blogs
          </h2>
          <hr className="accent-line accent-line--center" />
          <p>
            Easy DIY woodworking plans explained step by step. Each article covers a free project you can build at
            home—economical, useful, and perfect for sharing on Facebook, Instagram, and Pinterest.
          </p>
        </div>

        <div className="blog-grid">
          {woodworkingBlogs.map((blog) => (
            <article key={blog.slug} className="card article-card blog-grid__item">
              <Link href={`/woodworking-blog/${blog.slug}`} className="blog-grid__link">
                <div className="article-card__media blog-grid__media">
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    sizes="(max-width: 899px) 100vw, 33vw"
                  />
                </div>
                <h3 className="card__title">{blog.title}</h3>
                <p className="card__text">{blog.excerpt}</p>
                <span className="blog-grid__read-more">Read the full guide →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
