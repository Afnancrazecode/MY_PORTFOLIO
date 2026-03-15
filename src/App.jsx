import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

          {/* V2: Premium Texture Overlays */}
          <div className="grain-overlay" />
          <motion.div 
            className="light-leak"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ top: '20%', left: '10%' }}
          />
        </>
      )}
    </>
  )
}

export default App
