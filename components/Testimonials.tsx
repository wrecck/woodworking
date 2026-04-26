const quotes = [
  {
    text: 'They matched existing trim perfectly and delivered the wall unit two days ahead of schedule. Communication was clear the whole way.',
    author: '— Morgan L., Brooklyn',
  },
  {
    text: 'Our café counters see heavy use; a year in, the oak still looks new. The team thought through every detail with our contractor.',
    author: '— Priya K., Queens',
  },
  {
    text: 'From toy samples to bulk delivery, they made the kindergarten order painless. Parents comment on the quality constantly.',
    author: '— Steven R., School board',
  },
] as const

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading" className="section-title section-title--center">
          Testimonials
        </h2>
        <hr className="accent-line accent-line--center" />
        <p style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 2rem', color: 'var(--color-muted)' }}>
          Word of mouth built this studio. Here’s what recent clients said about working with us.
        </p>
        <div className="testimonials__grid">
          {quotes.map((q) => (
            <blockquote key={q.author} className="quote">
              <p>{q.text}</p>
              <footer>{q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
