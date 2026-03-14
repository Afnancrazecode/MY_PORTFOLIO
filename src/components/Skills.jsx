import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

const skillGroups = [
  {
    title: 'Programming',
    accent: '#00d4ff',
    skills: [
      { name: 'JavaScript', level: 92 },
      { name: 'JSON / REST APIs', level: 88 },
      { name: 'Full Stack Development', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Technologies',
    accent: '#7b2fff',
    skills: [
      { name: 'MERN Stack', level: 90 },
      { name: 'Spring Boot', level: 72 },
      { name: 'MySQL', level: 78 },
      { name: 'Cloud Computing', level: 70 },
      { name: 'Power BI', level: 68 },
    ],
  },
  {
    title: 'Interests & Expertise',
    accent: '#d4af37',
    skills: [
      { name: 'Artificial Intelligence', level: 80 },
      { name: 'IoT Systems', level: 75 },
      { name: 'Data Driven Applications', level: 78 },
      { name: 'Product Innovation', level: 90 },
      { name: 'Entrepreneurship', level: 95 },
    ],
  },
]

function SkillBar({ name, level, accent, delay }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6,
      }}>
        <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)' }}>{name}</span>
        <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${accent}, ${accent}80)`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            Technical <span className="text-gradient-neon">Proficiency</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            A diverse skill set spanning programming, modern frameworks, and emerging technologies.
          </p>
        </SectionReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {skillGroups.map((group, gi) => (
            <SectionReveal key={group.title} delay={gi * 0.15}>
              <div className="glass-card" style={{ padding: 32 }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 24,
                  color: group.accent,
                }}>
                  {group.title}
                </h3>
                {group.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    accent={group.accent}
                    delay={0.3 + si * 0.1}
                  />
                ))}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
