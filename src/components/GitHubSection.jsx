import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { HiExternalLink, HiStar } from 'react-icons/hi'

const languageColors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C++': '#f34b7d',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
}

export default function GitHubSection() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/Afnancrazecode/repos?sort=updated&per_page=6')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="github" style={{ position: 'relative' }}>
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Open Source</div>
          <h2 className="section-title">
            GitHub <span className="text-gradient-neon">Repositories</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 60 }}>
            Explore my open-source contributions and personal projects.
          </p>
        </SectionReveal>

        {loading ? (
          <div style={{ textAlign: 'center', padding: 60 }}>
            <div style={{
              width: 40,
              height: 40,
              border: '3px solid rgba(255,255,255,0.05)',
              borderTop: '3px solid var(--color-neon)',
              borderRadius: '50%',
              margin: '0 auto',
              animation: 'spin 1s linear infinite',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {repos.map((repo, i) => (
              <SectionReveal key={repo.id} delay={i * 0.1}>
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card"
                  style={{
                    display: 'block',
                    padding: 28,
                    height: '100%',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 12,
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'var(--color-neon)',
                    }}>
                      {repo.name}
                    </h3>
                    <HiExternalLink size={16} style={{ color: 'var(--color-text-muted)' }} />
                  </div>

                  <p style={{
                    fontSize: 13,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: 16,
                    minHeight: 40,
                  }}>
                    {repo.description || 'No description provided.'}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    {repo.language && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: languageColors[repo.language] || '#999',
                        }} />
                        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                          {repo.language}
                        </span>
                      </div>
                    )}
                    {repo.stargazers_count > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <HiStar size={14} style={{ color: 'var(--color-gold)' }} />
                        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                          {repo.stargazers_count}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.a>
              </SectionReveal>
            ))}
          </div>
        )}

        <SectionReveal delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a
              href="https://github.com/Afnancrazecode"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View All Repositories
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
