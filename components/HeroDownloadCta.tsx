'use client'

function scrollToDownloadSection() {
  document.getElementById('download-plans')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroDownloadCta() {
  return (
    <div className="hero__download-plans">
      <p>Download Free Easy Plans</p>
      <button type="button" className="btn hero__download-btn" onClick={scrollToDownloadSection}>
        Downloads
      </button>
    </div>
  )
}
