import { useState } from 'react'
import { RouteForm } from '../RouteForm/RouteForm'

export const Hero = () => {
  const [error, setError] = useState('')

  return (
    <>
      <section
        className="relative grid min-h-145 grid-cols-[1fr_0.8fr] items-center gap-[8%] overflow-hidden bg-[#12345a] bg-[radial-gradient(ellipse_at_12%_100%,rgba(111,177,255,0.18),transparent_40%),linear-gradient(rgba(220,237,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(220,237,255,0.045)_1px,transparent_1px)] bg-size-[auto,54px_54px,54px_54px] px-[max(7.2vw,calc((100vw-75rem)/2))] text-[#f4f7fb] min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-9 max-[760px]:px-[6vw] max-[760px]:pt-18 max-[760px]:pb-20"
        id="home"
      >
        <div
          className="pointer-events-none absolute -right-34 -bottom-86 size-162 rounded-full border border-[rgba(168,213,255,0.16)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 -bottom-70 size-134 rounded-full border border-[rgba(168,213,255,0.16)]"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-3 text-xs tracking-widest text-[#c7d8eb]">
            <span className="inline-block size-2 rounded-full bg-[#a8d5ff]" />{' '}
            YOUR NEXT ROUTE{' '}
            <span className="inline-block size-2 rounded-full bg-[#a8d5ff]" />
            LISBON
          </span>
          <h1 className="mt-6 mb-0 font-display text-[clamp(3.5rem,6.2vw,5.125rem)] leading-[0.99] font-medium tracking-[-0.075em] max-[760px]:text-[clamp(3.5rem,12vw,4.75rem)]">
            Less planning.
            <br />
            More <span className="text-[#a8d5ff]">exploring.</span>
          </h1>
          <p className="mt-6 mb-7 max-w-92 text-[17px] leading-[1.8] text-[#b4c1b9]">
            A little help finding your next obstacle-free route. Pick a place to
            start, and let the good trips follow.
          </p>
        </div>

        <RouteForm setError={setError} />
      </section>

      <section
        className="px-[max(7.2vw,calc((100vw-75rem)/2))] p-22 min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:px-[6vw] max-[760px]:py-16"
        id="results"
        aria-labelledby="results-title"
      >
        <div className="grid grid-cols-[0.9fr_1fr] items-center gap-[12%] pt-12 max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:pt-9">
          <div>
            <h2
              className="m-0 font-display text-[clamp(2.5rem,4.6vw,3.625rem)] leading-none font-medium tracking-[-0.075em] max-[760px]:text-[clamp(2.625rem,9vw,3.5rem)]"
              id="results-title"
            >
              Your results will show up here.
            </h2>
          </div>
          <div
            className="flex flex-col justify-between rounded-sm border border-[#d8e1eb] bg-white/45 p-5"
            aria-live="polite"
          >
            {error ? (
              <div
                className="mx-auto flex max-w-84 items-center gap-3 rounded-sm border border-[#edcfbf] bg-[#fff8f3] p-4"
                role="alert"
              >
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f6e4d9] font-mono text-sm text-[#a44b31]"
                  aria-hidden="true"
                >
                  !
                </span>
                <div>
                  <strong className="font-display text-sm font-medium">
                    Something went wrong
                  </strong>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#78837b]">
                    {error}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center py-3 text-center">
                <span
                  className="mb-3 grid size-9 place-items-center rounded-full bg-[#e2effc] text-lg text-[#17549a]"
                  aria-hidden="true"
                >
                  ↗
                </span>
                <strong className="font-display text-sm font-medium">
                  No routes just yet
                </strong>
                <p className="mt-1 text-[12px] leading-relaxed text-[#78837b]">
                  Enter your starting point and destination to get going.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
