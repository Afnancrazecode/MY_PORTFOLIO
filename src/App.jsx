import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Startup from './components/Startup'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import GitHubSection from './components/GitHubSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Startup />
            <Achievements />
            <Skills />
            <Experience />
            <Education />
            <GitHubSection />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
