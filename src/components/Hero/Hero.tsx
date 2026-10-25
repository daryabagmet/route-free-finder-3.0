import { useState } from 'react'
import { RouteForm } from '../RouteForm/RouteForm'

export const Hero = () => {
  const [error, setError] = useState('')

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> YOUR NEXT ROUTE{' '}
            <span className="eyebrow-dot" />
            LISBON
          </span>
          <h1>
            Less planning.
            <br />
            More <span>going.</span>
          </h1>
          <p className="hero-description">
            A little help finding your next obstacle-free route. Pick a place to
            start, and let the good trips follow.
          </p>
        </div>

        <RouteForm setError={setError} />
      </section>
      <section
        className="results-section"
        id="results"
        aria-labelledby="results-title"
      >
        <div className="results-content">
          <div>
            <h2 id="results-title">
              Your next route
              <br />
              starts here.
            </h2>
            <p className="section-intro">
              Your results will show up here once you’ve searched. Not sure
              where to begin? That’s kind of the point.
            </p>
          </div>
          <div className="results-panel" aria-live="polite">
            <div className="results-panel-top">
              <span className="results-pin" aria-hidden="true">
                ⌖
              </span>
              <span>YOUR ROUTES</span>
              <span className="results-dots" aria-hidden="true">
                ···
              </span>
            </div>
            {error ? (
              <div className="error-message" role="alert">
                <span className="error-symbol" aria-hidden="true">
                  !
                </span>
                <div>
                  <strong>Something went wrong</strong>
                  <p>{error}</p>
                </div>
              </div>
            ) : (
              <div className="empty-results">
                <span className="empty-path" aria-hidden="true">
                  ↗
                </span>
                <strong>No routes just yet</strong>
                <p>Enter your starting point and destination to get going.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
