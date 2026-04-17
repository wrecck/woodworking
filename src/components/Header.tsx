import { useState } from 'react'
import { publicAsset } from '../utils/publicAsset'

const nav = [
  { label: 'About us', href: '#about' },
  { label: 'Free plans', href: '#free-plans' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact us', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#" aria-label="Best of Wood Projects home">
          <img className="site-header__logo" src={publicAsset('logo2.png')} alt="" width={180} height={48} />
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav${open ? ' site-header__nav--open' : ''}`}
          aria-label="Primary"
        >
          {nav.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header__phones" aria-label="Phone numbers">
          +1 (234) 567 89 00 <span aria-hidden="true"> | </span> +1 (234) 567 89 01
        </div>
      </div>
    </header>
  )
}
