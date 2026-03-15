import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiLightningBolt, HiCode, HiChip, HiGlobe, HiOutlineCube } from 'react-icons/hi'

export default function About() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Identity</div>
          <h2 className="section-title">
            Blending <span className="text-gradient-neon">engineering</span> with{' '}
            entrepreneurial vision.
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 48 }}>
            A software engineer and entrepreneur from Bengaluru, India, driven by the ambition to
            create products that solve real-world problems.
          </p>
        </SectionReveal>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: 'minmax(180px, auto)',
          gap: 20,
        }}>
          {/* Main Card: Visionary Builder */}
          <motion.div
            style={{
              gridColumn: 'span 8',
              gridRow: 'span 2',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 24,
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ color: 'var(--color-neon)', marginBottom: 20 }}>
              <HiOutlineCube size={32} />
            </div>
            <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>The Visionary Builder</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 17, lineHeight: 1.6, maxWidth: 500 }}>
              I don't just write code; I architect solutions. As the Founder and CEO of Maa Nest, 
              I am dedicated to bridging the gap between parents and quality childcare through 
              innovative technology.
            </p>
            {/* Decorative element */}
            <div style={{
              position: 'absolute',
              bottom: -20,
              right: -20,
              width: 150,
              height: 150,
              background: 'radial-gradient(circle, var(--color-neon-dim) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />
          </motion.div>

          {/* Card: Tech Stack */}
          <motion.div
            style={{
              gridColumn: 'span 4',
              background: 'rgba(0, 212, 255, 0.03)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              borderRadius: 24,
              padding: 30,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            whileHover={{ y: -5 }}
          >
            <div style={{ color: 'var(--color-neon)', marginBottom: 12 }}>
              <HiCode size={24} />
            </div>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Full-Stack Mastery</h4>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>MERN · Spring Boot · AI Integration</p>
          </motion.div>

          {/* Card: Location */}
          <motion.div
            style={{
              gridColumn: 'span 4',
              background: 'rgba(212, 175, 55, 0.03)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
              borderRadius: 24,
              padding: 30,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            whileHover={{ y: -5 }}
          >
            <div style={{ color: 'var(--color-gold)', marginBottom: 12 }}>
              <HiGlobe size={24} />
            </div>
            <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Based in Bengaluru</h4>
            <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>India's Silicon Valley</p>
          </motion.div>

          {/* Card: Product Innovation */}
          <motion.div
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 2',
              background: 'rgba(123, 47, 255, 0.03)',
              border: '1px solid rgba(123, 47, 255, 0.15)',
              borderRadius: 24,
              padding: 30,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <div style={{ color: 'var(--color-accent-purple)', marginBottom: 20 }}>
              <HiChip size={28} />
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>Innovation Core</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              Specializing in IoT, AI, and smart systems. I thrive on the intersection of hardware 
              interactivity and seamless software experiences.
            </p>
          </motion.div>

          {/* Card: Impact/Philosophy (Small) */}
          <motion.div
            style={{
              gridColumn: 'span 8',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 24,
              padding: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            whileHover={{ x: 5 }}
          >
            <div>
              <h4 style={{ fontWeight: 600, color: 'var(--color-platinum)' }}>"Innovation is not just a goal, it's a responsibility."</h4>
              <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>— Shaik Afnan</p>
            </div>
            <div style={{ color: 'var(--color-neon)', opacity: 0.5 }}>
              <HiLightningBolt size={24} />
            </div>
          </motion.div>
        </div>

        {/* Responsive Adjustments (Mobile handling via media queries would be in CSS, but let's keep it clean here) */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 900px) {
            #about .section-container > div:last-child {
              display: flex !important;
              flex-direction: column !important;
            }
          }
        `}} />
      </div>
    </section>
  )
}
