import Image from 'next/image'

export function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <figure className="about__figure">
          <Image
            src="/pexels-cottonbro-7480718.jpg"
            alt="Craftsperson shaping wood in the workshop"
            width={520}
            height={680}
            loading="lazy"
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </figure>
        <div className="about__copy">
          <h2 className="section-title">About Us</h2>
          <hr className="accent-line" />
          <p>
            Our studio was established with a simple mission: honor the grain. Since then, we’ve grown alongside
            generations of makers, and woodworking knowledge has been passed down while we embrace modern tools and
            finishes.
          </p>
          <p>
            Today, Best of Wood Projects is one of the most sought-after wood studios in New York. We deliver
            high-quality work for homes, schools, and businesses. Our clients choose us for:
          </p>
          <ul className="about__list">
            <li>Exceptionally high quality across every product.</li>
            <li>A wide selection of furniture, toys, and décor.</li>
            <li>Raw materials from suppliers we trust.</li>
            <li>Traditional craft paired with precise, modern fabrication.</li>
          </ul>
          <a className="video-link" href="#testimonials">
            Watch Our Video →
          </a>
        </div>
      </div>
    </section>
  )
}
