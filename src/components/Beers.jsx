import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const beers = [
  {
    abbr: 'HW',
    name: 'German Hefeweizen',
    style: 'Wheat Beer',
    abv: '5.2%',
    abvNum: 52,
    desc: 'Hazy, unfiltered wheat beer with banana and clove esters, a citrus-forward finish.',
    notes: ['Banana', 'Clove', 'Citrus'],
    color: '#C9A84C',
    bgGradient: 'linear-gradient(160deg, rgba(201,168,76,0.22) 0%, rgba(8,8,16,0) 60%)',
  },
  {
    abbr: 'BW',
    name: 'Belgian Wit',
    style: 'White Ale',
    abv: '4.8%',
    abvNum: 48,
    desc: 'Spiced with coriander and orange peel. Light-bodied, hazy, and refreshingly effervescent.',
    notes: ['Coriander', 'Orange', 'Wheat'],
    color: '#E8E0C0',
    bgGradient: 'linear-gradient(160deg, rgba(232,224,192,0.18) 0%, rgba(8,8,16,0) 60%)',
  },
  {
    abbr: 'CP',
    name: 'Czech Pilsner',
    style: 'Lager',
    abv: '4.5%',
    abvNum: 45,
    desc: 'Crisp, clean, and golden. Noble hop bitterness with a perfectly dry, refreshing finish.',
    notes: ['Hop', 'Malt', 'Crisp'],
    color: '#E8D870',
    bgGradient: 'linear-gradient(160deg, rgba(232,216,112,0.20) 0%, rgba(8,8,16,0) 60%)',
  },
  {
    abbr: 'IPA',
    name: 'American IPA',
    style: 'India Pale Ale',
    abv: '6.5%',
    abvNum: 65,
    desc: 'Bold, resinous hops dominate with tropical fruit and pine notes. Assertively bitter.',
    notes: ['Tropical', 'Pine', 'Resin'],
    color: '#1ABFAE',
    bgGradient: 'linear-gradient(160deg, rgba(26,191,174,0.22) 0%, rgba(8,8,16,0) 60%)',
  },
  {
    abbr: 'IM',
    name: 'Indian Mead',
    style: 'Honey Wine',
    abv: '7.0%',
    abvNum: 70,
    desc: 'Fermented from pure honey with indigenous botanicals. A uniquely Indian spirit.',
    notes: ['Honey', 'Floral', 'Botanical'],
    color: '#B8C5D4',
    bgGradient: 'linear-gradient(160deg, rgba(184,197,212,0.18) 0%, rgba(8,8,16,0) 60%)',
  },
]

export default function Beers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="beers" className="py-24 md:py-36 overflow-hidden" ref={ref}>
      {/* Header */}
      <div className="px-6 md:px-14 max-w-[1400px] mx-auto mb-12 md:mb-16">
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
            className="hidden md:block font-sans text-sm text-text-muted max-w-[220px] text-right leading-relaxed"
          >
            Every batch brewed fresh on-premises. Five artisanal styles, rotating seasonally.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar px-6 md:px-14 pb-2 snap-x snap-mandatory">
        {beers.map((beer, i) => (
          <motion.div
            key={beer.abbr}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group flex-shrink-0 w-[300px] md:w-[340px] snap-start relative overflow-hidden cursor-pointer"
            style={{ minHeight: '480px' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${beer.color}30`}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {/* Base dark card */}
            <div className="absolute inset-0 bg-bg-card border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500" />

            {/* Color gradient — brightens on hover */}
            <div
              className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: beer.bgGradient }}
            />

            {/* Giant abbr — decorative background letter */}
            <div
              className="absolute -top-6 -left-3 font-display leading-none select-none pointer-events-none"
              style={{
                color: beer.color,
                opacity: 0.07,
                fontSize: 'clamp(120px, 18vw, 180px)',
                transition: 'opacity 0.5s ease',
              }}
            >
              {beer.abbr}
            </div>
            <div
              className="absolute -top-6 -left-3 font-display leading-none select-none pointer-events-none group-hover:opacity-[0.13] opacity-0 transition-opacity duration-500"
              style={{ color: beer.color, fontSize: 'clamp(120px, 18vw, 180px)' }}
            >
              {beer.abbr}
            </div>

            {/* Bottom fill bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-[3px] transition-all duration-700"
              style={{ background: `linear-gradient(to right, ${beer.color}40, ${beer.color}, ${beer.color}40)` }}
            />

            {/* Content */}
            <div className="relative z-10 p-7 md:p-8 h-full flex flex-col" style={{ minHeight: '480px' }}>

              {/* Top: style badge */}
              <div className="mb-auto">
                <span
                  className="inline-block font-sans text-[10px] tracking-[0.3em] uppercase px-3 py-1 border"
                  style={{ color: beer.color, borderColor: `${beer.color}35` }}
                >
                  {beer.style}
                </span>
              </div>

              {/* Middle: name + desc */}
              <div className="mt-auto pt-4">
                <h3
                  className="font-display text-4xl md:text-5xl tracking-wider mb-3 leading-none"
                  style={{ color: beer.color }}
                >
                  {beer.name.toUpperCase()}
                </h3>
                <p className="font-sans text-text-muted text-[13px] leading-relaxed mb-6">
                  {beer.desc}
                </p>

                {/* Flavor notes */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {beer.notes.map((note) => (
                    <span
                      key={note}
                      className="font-sans text-[10px] tracking-[0.2em] uppercase px-2.5 py-1"
                      style={{ color: `${beer.color}90`, background: `${beer.color}10` }}
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* ABV row */}
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-text-muted">ABV</span>
                    <span
                      className="font-display text-2xl tracking-wider"
                      style={{ color: beer.color }}
                    >
                      {beer.abv}
                    </span>
                  </div>
                  {/* ABV bar */}
                  <div className="h-px w-full bg-white/5">
                    <div
                      className="h-full transition-all duration-700 group-hover:opacity-100 opacity-60"
                      style={{
                        width: `${beer.abvNum}%`,
                        background: `linear-gradient(to right, ${beer.color}60, ${beer.color})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-6 md:w-14" aria-hidden="true" />
      </div>

      <p className="md:hidden font-sans text-[10px] tracking-widest uppercase text-text-muted text-center mt-6">
        ← Swipe to explore →
      </p>
    </section>
  )
}
