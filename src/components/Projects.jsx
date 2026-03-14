import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const categories = ['All', 'AI Projects', 'Web Applications', 'Innovation', 'Entrepreneurship']

const projects = [
  {
    title: 'Maa Nest Platform',
    desc: 'A full-scale startup platform connecting parents with trusted childcare services and verified caregivers. Built with MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    cat: 'Entrepreneurship',
    github: 'https://github.com/Afnancrazecode',
    accent: '#d4af37',
  },
  {
    title: 'Smart Shopping Cart',
    desc: 'IoT-powered intelligent shopping cart system that automates billing and enhances retail experience using sensors and microcontrollers.',
    tags: ['C++', 'IoT', 'Hardware'],
    cat: 'Innovation',
    github: 'https://github.com/Afnancrazecode/SmartShoppingCart',
    accent: '#7b2fff',
  },
  {
    title: 'Color To Grayscale Converter',
    desc: 'Image processing application that converts color images to grayscale using advanced algorithms and Python libraries.',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    cat: 'AI Projects',
    github: 'https://github.com/Afnancrazecode/ColorToGrayscale',
    accent: '#00d4ff',
  },
  {
    title: 'OfflineHub',
    desc: 'A comprehensive web app with various utilities and games designed to work offline. Feature-rich progressive web application.',
    tags: ['JavaScript', 'HTML/CSS', 'PWA'],
    cat: 'Web Applications',
    github: 'https://github.com/Afnancrazecode',
    accent: '#00d4ff',
  },
  {
    title: 'AI Chatbot System',
    desc: 'Intelligent conversational AI chatbot built with machine learning algorithms for natural language understanding and automated responses.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    cat: 'AI Projects',
    github: 'https://github.com/Afnancrazecode',
    accent: '#7b2fff',
  },
  {
    title: 'Data Analytics Dashboard',
    desc: 'Interactive business intelligence dashboard built with Power BI and React for real-time data visualization and insights.',
    tags: ['React', 'Power BI', 'Data Viz'],
    cat: 'Web Applications',
    github: 'https://github.com/Afnancrazecode',
    accent: '#d4af37',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active)

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Featured Projects</div>
          <h2 className="section-title">
            Crafted with <span className="text-gradient-gold">precision</span> & purpose
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            A showcase of projects spanning AI, web development, IoT, and entrepreneurship.
          </p>
        </SectionReveal>

        {/* Category Tabs */}
        <SectionReveal delay={0.1}>
          <div style={{
            display: 'flex',
            gap: 8,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 50,
                  border: '1px solid',
                  borderColor: active === cat ? 'var(--color-neon)' : 'rgba(255,255,255,0.08)',
                  background: active === cat ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                  color: active === cat ? 'var(--color-neon)' : 'var(--color-text-secondary)',
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Project Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card"
                  style={{
                    padding: 32,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Accent line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <HiCode size={24} style={{ color: p.accent }} />
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.target.style.color = 'var(--color-neon)')}
                      onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-muted)')}
                    >
                      <HiExternalLink size={20} />
                    </a>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 10,
                  }}>
                    {p.title}
                  </h3>

                  <p style={{
                    fontSize: 14,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: 20,
                    flex: 1,
                  }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: '4px 12px',
                          borderRadius: 50,
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          fontSize: 12,
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
