import { Features } from '../Features/Features'

export const About = () => {
  return (
    <section
      className="bg-[#eaf1f8] px-[max(7.2vw,calc((100vw-75rem)/2))] pt-20 pb-23 min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:px-[6vw] max-[760px]:py-16"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="flex items-end justify-between gap-10 px-0 py-11 max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-4 max-[760px]:pt-9 max-[760px]:pb-7">
        <h2
          className="m-0 font-display text-[clamp(2.5rem,4.6vw,3.625rem)] leading-none font-medium tracking-[-0.075em] max-[760px]:text-[clamp(2.625rem,9vw,3.5rem)]"
          id="about-title"
        >
          Good trips don’t
          <br />
          need a big plan.
        </h2>
      </div>
      <Features />
    </section>
  )
}
