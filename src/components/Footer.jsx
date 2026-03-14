import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginBottom: 20,
        }}>
          {[
            { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/in/shaik-afnan' },
            { icon: <FaGithub size={16} />, href: 'https://github.com/Afnancrazecode' },
            { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/afnan__shaikh_' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--color-text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-neon)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p style={{
          fontSize: 13,
          color: 'var(--color-text-muted)',
          letterSpacing: '0.5px',
        }}>
          © {new Date().getFullYear()} Shaik Afnan. Built with ❤️ and code.
        </p>
      </div>
    </footer>
  )
}
