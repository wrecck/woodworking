import { useMemo, useState } from 'react'
import { publicAsset } from '../utils/publicAsset'

const img = publicAsset('pexels-cottonbro-7480718.jpg')

const articles = [
  {
    title: "Furniture for Steven's School",
    text: 'We furnished classrooms with chairs, desks, a teacher’s table, and solid wood doors. The school team was thrilled with the install timeline and finish quality.',
    position: '50% 35%',
  },
  {
    title: 'Wooden Kitchen',
    text: 'A full kitchen built from the client’s drawings: island, cabinetry, shelving, and hardwood accents coordinated with stone and appliances.',
    position: '50% 55%',
  },
  {
    title: 'Kindergarten Toys',
    text: 'We produced more than sixty unique wooden toys for multiple age groups — sanded smooth, rounded edges, and finished with child-safe coatings.',
    position: '50% 70%',
  },
  {
    title: 'Boutique Office Fit-out',
    text: 'Reception desk, conference table, and slat wall features in white oak — wired for power, installed overnight to avoid business disruption.',
    position: '45% 40%',
  },
] as const

const VISIBLE = 3

export function Articles() {
  const [start, setStart] = useState(0)
  const maxStart = Math.max(0, articles.length - VISIBLE)
  const slice = useMemo(() => articles.slice(start, start + VISIBLE), [start])

  return (
    <section className="articles" id="articles">
      <div className="container">
        <div className="articles__intro">
          <h2 className="section-title section-title--center">Articles</h2>
          <hr className="accent-line accent-line--center" />
          <p>
            A few recent builds. Each month we ship dozens of custom wood pieces for schools, homes, and workplaces
            across the region.
          </p>
        </div>

        <div className="carousel">
          <button
            type="button"
            className="carousel__btn"
            aria-label="Previous articles"
            disabled={start <= 0}
            onClick={() => setStart((s) => Math.max(0, s - 1))}
          >
            ‹
          </button>
          <div className="carousel__track carousel__track--3">
            {slice.map((item) => (
              <article key={item.title} className="card article-card">
                <div className="article-card__media">
                  <img src={img} alt="" style={{ objectFit: 'cover', objectPosition: item.position }} />
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.text}</p>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="carousel__btn"
            aria-label="Next articles"
            disabled={start >= maxStart}
            onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
