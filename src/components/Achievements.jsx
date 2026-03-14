import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiStar, HiAcademicCap, HiLightningBolt, HiBadgeCheck, HiGlobe } from 'react-icons/hi'

const achievements = [
  {
    icon: <HiGlobe size={32} />,
    title: 'Founder & CEO',
    subtitle: 'Maa Nest',
    color: '#d4af37',
  },
  {
    icon: <HiAcademicCap size={32} />,
    title: 'Ex President',
    subtitle: 'IPD Club – Innovation & Product Development',
    color: '#00d4ff',
  },
  {
    icon: <HiBadgeCheck size={32} />,
    title: '#1 Winner',
    subtitle: 'Troubleshoot Ideathon 2025',
    color: '#ff2afc',
  },
  {
    icon: <HiStar size={32} />,
    title: 'Top 3',
    subtitle: 'IBM Hackathon',
    color: '#7b2fff',
  },
  {
    icon: <HiLightningBolt size={32} />,
    title: '5× Winner',
    subtitle: 'Project Exhibition',
    color: '#d4af37',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Achievements</div>
          <h2 className="section-title">
            Recognition & <span className="text-gradient-gold">Awards</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Milestones that reflect a commitment to excellence and innovation.
          </p>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 20,
        }}>
          {achievements.map((a, i) => (
            <SectionReveal key={a.title + a.subtitle} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'var(--color-bg-glass)',
                  border: '1px solid var(--color-border-glass)',
                  borderRadius: 20,
                  padding: '36px 24px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Glow background */}
                <div style={{
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${a.color}20, transparent)`,
                  filter: 'blur(20px)',
                }} />

                <div style={{
                  color: a.color,
                  marginBottom: 16,
                  position: 'relative',
                }}>
                  {a.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 6,
                  position: 'relative',
                }}>
                  {a.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5,
                  position: 'relative',
                }}>
                  {a.subtitle}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
