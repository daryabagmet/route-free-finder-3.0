import { Features } from '../Features/Features'

export const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-heading">
        <h2 id="about-title">
          Good trips don’t
          <br />
          need a big plan.
        </h2>
        <p>
          We’re making it easier to get out there. Here’s what Route Free Finder
          is all about.
        </p>
      </div>
      <Features />
    </section>
  )
}
