import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiEye, HiHeart, HiCube, HiSparkles } from 'react-icons/hi'

const items = [
  {
    icon: <HiEye size={28} />,
    title: 'Vision',
    desc: 'To become the most trusted platform for childcare services, empowering every parent to find safe, reliable, and quality care for their children.',
    color: '#00d4ff',
  },
  {
    icon: <HiHeart size={28} />,
    title: 'Mission',
    desc: 'Connecting parents with verified caregivers through technology, ensuring every child receives the best possible care with transparency and trust.',
    color: '#d4af37',
  },
  {
    icon: <HiCube size={28} />,
    title: 'Product',
    desc: 'A comprehensive platform featuring verified caregiver profiles, real-time booking, parent reviews, background checks, and seamless communication.',
    color: '#7b2fff',
  },
  {
    icon: <HiSparkles size={28} />,
    title: 'Impact',
    desc: 'Making childcare accessible and trustworthy, reducing parent anxiety, and creating employment opportunities for skilled caregivers across India.',
    color: '#ff2afc',
  },
]

export default function Startup() {
  return (
    <section id="startup" style={{ position: 'relative' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative' }}>
        <SectionReveal>
          <div className="section-label">Startup</div>
          <h2 className="section-title">
            <span className="text-gradient-gold">Maa Nest</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 16 }}>
            A mission-driven startup solving childcare accessibility problems.
          </p>
          <p style={{
            fontSize: 14,
            color: 'var(--color-text-muted)',
            marginBottom: 60,
            fontStyle: 'italic',
          }}>
            Founder & CEO · Since 2026
          </p>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {items.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                  border: `1px solid ${item.color}20`,
                  borderRadius: 20,
                  padding: 32,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${item.color}15, transparent)`,
                }} />

                <div style={{
                  color: item.color,
                  marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 10,
                  color: item.color,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: 14,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
