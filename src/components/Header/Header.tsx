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
    <header className="flex h-20 items-center justify-between bg-[#f4f7fb] px-[max(7.2vw,calc((100vw-75rem)/2))] min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:h-18 max-[760px]:px-[6vw]">
      <a
        className="inline-flex cursor-pointer items-center gap-3 font-display text-[19px] font-bold tracking-[-1px] no-underline max-[420px]:gap-2 max-[420px]:text-base"
        href="#home"
        aria-label="Open Route Free Finder home"
        onClick={(event) => {
          if (!isHome) {
            event.preventDefault()
            onNavigateHome()
          }
        }}
      >
        <span className="font-normal text-[#6b7d91]">RouteFreeFinder</span>
      </a>
      <nav
        className="flex items-center gap-9 text-md font-semibold max-[760px]:gap-4 max-[760px]:text-[12px] max-[420px]:gap-3 max-[420px]:text-xs"
        aria-label="Main navigation"
      >
        <a
          className="cursor-pointer no-underline transition-opacity hover:opacity-65 focus-visible:outline-offset-4 motion-reduce:transition-none"
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
          className="cursor-pointer no-underline transition-opacity hover:opacity-65 focus-visible:outline-offset-4 motion-reduce:transition-none"
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
