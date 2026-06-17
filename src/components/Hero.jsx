import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background layers */}
      {/* Layer 1: real photo */}
      <img
        src="https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Layer 2: dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-bg-primary/75" />
      {/* Layer 3: teal/gold glow accents */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 10% 90%, rgba(26,191,174,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 10%, rgba(201,168,76,0.10) 0%, transparent 55%)
          `,
        }}
      />

      {/* Giant background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="font-display text-[22vw] leading-none text-white/[0.025] tracking-widest"
        >
          BREW
        </span>
      </div>

      {/* Decorative diamond / pyramid shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large diamond top-right */}
        <svg
          className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.04]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon points="50,2 98,50 50,98 2,50" stroke="#1ABFAE" strokeWidth="0.5" fill="none" />
          <polygon points="50,15 85,50 50,85 15,50" stroke="#C9A84C" strokeWidth="0.3" fill="none" />
          <polygon points="50,28 72,50 50,72 28,50" stroke="#1ABFAE" strokeWidth="0.2" fill="none" />
        </svg>

        {/* Small diamond bottom-left */}
        <svg
          className="absolute bottom-10 left-8 w-[200px] h-[200px] opacity-[0.06]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon points="50,2 98,50 50,98 2,50" stroke="#1ABFAE" strokeWidth="0.8" fill="none" />
        </svg>

        {/* Horizontal line accents */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-accent-teal/10 to-transparent" />
        <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-accent-gold/8 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-accent-teal" />
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-accent-teal">
            Indiranagar · Bangalore
          </span>
          <span className="h-px w-12 bg-accent-teal" />
        </motion.div>

        {/* Main headline */}
        <motion.h1 {...fadeUp(0.2)} className="font-display leading-none tracking-wider mb-2">
          <span className="block text-[18vw] md:text-[13vw] lg:text-[11vw] text-text-primary">
            ARENA
          </span>
        </motion.h1>

        <motion.div {...fadeUp(0.35)} className="mb-8">
          <span className="font-serif italic text-2xl md:text-4xl text-accent-gold tracking-[0.15em]">
            Artisanal Brewkitchen
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.5)} className="font-sans text-text-muted text-base md:text-lg tracking-wide max-w-md mx-auto mb-10">
          Crafted in Bangalore. Brewed for the Bold.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#beers"
            className="group px-8 py-3.5 bg-accent-teal text-bg-primary font-sans text-sm tracking-widest uppercase font-medium hover:bg-accent-teal/90 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Beers</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/20 text-text-primary font-sans text-sm tracking-widest uppercase hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
          >
            Reserve a Table
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent-teal to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
