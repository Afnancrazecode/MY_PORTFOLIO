import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiBriefcase } from 'react-icons/hi'

const timeline = [
  {
    title: 'Founder & CEO',
    company: 'Maa Nest',
    period: '2026 – Present',
    desc: 'Building a platform to connect parents with trusted childcare services and verified caregivers.',
    accent: '#d4af37',
  },
  {
    title: 'Junior Software Engineer',
    company: 'Edutainer',
    period: '2025',
    desc: 'Developed full-stack web applications and contributed to product engineering.',
    accent: '#00d4ff',
  },
  {
    title: 'President',
    company: 'IPD MVJCE',
    period: '2024 – 2025',
    desc: 'Led the Innovation & Product Development club, organizing hackathons and workshops.',
    accent: '#7b2fff',
  },
  {
    title: 'Cloud & Connectivity Instructor',
    company: 'Selfcode Academy',
    period: '2024',
    desc: 'Taught cloud computing and networking concepts to aspiring developers.',
    accent: '#ff2afc',
  },
  {
    title: 'Web Developer',
    company: 'CodeAlpha',
    period: '2024',
    desc: 'Built responsive web applications and contributed to frontend development projects.',
    accent: '#00d4ff',
  },
  {
    title: 'AIML Intern',
    company: 'Suvidha Foundation',
    period: '2023',
    desc: 'Worked on AI and machine learning projects for social impact initiatives.',
    accent: '#d4af37',
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Codec Technologies',
    period: '2023',
    desc: 'Built full-stack applications using MongoDB, Express, React, and Node.js.',
    accent: '#7b2fff',
  },
  {
    title: 'Power BI Intern',
    company: 'Cognifyz',
    period: '2023',
    desc: 'Created interactive dashboards and data visualizations for business analytics.',
    accent: '#00d4ff',
  },
  {
    title: 'Java Programming Intern',
    company: 'CodTech',
    period: '2023',
    desc: 'Developed Java applications and deepened OOP programming skills.',
    accent: '#d4af37',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Professional <span className="text-gradient-neon">Journey</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            A timeline of impactful roles spanning engineering, leadership, and entrepreneurship.
          </p>
        </SectionReveal>

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--color-neon-dim), rgba(123, 47, 255, 0.15), transparent)',
          }} />

          {timeline.map((item, i) => (
            <SectionReveal key={item.title + item.company} delay={i * 0.08}>
              <div style={{
                display: 'flex',
                gap: 24,
                marginBottom: 32,
                position: 'relative',
                paddingLeft: 52,
              }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: 12,
                  top: 8,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: 'var(--color-bg-primary)',
                  border: `2px solid ${item.accent}`,
                  boxShadow: `0 0 12px ${item.accent}30`,
                  zIndex: 1,
                }} />

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card"
                  style={{
                    padding: '24px 28px',
                    flex: 1,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Left accent */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: item.accent,
                    borderRadius: '3px 0 0 3px',
                  }} />

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 8,
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 17,
                        fontWeight: 700,
                      }}>
                        {item.title}
                      </h3>
                      <span style={{ fontSize: 14, color: item.accent, fontWeight: 500 }}>
                        {item.company}
                      </span>
                    </div>
                    <span style={{
                      fontSize: 12,
                      color: 'var(--color-text-muted)',
                      padding: '4px 12px',
                      borderRadius: 50,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 14,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
