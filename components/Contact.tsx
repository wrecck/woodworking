'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

const MAP_EMBED =
  'https://www.google.com/maps?q=107-1+109th+St,+South+Richmond+Hill,+NY+11419&output=embed'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container contact__grid">
        <div>
          <h2 id="contact-heading" className="section-title">
            Contact Us
          </h2>
          <hr className="accent-line" />
          <p className="contact__lead">
            Want to talk through a project, order ready-made pieces, or ask a question? Send the form or reach us
            directly.
          </p>
          <div className="contact__block">
            <strong>Address</strong>
            <span>107-1 109th St, South Richmond Hill, NY 11419</span>
          </div>
          <div className="contact__block">
            <strong>Hours</strong>
            <span>
              Monday – Saturday: 11 AM – 9 PM
              <br />
              Sunday: 11 AM – 7 PM
            </span>
          </div>
          <div className="contact__block">
            <strong>Contacts</strong>
            <span>
              +1 (234) 567 89 00
              <br />
              hello@bestofwoodprojects.com
            </span>
          </div>
          <iframe
            className="contact__map"
            title="Studio location — 107-1 109th St, South Richmond Hill, NY 11419"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Enter your full name*" required autoComplete="name" />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number*"
            required
            autoComplete="tel"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your e-mail*"
            required
            autoComplete="email"
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Type your message" rows={4} />

          <button className="btn btn--primary" type="submit">
            Request a Quote
          </button>
          {status === 'sent' ? (
            <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--color-muted)' }} role="status">
              Thanks — we’ll reply shortly. (Demo: form does not send data.)
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
