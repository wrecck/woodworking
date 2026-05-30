import Link from 'next/link'

type BlogPostCtaProps = {
  planImage: string
}

function planFilename(imagePath: string): string {
  return imagePath.split('/').pop() ?? 'woodworking-plan.png'
}

export function BlogPostCta({ planImage }: BlogPostCtaProps) {
  return (
    <>
      <p className="blog-post__plan-download">
        <a href={planImage} download={planFilename(planImage)}>
          Click here to download this plan
        </a>
      </p>

      <aside className="blog-post__cta" aria-label="Download more plans">
        <h2>Get the Rest of Our Easy Woodworking Plans</h2>
        <p>
          Ready to build more? Download our complete collection of free, beginner-friendly woodworking plans—cut lists,
          step-by-step instructions, and projects designed to save you money while you learn.
        </p>
        <Link className="btn btn--primary" href="/#download-plans">
          Download Free Easy Woodworking Plans
        </Link>
      </aside>
    </>
  )
}
