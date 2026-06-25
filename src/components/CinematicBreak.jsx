import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import heroBg from '../assets/hero.png'

export default function CinematicBreak() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative h-[50vh] md:h-[65vh] overflow-hidden" ref={ref}>
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(8,8,16,0.35) 0%, rgba(8,8,16,0.60) 100%)' }}
      />
      {/* Subtle teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(26,191,174,0.10) 0%, transparent 60%)' }}
      />

      {/* Script overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-white/70 leading-tight"
          style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
        >
          Crafted in Bangalore.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-white/40 leading-tight"
          style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
        >
          Brewed for the bold.
        </motion.p>
      </div>
    </section>
  )
}
