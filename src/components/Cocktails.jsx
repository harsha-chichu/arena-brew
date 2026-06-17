import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cocktails = [
  {
    name: 'Popcorn',
    tagline: 'Sweet meets smoke',
    desc: 'Butter-washed bourbon, caramel liqueur, popcorn-infused syrup, smoked salt rim.',
    notes: ['Bourbon Base', 'Caramel', 'Smoked Salt'],
    color: '#C9A84C',
  },
  {
    name: 'Apple Pie',
    tagline: 'Nostalgia, distilled',
    desc: 'Cinnamon-spiced vodka, fresh apple juice, vanilla syrup, pie-crust crumble garnish.',
    notes: ['Spiced Vodka', 'Fresh Apple', 'Vanilla'],
    color: '#E8D870',
  },
  {
    name: 'The Arena',
    tagline: 'Our signature pour',
    desc: 'House IPA reduction, gin, elderflower, citrus foam, served on the rocks with teal butterfly pea ice.',
    notes: ['Gin', 'IPA Reduction', 'Elderflower'],
    color: '#1ABFAE',
  },
]

export default function Cocktails() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="cocktails" className="py-24 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Atmospheric neon bar background photo at low opacity */}
      <img
        src="https://images.unsplash.com/photo-e2zmMst976M?auto=format&fit=crop&w=1600&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity pointer-events-none"
      />
      {/* Dark overlay + teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 50% 50%, rgba(26,191,174,0.07) 0%, transparent 70%),
            rgba(8,8,16,0.6)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-teal mb-4">
            Crafty & Potent
          </p>
          <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide text-text-primary mb-4">
            SIGNATURES
          </h2>
          <p className="font-serif italic text-xl text-text-muted max-w-md mx-auto">
            Every cocktail tells a story. Every sip, a revelation.
          </p>
        </motion.div>

        {/* Cocktail cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cocktails.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-bg-card/90 border border-white/5 hover:border-white/15 transition-all duration-500 p-8 md:p-10 overflow-hidden"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 80%, ${c.color}22 0%, transparent 65%)`,
                }}
              />

              {/* Decorative number */}
              <div
                className="font-display text-[100px] leading-none opacity-[0.06] select-none pointer-events-none absolute -top-4 right-4"
                style={{ color: c.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* Color dot */}
                <div
                  className="w-2 h-2 rounded-full mb-6"
                  style={{ backgroundColor: c.color }}
                />

                {/* Name */}
                <h3
                  className="font-display text-4xl tracking-wider mb-1"
                  style={{ color: c.color }}
                >
                  {c.name.toUpperCase()}
                </h3>

                {/* Tagline */}
                <p className="font-serif italic text-text-muted text-sm mb-5">{c.tagline}</p>

                {/* Description */}
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-7">
                  {c.desc}
                </p>

                {/* Flavor notes */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                  {c.notes.map((note) => (
                    <span
                      key={note}
                      className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1 border"
                      style={{ color: `${c.color}99`, borderColor: `${c.color}25` }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center font-sans text-text-muted text-xs tracking-widest uppercase mt-12"
        >
          Full cocktail menu available at the bar · Please drink responsibly
        </motion.p>
      </div>
    </section>
  )
}
