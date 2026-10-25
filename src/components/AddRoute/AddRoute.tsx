export const AddRoute = ({ onNavigateAdd }: { onNavigateAdd: () => void }) => {
  return (
    <section className="contribute-section" id="contribute">
      <div className="contribute-decoration" aria-hidden="true">
        ✳
      </div>
      <div className="contribute-copy">
        <span className="section-label">WE ARE BETTER TOGETHER</span>
        <h2>
          Got a good idea?
          <br />
          <span>There’s room for you.</span>
        </h2>
        <p>
          Help us make getting out there a little easier for everyone. Share
          photos for specific routes or locations, once they have been moderated
          we will add them to the new or existing routes.
        </p>
      </div>
      <a
        className="contribute-button w-sm"
        href="#add"
        onClick={(event) => {
          event.preventDefault()
          onNavigateAdd()
        }}
      >
        I want to contribute
        <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}
