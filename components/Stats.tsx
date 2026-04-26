const items = [
  { value: '73', label: 'Years of operation' },
  { value: '15', label: 'Wood craftsmen' },
  { value: '3', label: 'Studios in New York' },
  { value: '300+', label: 'Happy clients' },
] as const

export function Stats() {
  return (
    <section className="stats" aria-label="Studio facts">
      <div className="container">
        <div className="stats__grid">
          {items.map(({ value, label }) => (
            <div key={label}>
              <p className="stats__num">{value}</p>
              <hr className="stats__rule" />
              <p className="stats__label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
