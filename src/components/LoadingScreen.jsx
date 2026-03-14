import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 300,
          letterSpacing: '6px',
          textTransform: 'uppercase',
        }}
        className="text-gradient-premium"
      >
        Shaik Afnan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}
      >
        Founder · Engineer · Visionary
      </motion.p>
      <div className="loading-bar">
        <div className="loading-bar-inner" />
      </div>
    </motion.div>
  )
}
