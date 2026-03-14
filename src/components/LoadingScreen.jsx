import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        style={{
          width: 220,
          height: 260,
          marginBottom: 16,
          filter: 'drop-shadow(0 0 25px rgba(0, 212, 255, 0.3)) drop-shadow(0 0 60px rgba(123, 47, 255, 0.2))',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <img 
          src="/assets/profile.png" 
          alt="Shaik Afnan" 
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
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
