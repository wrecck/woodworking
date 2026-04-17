import { IconDecoration, IconFurniture, IconToys } from './ProductIcons'

const items = [
  {
    icon: <IconFurniture />,
    title: 'Wooden Furniture',
    text: 'We build every kind of furniture: tables, chairs, beds, kitchens, built-ins, and more — tailored to your space.',
  },
  {
    icon: <IconToys />,
    title: 'Toys',
    text: 'Unique wooden toys for children: durable, smooth, and finished with materials chosen for safety and longevity.',
  },
  {
    icon: <IconDecoration />,
    title: 'Decoration',
    text: 'Carving, burning, and custom accents for home or office — from wall panels to one-of-a-kind statement pieces.',
  },
] as const

export function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__intro">
          <h2 className="section-title section-title--center">Products</h2>
          <hr className="accent-line accent-line--center" />
          <p>At Best of Wood Projects, you can order the wood pieces and furnishings your space needs.</p>
        </div>

        <div className="products__grid">
          {items.map((item) => (
            <article key={item.title} className="card">
              {item.icon}
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
              <a className="card__link" href="#contact">
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
