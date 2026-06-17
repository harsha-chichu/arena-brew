import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cocktails = [
  {
    name: 'Popcorn',
    tagline: 'Sweet meets smoke',
    desc: 'Butter-washed bourbon, caramel liqueur, popcorn-infused syrup, smoked salt rim.',
    notes: ['Bourbon Base', 'Caramel', 'Smoked Salt'],
    color: '#C9A84C',
    num: '01',
  },
  {
    name: 'Apple Pie',
    tagline: 'Nostalgia, distilled',
    desc: 'Cinnamon-spiced vodka, fresh apple juice, vanilla syrup, pie-crust crumble garnish.',
    notes: ['Spiced Vodka', 'Fresh Apple', 'Vanilla'],
    color: '#E8D870',
    num: '02',
  },
  {
    name: 'The Arena',
    tagline: 'Our signature pour',
    desc: 'House IPA reduction, gin, elderflower, citrus foam, served on the rocks with teal butterfly pea ice.',
    notes: ['Gin', 'IPA Reduction', 'Elderflower'],
    color: '#1ABFAE',
    num: '03',
  },
]

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
        className="absolute inset-0 w-full h-full object-cover opacity-[0.09] mix-blend-luminosity pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,191,174,0.08) 0%, transparent 65%), rgba(8,8,16,0.65)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-14 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-teal mb-4">
            Crafty &amp; Potent
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-display leading-none tracking-wide text-text-primary"
              style={{ fontSize: 'clamp(64px, 12vw, 140px)' }}
            >
              SIGNATURES
            </h2>
            <p className="font-serif italic text-lg md:text-xl text-text-muted md:max-w-[260px] md:text-right">
              Every cocktail tells a story.<br />Every sip, a revelation.
            </p>
          </div>
        </motion.div>

        {/* Cards — stacked on mobile, 3-col on desktop */}
        <div className="grid md:grid-cols-3 gap-px bg-white/[0.05]">
          {cocktails.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-bg-card/90 overflow-hidden cursor-pointer"
              style={{ backdropFilter: 'blur(8px)', minHeight: '400px' }}
            >
              {/* Top color bar */}
              <div className="h-[3px] w-full" style={{ background: c.color }} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 60% at 50% 90%, ${c.color}1A 0%, transparent 70%)` }}
              />

              {/* Big number — background */}
              <div
                className="absolute -right-2 -top-6 font-display leading-none select-none pointer-events-none"
                style={{ color: c.color, opacity: 0.06, fontSize: 'clamp(100px, 14vw, 160px)' }}
              >
                {c.num}
              </div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">

                {/* Name block */}
                <div className="mb-auto">
                  <h3
                    className="font-display leading-none tracking-wider mb-2"
                    style={{ color: c.color, fontSize: 'clamp(40px, 6vw, 64px)' }}
                  >
                    {c.name.toUpperCase()}
                  </h3>
                  <p className="font-serif italic text-text-muted text-base">{c.tagline}</p>
                </div>

                {/* Description + notes */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="font-sans text-text-muted text-sm leading-relaxed mb-6">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {c.notes.map((note) => (
                      <span
                        key={note}
                        className="font-sans text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border"
                        style={{ color: `${c.color}A0`, borderColor: `${c.color}25`, background: `${c.color}08` }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center font-sans text-text-muted text-xs tracking-widest uppercase mt-8"
        >
          Full cocktail menu available at the bar · Please drink responsibly
        </motion.p>
      </div>
    </section>
  )
}
