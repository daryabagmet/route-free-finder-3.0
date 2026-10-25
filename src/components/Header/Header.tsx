type HeaderProps = {
  isHome: boolean
  onNavigateHome: () => void
  onNavigateAdd: () => void
  onNavigateAbout: () => void
}

export const Header = ({
  isHome,
  onNavigateHome,
  onNavigateAdd,
  onNavigateAbout,
}: HeaderProps) => {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="Open Route Free Finder home"
        onClick={(event) => {
          if (!isHome) {
            event.preventDefault()
            onNavigateHome()
          }
        }}
      >
        <span>
          Route<span className="brand-light">FreeFinder</span>
        </span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a
          href="#about"
          onClick={(event) => {
            if (!isHome) {
              event.preventDefault()
              onNavigateAbout()
            }
          }}
        >
          About
        </a>
        <a
          className="nav-cta"
          href="#add"
          onClick={(event) => {
            event.preventDefault()
            onNavigateAdd()
          }}
        >
          Get involved
        </a>
      </nav>
    </header>
  )
}
