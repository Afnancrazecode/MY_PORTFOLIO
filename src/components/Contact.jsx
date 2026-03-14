import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiMail, HiArrowRight } from 'react-icons/hi'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

const socials = [
  {
    icon: <FaLinkedinIn size={22} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shaik-afnan',
    color: '#0a66c2',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    href: 'https://github.com/Afnancrazecode',
    color: '#fff',
  },
  {
    icon: <FaInstagram size={22} />,
    label: 'Instagram',
    href: 'https://www.instagram.com/afnan__shaikh_',
    color: '#e1306c',
  },
  {
    icon: <HiMail size={22} />,
    label: 'Email',
    href: 'mailto:afnanshaikh@example.com',
    color: '#00d4ff',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.02))',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', textAlign: 'center' }}>
        <SectionReveal>
          <div className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</div>
          <h2 className="section-title" style={{ margin: '0 auto 20px' }}>
            Let's Build Something{' '}
            <span className="text-gradient-neon">Incredible</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            Whether it's a startup idea, collaboration, or just a conversation about tech — I'd love to connect.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 48,
          }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 28px',
                  cursor: 'pointer',
                  color: s.color,
                }}
              >
                {s.icon}
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                }}>
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <motion.a
            href="mailto:afnanshaikh@example.com"
            whileHover={{ scale: 1.05 }}
            className="btn-primary"
            style={{
              display: 'inline-flex',
              fontSize: 16,
              padding: '18px 40px',
            }}
          >
            <span>Say Hello</span>
            <HiArrowRight size={18} />
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  )
}
