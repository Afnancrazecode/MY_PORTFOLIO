import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiLightningBolt, HiCode, HiChip } from 'react-icons/hi'

const cards = [
  {
    icon: <HiLightningBolt size={28} />,
    title: 'Entrepreneur',
    desc: 'Founder & CEO of Maa Nest — building impactful products that connect parents with trusted childcare services and verified caregivers.',
    gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.03))',
    border: 'rgba(212, 175, 55, 0.2)',
    iconColor: '#d4af37',
  },
  {
    icon: <HiCode size={28} />,
    title: 'Engineer',
    desc: 'Full-stack developer experienced in MERN stack, Spring Boot, REST APIs, and backend technologies. Building scalable, production-ready applications.',
    gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 212, 255, 0.03))',
    border: 'rgba(0, 212, 255, 0.2)',
    iconColor: '#00d4ff',
  },
  {
    icon: <HiChip size={28} />,
    title: 'Product Innovator',
    desc: 'Passionate about AI, IoT, data-driven systems, and product innovation. Creating technology that improves lives and drives meaningful impact.',
    gradient: 'linear-gradient(135deg, rgba(123, 47, 255, 0.15), rgba(123, 47, 255, 0.03))',
    border: 'rgba(123, 47, 255, 0.2)',
    iconColor: '#7b2fff',
  },
]

export default function About() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">About Me</div>
          <h2 className="section-title">
            I believe in <span className="text-gradient-neon">innovation</span>,{' '}
            entrepreneurship, and building technology that improves people's lives.
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            A software engineer and entrepreneur from Bengaluru, India, driven by the ambition to
            create products that solve real-world problems and leave a lasting impact.
          </p>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {cards.map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: card.gradient,
                  border: `1px solid ${card.border}`,
                  borderRadius: 20,
                  padding: 36,
                  height: '100%',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  color: card.iconColor,
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 12,
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {card.desc}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
