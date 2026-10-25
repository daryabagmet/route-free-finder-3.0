export const Footer = ({ onNavigateHome }: { onNavigateHome: () => void }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <span>© {currentYear} RouteFreeFinder. All rights reserved.</span>
      <a
        href="#home"
        onClick={(event) => {
          event.preventDefault()
          onNavigateHome()
        }}
      >
        Back to top ↑
      </a>
    </footer>
  )
}
