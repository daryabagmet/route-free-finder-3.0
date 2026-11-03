export const Footer = ({ onNavigateHome }: { onNavigateHome: () => void }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex min-h-20 items-center justify-between gap-4 bg-[#f4f7fb] px-[max(7.2vw,calc((100vw-75rem)/2))] font-mono text-xs tracking-wide text-[#5e7085] min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:px-[6vw]">
      <span>© {currentYear} RouteFreeFinder. All rights reserved.</span>
      <a
        className="cursor-pointer no-underline transition-opacity hover:opacity-65 focus-visible:outline-offset-4 motion-reduce:transition-none"
        href="#home"
        onClick={(event) => {
          event.preventDefault()
          onNavigateHome()
        }}
      >
        Back to top
      </a>
    </footer>
  )
}
