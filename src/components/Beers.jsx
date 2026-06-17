import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const beers = [
  {
    abbr: 'HW',
    name: 'German Hefeweizen',
    style: 'Wheat Beer',
    abv: '5.2%',
    desc: 'Hazy, unfiltered wheat beer with banana and clove esters, a citrus-forward finish.',
    color: '#C9A84C',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, rgba(201,168,76,0.18) 0%, rgba(8,8,16,0.95) 70%)',
  },
  {
    abbr: 'BW',
    name: 'Belgian Wit',
    style: 'White Ale',
    abv: '4.8%',
    desc: 'Spiced with coriander and orange peel. Light-bodied, hazy, and refreshingly effervescent.',
    color: '#E8E0C0',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, rgba(232,224,192,0.12) 0%, rgba(8,8,16,0.95) 70%)',
  },
  {
    abbr: 'CP',
    name: 'Czech Pilsner',
    style: 'Lager',
    abv: '4.5%',
    desc: 'Crisp, clean, and golden. Noble hop bitterness with a perfectly dry, refreshing finish.',
    color: '#E8D870',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, rgba(232,216,112,0.14) 0%, rgba(8,8,16,0.95) 70%)',
  },
  {
    abbr: 'IPA',
    name: 'American IPA',
    style: 'India Pale Ale',
    abv: '6.5%',
    desc: 'Bold, resinous hops dominate with tropical fruit and pine notes. Assertively bitter.',
    color: '#1ABFAE',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, rgba(26,191,174,0.15) 0%, rgba(8,8,16,0.95) 70%)',
  },
  {
    abbr: 'IM',
    name: 'Indian Mead',
    style: 'Honey Wine',
    abv: '7.0%',
    desc: 'Fermented from pure honey with indigenous botanicals. A uniquely Indian spirit.',
    color: '#B8C5D4',
    bgGradient: 'radial-gradient(ellipse at 40% 60%, rgba(184,197,212,0.12) 0%, rgba(8,8,16,0.95) 70%)',
  },
]

export default function Beers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const scrollRef = useRef(null)

  return (
    <section id="beers" className="py-24 md:py-36 overflow-hidden" ref={ref}>
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-teal mb-3">
              In-house Microbrewery
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide text-text-primary">
              OUR BREWS
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block font-sans text-sm text-text-muted max-w-xs text-right leading-relaxed"
          >
            Every batch brewed fresh on-premises. Scroll to explore our rotating artisanal selection.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar px-6 pb-4 md:px-10 snap-x snap-mandatory"
      >
        {beers.map((beer, i) => (
          <motion.div
            key={beer.abbr}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group flex-shrink-0 w-72 md:w-80 snap-start relative rounded-sm overflow-hidden cursor-pointer"
            style={{
              background: beer.bgGradient,
              boxShadow: '0 0 0 rgba(26,191,174,0)',
              transition: 'box-shadow 0.5s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 40px rgba(26,191,174,0.10)`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(26,191,174,0)'}
          >
            {/* Card background */}
            <div className="absolute inset-0 bg-bg-card border border-white/5 group-hover:border-accent-teal/30 transition-all duration-500" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{ background: beer.bgGradient }}
            />

            {/* Fill animation bar — simulates beer glass fill on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1 transition-all duration-700"
              style={{ background: beer.color }}
            />

            <div className="relative z-10 p-7 md:p-8 h-full flex flex-col min-h-[340px]">
              {/* Abbreviation */}
              <div
                className="font-display text-8xl leading-none opacity-10 group-hover:opacity-20 transition-all duration-500 mb-auto select-none"
                style={{ color: beer.color }}
              >
                {beer.abbr}
              </div>

              <div className="mt-auto">
                {/* Style badge */}
                <span
                  className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 mb-4 border"
                  style={{ color: beer.color, borderColor: `${beer.color}40` }}
                >
                  {beer.style}
                </span>

                {/* Name */}
                <h3 className="font-serif text-2xl text-text-primary mb-3 leading-snug">
                  {beer.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-5">
                  {beer.desc}
                </p>

                {/* ABV */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="font-sans text-xs tracking-widest uppercase text-text-muted">ABV</span>
                  <span
                    className="font-display text-xl tracking-wider"
                    style={{ color: beer.color }}
                  >
                    {beer.abv}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-6 md:w-10" aria-hidden="true" />
      </div>

      {/* Scroll hint */}
      <p className="md:hidden font-sans text-[10px] tracking-widest uppercase text-text-muted text-center mt-5">
        ← Drag to explore →
      </p>
    </section>
  )
}
