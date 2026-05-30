'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLeft = [
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
] as const

const navRight = [
  { label: 'Woodworking blogs', href: '/#woodworking-blogs' },
  { label: 'Free plans', href: '/#download-plans' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div
          id="site-nav"
          className={`site-header__nav-group${open ? ' site-header__nav-group--open' : ''}`}
        >
          <nav className="site-header__nav site-header__nav--left" aria-label="Primary left">
            {navLeft.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <nav className="site-header__nav site-header__nav--right" aria-label="Primary right">
            {navRight.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <Link className="site-header__brand" href="/" aria-label="Best of Wood Projects home">
          <Image
            className="site-header__logo"
            src="/logo2.png"
            alt="Best of Wood Projects"
            width={180}
            height={114}
            priority
          />
        </Link>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}
