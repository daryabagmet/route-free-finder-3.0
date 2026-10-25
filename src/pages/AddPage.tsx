import { useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

type FormType = 'route' | 'image'

type AddPageProps = {
  onNavigateHome: () => void
  onNavigateAdd: () => void
  onNavigateAbout: () => void
}

export const AddPage = ({
  onNavigateHome,
  onNavigateAdd,
  onNavigateAbout,
}: AddPageProps) => {
  const [formType, setFormType] = useState<FormType>('route')
  const [notice, setNotice] = useState('')
  const routeTabRef = useRef<HTMLButtonElement>(null)
  const imageTabRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice(
      'Submissions are not connected yet, so your information has not been sent.',
    )
  }

  const selectForm = (type: FormType) => {
    setFormType(type)
    setNotice('')
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault()
      const nextForm = formType === 'route' ? 'image' : 'route'
      selectForm(nextForm)
      if (nextForm === 'route') {
        routeTabRef.current?.focus()
      } else {
        imageTabRef.current?.focus()
      }
    }
  }

  return (
    <>
      <Header
        isHome={false}
        onNavigateHome={onNavigateHome}
        onNavigateAdd={onNavigateAdd}
        onNavigateAbout={onNavigateAbout}
      />
      <main className="add-page">
        <div className="add-page-inner">
          <a
            className="add-page-back"
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              onNavigateHome()
            }}
          >
            ← Back to Route Free Finder
          </a>
          <div className="add-page-heading">
            <span className="section-label">HELP MAKE ROUTES BETTER</span>
            <h1>Share what you know.</h1>
            <p>
              Add a new accessible route or share a photo and its location with
              the community.
            </p>
          </div>

          <div
            className="submission-tabs"
            role="tablist"
            aria-label="Choose a form"
          >
            <button
              ref={routeTabRef}
              type="button"
              className={formType === 'route' ? 'is-active' : ''}
              id="route-tab"
              role="tab"
              aria-selected={formType === 'route'}
              aria-controls="submission-panel"
              tabIndex={formType === 'route' ? 0 : -1}
              onClick={() => selectForm('route')}
              onKeyDown={handleTabKeyDown}
            >
              Create a route
            </button>
            <button
              ref={imageTabRef}
              type="button"
              className={formType === 'image' ? 'is-active' : ''}
              id="image-tab"
              role="tab"
              aria-selected={formType === 'image'}
              aria-controls="submission-panel"
              tabIndex={formType === 'image' ? 0 : -1}
              onClick={() => selectForm('image')}
              onKeyDown={handleTabKeyDown}
            >
              Upload images
            </button>
          </div>

          <form
            className="submission-form"
            id="submission-panel"
            role="tabpanel"
            aria-labelledby={formType === 'route' ? 'route-tab' : 'image-tab'}
            tabIndex={0}
            onSubmit={handleSubmit}
          >
            {formType === 'route' ? (
              <>
                <div className="submission-form-heading">
                  <span className="card-kicker">NEW ROUTE</span>
                  <h2>Route details</h2>
                  <p>
                    Share the route and the accessibility details travelers
                    need.
                  </p>
                </div>
                <div className="submission-fields">
                  <label>
                    Route name
                    <input name="routeName" autoComplete="off" required />
                  </label>
                  <label>
                    Starting point
                    <input
                      name="origin"
                      autoComplete="street-address"
                      required
                    />
                  </label>
                  <label>
                    Destination
                    <input name="destination" autoComplete="off" required />
                  </label>
                  <label>
                    Distance (km)
                    <input
                      name="distance"
                      type="number"
                      min="0"
                      step="0.1"
                      required
                    />
                  </label>
                  <label>
                    Estimated time (minutes)
                    <input
                      name="duration"
                      type="number"
                      min="1"
                      step="1"
                      required
                    />
                  </label>
                  <label>
                    Surface
                    <select name="surface" defaultValue="" required>
                      <option value="" disabled>
                        Select a surface
                      </option>
                      <option value="paved">Paved</option>
                      <option value="gravel">Gravel</option>
                      <option value="mixed">Mixed</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label>
                    Difficulty
                    <select name="difficulty" defaultValue="" required>
                      <option value="" disabled>
                        Select difficulty
                      </option>
                      <option value="easy">Easy</option>
                      <option value="moderate">Moderate</option>
                      <option value="challenging">Challenging</option>
                    </select>
                  </label>
                  <label>
                    Wheelchair accessible?
                    <select
                      name="wheelchairAccessible"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="partially">Partially</option>
                      <option value="no">No</option>
                      <option value="unknown">Not sure</option>
                    </select>
                  </label>
                  <label className="submission-field-wide">
                    Route description
                    <textarea name="description" rows={4} required />
                  </label>
                  <label className="submission-field-wide">
                    Accessibility notes
                    <textarea
                      name="accessibilityNotes"
                      rows={4}
                      placeholder="For example: steps, gradients, curb cuts, or rest areas"
                      required
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="submission-form-heading">
                  <span className="card-kicker">ROUTE IMAGE</span>
                  <h2>Image details</h2>
                  <p>
                    Add a descriptive label, coordinates, and an image of a
                    route or location.
                  </p>
                </div>
                <div className="submission-fields">
                  <label className="submission-field-wide">
                    Image label
                    <input
                      name="imageLabel"
                      placeholder="For example: Ramp at the north entrance"
                      required
                    />
                  </label>
                  <label>
                    Latitude
                    <input
                      name="latitude"
                      type="number"
                      min="-90"
                      max="90"
                      step="any"
                      required
                    />
                  </label>
                  <label>
                    Longitude
                    <input
                      name="longitude"
                      type="number"
                      min="-180"
                      max="180"
                      step="any"
                      required
                    />
                  </label>
                  <label className="submission-field-wide">
                    Image file
                    <input name="image" type="file" accept="image/*" required />
                  </label>
                </div>
              </>
            )}
            <div className="flex justify-end">
              <button className="search-button w-4xs" type="submit">
                Submit {formType === 'route' ? 'route' : 'image'}
              </button>
            </div>
            {notice && (
              <p className="submission-notice" role="status">
                {notice}
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer onNavigateHome={onNavigateHome} />
    </>
  )
}
