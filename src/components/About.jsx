import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '5', label: 'Craft Brews' },
  { value: '3', label: 'Floors' },
  { value: '200+', label: 'Seats' },
  { value: '2021', label: 'Est.' },
]

function useReveal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

export default function About() {
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="py-24 md:py-36 px-6 max-w-7xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Big section number */}
          <span className="absolute -top-8 -left-4 font-display text-[120px] leading-none text-white/[0.04] select-none pointer-events-none">
            01
          </span>

          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            {/* Real brewery photo */}
            <img
              src="https://images.pexels.com/photos/5864291/pexels-photo-5864291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000"
              alt="Arena Brewhouse brewery interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark teal tint overlay for brand cohesion */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(8,8,16,0.2) 0%, rgba(8,8,16,0.55) 100%)' }}
            />

            {/* Decorative pyramid outline on top of image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-20" fill="none">
                <polygon points="100,10 190,100 100,190 10,100" stroke="#1ABFAE" strokeWidth="1" />
                <polygon points="100,30 170,100 100,170 30,100" stroke="#C9A84C" strokeWidth="0.5" />
                <polygon points="100,55 145,100 100,145 55,100" stroke="#1ABFAE" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-accent-gold/20" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-teal mb-4">
            The Arena Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide text-text-primary mb-6">
            WHERE CRAFT MEETS CULTURE
          </h2>
          <p className="font-serif text-lg md:text-xl text-text-muted leading-relaxed mb-6 italic">
            "A fine sit-down brewery unlike any other in Bangalore."
          </p>
          <p className="font-sans text-text-muted leading-relaxed mb-4 text-[15px]">
            Housed in an iconic pyramid-shaped structure on 100 Feet Road, Indiranagar, Arena Artisanal Brewkitchen is where bold architecture meets bolder flavors. Three floors of carefully curated experience — from intimate basement dining to a vibrant rooftop DJ space.
          </p>
          <p className="font-sans text-text-muted leading-relaxed mb-10 text-[15px]">
            Our in-house microbrewery crafts every drop with intention, pairing artisanal beers with a global kitchen spanning Japanese, Continental, and Asian cuisines. This is not a bar. This is an arena.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <span className="block font-display text-4xl text-accent-gold tracking-wide">
                  {value}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-text-muted mt-1 block">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
