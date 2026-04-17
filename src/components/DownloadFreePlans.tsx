const DEFAULT_SAVE_URL = 'https://manager.codelooma.com/woodworking/save-opt-in.php'

/** Remote PHP endpoint (override with VITE_OPT_IN_SAVE_URL in .env). */
function optInSaveUrl(): string {
  const fromEnv = import.meta.env.VITE_OPT_IN_SAVE_URL as string | undefined
  return (fromEnv && fromEnv.trim()) || DEFAULT_SAVE_URL
}

export function DownloadFreePlans() {
  return (
    <section className="download-plans" id="free-plans" aria-labelledby="free-plans-heading">
      <div className="container">
        <div className="download-plans__inner">
          <h2 id="free-plans-heading" className="section-title">
            Download Free Easy Plans
          </h2>
          <hr className="accent-line" />
          <p className="download-plans__lead">
            Enter your name and email. You’ll land on a thank-you page and the plan image will download automatically.
          </p>
          <form className="download-plans__form" action={optInSaveUrl()} method="post">
            <label htmlFor="optin-name">Name</label>
            <input id="optin-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />

            <label htmlFor="optin-email">Email</label>
            <input
              id="optin-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="your@email.com"
            />

            <button className="btn btn--primary" type="submit">
              Get free plans
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
