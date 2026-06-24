import { motion } from 'framer-motion'

const timeSlots = ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']
const guestOptions = ['1–2 Guests', '3–4 Guests', '5–8 Guests', '9+ Guests']

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background photo */}
      <img
        src="https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(100deg, rgba(8,8,16,0.97) 0%, rgba(8,8,16,0.80) 45%, rgba(8,8,16,0.30) 100%),
            linear-gradient(to top, rgba(8,8,16,0.95) 0%, transparent 35%)
          `,
        }}
      />
      {/* Teal glow bottom-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 5% 95%, rgba(26,191,174,0.15) 0%, transparent 55%)',
        }}
      />

      {/* Decorative vertical teal line — right side */}
      <div className="absolute right-10 md:right-16 top-24 bottom-28 w-px bg-gradient-to-b from-transparent via-accent-teal/25 to-transparent hidden md:block" />

      {/* Content — bottom-left anchored, extra padding-bottom for booking strip */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-14 pb-36 md:pb-40 max-w-[1400px] mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 mb-4 md:mb-6"
        >
          <span className="h-px w-10 bg-accent-teal flex-shrink-0" />
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-accent-teal">
            Indiranagar · Bangalore
          </span>
        </motion.div>

        {/* Giant headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="-ml-1 md:-ml-2 mb-4 md:mb-6"
        >
          <h1
            className="font-display leading-[0.85] tracking-wider text-text-primary"
            style={{ fontSize: 'clamp(96px, 22vw, 280px)' }}
          >
            ARENA
          </h1>
        </motion.div>

        {/* Bottom row: subtitle + CTA left, tagline right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif italic text-xl md:text-2xl text-accent-gold tracking-[0.1em] mb-6 md:mb-7">
              Artisanal Brewkitchen
            </p>
            <div className="flex flex-row gap-3 md:gap-4">
              <a
                href="#beers"
                className="px-6 md:px-8 py-3 md:py-3.5 bg-accent-teal text-bg-primary font-sans text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-accent-teal/90 transition-colors duration-300"
              >
                Explore Beers
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-3.5 border border-white/25 text-text-primary font-sans text-xs md:text-sm tracking-widest uppercase hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden md:block text-right max-w-[200px]"
          >
            <p className="font-sans text-text-muted text-sm leading-relaxed">
              Crafted in Bangalore.<br />Brewed for the Bold.
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute right-10 md:right-16 bottom-36 md:bottom-44 flex-col items-center gap-2 hidden md:flex"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-text-muted">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent-teal/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Horizontal booking strip — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.08]"
        style={{ background: 'rgba(8,8,16,0.85)', backdropFilter: 'blur(20px)' }}
      >
        <form
          onSubmit={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="max-w-[1400px] mx-auto px-6 md:px-14 py-4 flex flex-col md:flex-row items-stretch md:items-center gap-3"
        >
          <div className="flex-1 flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <label className="absolute top-1.5 left-4 font-sans text-[9px] tracking-[0.3em] uppercase text-text-muted pointer-events-none">Date</label>
              <input
                type="date"
                className="w-full bg-white/[0.05] border border-white/[0.08] text-text-primary font-sans text-sm px-4 pt-5 pb-2 focus:outline-none focus:border-accent-teal transition-colors duration-200 [color-scheme:dark] hover:border-white/20"
              />
            </div>
            <div className="flex-1 relative">
              <label className="absolute top-1.5 left-4 font-sans text-[9px] tracking-[0.3em] uppercase text-text-muted pointer-events-none">Time</label>
              <select
                defaultValue=""
                className="w-full bg-white/[0.05] border border-white/[0.08] text-text-primary font-sans text-sm px-4 pt-5 pb-2 focus:outline-none focus:border-accent-teal transition-colors duration-200 appearance-none hover:border-white/20"
              >
                <option value="" disabled className="bg-bg-primary">Select time</option>
                {timeSlots.map(t => <option key={t} value={t} className="bg-bg-primary">{t}</option>)}
              </select>
            </div>
            <div className="flex-1 relative">
              <label className="absolute top-1.5 left-4 font-sans text-[9px] tracking-[0.3em] uppercase text-text-muted pointer-events-none">Guests</label>
              <select
                defaultValue=""
                className="w-full bg-white/[0.05] border border-white/[0.08] text-text-primary font-sans text-sm px-4 pt-5 pb-2 focus:outline-none focus:border-accent-teal transition-colors duration-200 appearance-none hover:border-white/20"
              >
                <option value="" disabled className="bg-bg-primary">Select guests</option>
                {guestOptions.map(g => <option key={g} value={g} className="bg-bg-primary">{g}</option>)}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="flex-shrink-0 bg-accent-teal text-bg-primary font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-accent-teal/90 transition-colors duration-300 font-medium whitespace-nowrap"
          >
            Book a Table
          </button>
        </form>
      </motion.div>
    </section>
  )
}
