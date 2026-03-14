import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'

function FloatingParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['rgba(0,212,255,', 'rgba(123,47,255,', 'rgba(212,175,55,']

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + p.alpha + ')'
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Particles */}
      <FloatingParticles />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0,
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123, 47, 255, 0.06) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '120px 24px 80px',
        width: '100%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="section-label" style={{ marginBottom: 24 }}>
            Welcome to my universe
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 7vw, 80px)',
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
            marginBottom: 24,
          }}
        >
          Building Technology{' '}
          <br />
          <span className="text-gradient-neon">That Solves</span>{' '}
          <br />
          Real-World Problems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--color-text-secondary)',
            maxWidth: 550,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Founder & CEO · Software Engineer · Product Builder
          <br />
          <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9em' }}>
            Bengaluru, India
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
            <HiArrowRight />
          </a>
          <a href="#contact" className="btn-outline">
            <HiMail />
            <span>Connect With Me</span>
          </a>
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: 'flex',
            gap: 48,
            marginTop: 80,
            flexWrap: 'wrap',
          }}
        >
          {[
            { num: '5+', label: 'Awards Won' },
            { num: '25+', label: 'Projects Built' },
            { num: '7+', label: 'Internships' },
            { num: '1', label: 'Startup Founded' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 32,
                fontWeight: 700,
              }} className="text-gradient-gold">
                {s.num}
              </div>
              <div style={{
                fontSize: 13,
                color: 'var(--color-text-muted)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 2, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: 20,
            height: 32,
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div style={{
            width: 3,
            height: 8,
            borderRadius: 2,
            background: 'var(--color-neon)',
          }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
