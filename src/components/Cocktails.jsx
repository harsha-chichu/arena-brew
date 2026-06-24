import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const menu = {
  cocktails: {
    label: 'Cocktails',
    color: '#1ABFAE',
    items: [
      { name: 'Popcorn', desc: 'Bourbon · Caramel · Smoked Salt', price: '₹550' },
      { name: 'Apple Pie', desc: 'Spiced Vodka · Apple · Vanilla', price: '₹550' },
      { name: 'The Arena', desc: 'Gin · IPA Reduction · Elderflower', price: '₹650' },
      { name: 'Passionfruit Smash', desc: 'Rum · Passionfruit · Lime', price: '₹480' },
    ],
  },
  wines: {
    label: 'Wine',
    color: '#C9A84C',
    items: [
      { name: 'House White', desc: 'Sauvignon Blanc · Crisp', price: '₹380' },
      { name: 'Cabernet Sauvignon', desc: 'Full Body · Oak-Aged', price: '₹450' },
      { name: 'Rosé', desc: 'Dry · Floral · Chilled', price: '₹400' },
      { name: 'Prosecco', desc: 'Sparkling · Italian · Brut', price: '₹520' },
    ],
  },
  beers: {
    label: 'Beer',
    color: '#E8D870',
    items: [
      { name: 'German Hefeweizen', desc: 'Wheat Ale · 5.2% ABV', price: '₹380' },
      { name: 'Belgian Wit', desc: 'White Ale · 4.8% ABV', price: '₹350' },
      { name: 'Czech Pilsner', desc: 'Lager · 4.5% ABV', price: '₹320' },
      { name: 'American IPA', desc: 'India Pale Ale · 6.5% ABV', price: '₹420' },
    ],
  },
}

export default function Cocktails() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cocktails" className="py-24 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Atmospheric bar background */}
      <img
        src="https://images.pexels.com/photos/1801106/pexels-photo-1801106.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-luminosity pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,191,174,0.07) 0%, transparent 65%), rgba(8,8,16,0.7)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-14 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-text-muted mb-5">
            — Crafty &amp; Potent —
          </p>
          <h2
            className="font-display leading-none tracking-wide text-text-primary mb-4"
            style={{ fontSize: 'clamp(56px, 12vw, 140px)' }}
          >
            DRINKS MENU
          </h2>
          <p className="font-serif italic text-lg text-text-muted">
            Every cocktail tells a story. Every sip, a revelation.
          </p>
        </motion.div>

        {/* 3-column menu */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {Object.values(menu).map((col, colIdx) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: colIdx * 0.15 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0"
            >
              {/* Column heading */}
              <p
                className="font-sans text-xs tracking-[0.4em] uppercase mb-8 text-center"
                style={{ color: col.color }}
              >
                — {col.label} —
              </p>

              {/* Items */}
              <ul className="space-y-6">
                {col.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: colIdx * 0.15 + i * 0.08 + 0.4, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <span className="font-serif text-[17px] text-text-primary group-hover:text-white transition-colors duration-200">
                        {item.name}
                      </span>
                      <span
                        className="font-sans text-sm flex-shrink-0"
                        style={{ color: col.color }}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-text-muted">
                      {item.desc}
                    </p>
                    {/* Dotted divider */}
                    <div className="mt-4 border-b border-dotted border-white/[0.08]" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center font-sans text-text-muted text-xs tracking-widest uppercase mt-14"
        >
          Full menu available at the bar · Prices exclusive of taxes · Please drink responsibly
        </motion.p>
      </div>
    </section>
  )
}
