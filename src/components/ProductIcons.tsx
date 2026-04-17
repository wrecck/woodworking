export function IconFurniture() {
  return (
    <svg className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="12" y="20" width="40" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20V14h24v6" stroke="currentColor" strokeWidth="2" />
      <path d="M22 32h20" stroke="#d9815b" strokeWidth="2" />
      <rect x="26" y="36" width="12" height="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function IconToys() {
  return (
    <svg className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M18 44c0-8 6-18 14-22 8 4 14 14 14 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="26" r="6" stroke="#d9815b" strokeWidth="2" />
      <path d="M26 18l-4-4M38 18l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconDecoration() {
  return (
    <svg className="card__icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" />
      <path d="M32 20v8M32 36v8M20 32h8M36 32h8" stroke="#d9815b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="#d9815b" />
    </svg>
  )
}
