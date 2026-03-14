import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'

export default function Education() {
  return (
    <section id="education" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Education</div>
          <h2 className="section-title">
            Academic <span className="text-gradient-neon">Foundation</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: 600,
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(123, 47, 255, 0.04))',
              border: '1px solid rgba(0, 212, 255, 0.12)',
              borderRadius: 20,
              padding: 36,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'linear-gradient(90deg, var(--color-neon), var(--color-accent-purple))',
            }} />

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: 'rgba(0, 212, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-neon)',
              }}>
                <HiAcademicCap size={28} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 700,
                }}>
                  MVJ College of Engineering
                </h3>
                <p style={{
                  fontSize: 15,
                  color: 'var(--color-text-secondary)',
                }}>
                  Bachelor of Engineering — Computer Science
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <HiCalendar size={16} style={{ color: 'var(--color-text-muted)' }} />
                <span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>2022 – 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <HiLocationMarker size={16} style={{ color: 'var(--color-text-muted)' }} />
                <span style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>Bengaluru, India</span>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  )
}
