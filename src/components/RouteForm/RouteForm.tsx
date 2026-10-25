export const RouteForm = ({
  setError,
}: {
  setError: (error: string) => void
}) => {
  const handleSearch = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError('We could not load routes right now. Please try again later.')
  }

  return (
    <form className="search-card" onSubmit={handleSearch}>
      <div className="form-heading">
        <div>
          <span className="card-kicker">START SOMEWHERE</span>
          <h2>Where to next?</h2>
        </div>
        <span className="compass-mark" aria-hidden="true">
          ✳
        </span>
      </div>
      <label htmlFor="origin">I’m starting from</label>
      <div className="input-wrap">
        <span className="field-icon" aria-hidden="true">
          ⌖
        </span>
        <input
          id="origin"
          name="origin"
          placeholder="City or place"
          autoComplete="address-level2"
          required
        />
      </div>
      <label htmlFor="destination">I’d like to go to</label>
      <div className="input-wrap">
        <span className="field-icon destination-icon" aria-hidden="true">
          ⌖
        </span>
        <input
          id="destination"
          name="destination"
          placeholder="Somewhere new (or specific)"
          autoComplete="off"
          required
        />
      </div>
      <button className="search-button" type="submit">
        Find my route <span aria-hidden="true">→</span>
      </button>
    </form>
  )
}
