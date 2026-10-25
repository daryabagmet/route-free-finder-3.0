import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { AddRoute } from './components/AddRoute/AddRoute'
import { Footer } from './components/Footer/Footer'
import { AddPage } from './pages/AddPage'

function App() {
  const [page, setPage] = useState<'home' | 'add'>('home')

  const navigateHome = () => {
    setPage('home')
    window.scrollTo({ top: 0 })
  }

  const navigateAdd = () => {
    setPage('add')
    window.scrollTo({ top: 0 })
  }

  const navigateAbout = () => {
    setPage('home')
    window.setTimeout(
      () => document.getElementById('about')?.scrollIntoView(),
      0,
    )
  }

  if (page === 'add') {
    return (
      <AddPage
        onNavigateHome={navigateHome}
        onNavigateAdd={navigateAdd}
        onNavigateAbout={navigateAbout}
      />
    )
  }

  return (
    <main>
      <Header
        isHome
        onNavigateHome={navigateHome}
        onNavigateAdd={navigateAdd}
        onNavigateAbout={navigateAbout}
      />
      <Hero />
      <About />
      <AddRoute onNavigateAdd={navigateAdd} />
      <Footer onNavigateHome={navigateHome} />
    </main>
  )
}

export default App
