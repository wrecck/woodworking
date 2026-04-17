import { publicAsset } from '../utils/publicAsset'

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

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.8 8.001a2.2 2.2 0 0 0-1.54-1.55C18.2 6 12 6 12 6s-6.2 0-7.26.45A2.2 2.2 0 0 0 3.2 8 23.87 23.87 0 0 0 3 12a23.9 23.9 0 0 0 .2 4 2.2 2.2 0 0 0 1.54 1.54C5.8 18 12 18 12 18s6.2 0 7.26-.45a2.2 2.2 0 0 0 1.54-1.54 23.9 23.9 0 0 0 .2-4 23.87 23.87 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <a href="#" aria-label="Best of Wood Projects home">
          <img
            className="site-footer__logo"
            src={publicAsset('logo.png')}
            alt="Best of Wood Projects"
            width={200}
            height={72}
          />
        </a>
        <nav className="site-footer__nav" aria-label="Footer">
          {links.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="site-footer__social">
          <a href="https://www.facebook.com/WoodworkerProject" target="_blank" rel="noreferrer" aria-label="Facebook">
            <IconFacebook />
          </a>
       {/*   <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
            <IconYoutube />
          </a> */}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Best of Wood Projects</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  )
}
