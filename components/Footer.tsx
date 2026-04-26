import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'About us', href: '#about' },
  { label: 'Free plans', href: '#free-plans' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact us', href: '#contact' },
] as const

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.5c0-3.4 2-5.3 5.1-5.3 1.5 0 3 .3 3 .3v3.4h-1.7c-1.7 0-2.2 1-2.2 2.1V12h3.8l-.6 3h-3.2v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <Link href="/" aria-label="Best of Wood Projects home">
          <Image
            className="site-footer__logo"
            src="/logo.png"
            alt="Best of Wood Projects"
            width={200}
            height={72}
          />
        </Link>
        <nav className="site-footer__nav" aria-label="Footer">
          {links.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="site-footer__social">
          <a href="https://www.facebook.com/WoodworkerProject" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <IconFacebook />
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {year} Best of Wood Projects</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}
