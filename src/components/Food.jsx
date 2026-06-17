import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    region: 'Japanese',
    items: ['Salmon Urakami Roll', 'Crispy Tofu Maki', 'Pork Gyoza', 'Edamame'],
    color: '#C9A84C',
  },
  {
    region: 'Continental',
    items: ['German Sausage Platter', 'Cheese & Pepper Fondue', 'Smoked Chicken Flatbread', 'Beach Avocado Salad'],
    color: '#1ABFAE',
  },
  {
    region: 'Asian',
    items: ['Vietnamese Pork & Crab Spring Roll', 'Burmese Khao Suey', 'Korean Chicken Wings', 'Thai Basil Fried Rice'],
    color: '#B8C5D4',
  },
  {
    region: 'Small Plates',
    items: ['Nachos with Salsa', 'Truffle Fries', 'Beer-Battered Onion Rings', 'Chilli Cheese Toast'],
    color: '#E8D870',
  },
]

export default function Food() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="food" className="relative overflow-hidden" ref={ref}>

      {/* Full-bleed hero image behind the whole section */}
      <img
        src="https://images.pexels.com/photos/539430/pexels-photo-539430.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay — heavier on bottom, lighter on top so photo peeks through */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(8,8,16,0.88) 0%, rgba(8,8,16,0.96) 100%)',
        }}
      />
      {/* Gold accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 80% 30%, rgba(201,168,76,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 py-24 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-gold mb-3">
                A Global Kitchen
              </p>
              <h2 className="font-display leading-none tracking-wide text-text-primary" style={{ fontSize: 'clamp(64px, 12vw, 140px)' }}>
                BREW<br />KITCHEN
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="md:max-w-[260px]"
            >
              <p className="font-serif italic text-xl text-text-muted leading-relaxed mb-4">
                "Asian, Japanese, Continental — all crafted to pair with your pint."
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-accent-gold hover:text-text-primary transition-colors duration-300"
              >
                View Full Menu <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* Menu grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.region}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-bg-primary/80 p-8 md:p-10 hover:bg-bg-card/80 transition-colors duration-400"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                {/* Region name */}
                <div className="mb-7">
                  <div
                    className="h-px w-8 mb-4"
                    style={{ background: cat.color }}
                  />
                  <h3
                    className="font-display text-3xl tracking-wider"
                    style={{ color: cat.color }}
                  >
                    {cat.region.toUpperCase()}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li
                      key={item}
                      className="font-sans text-sm text-text-muted group-hover:text-text-primary/80 transition-colors duration-300 flex items-start gap-2.5"
                    >
                      <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: `${cat.color}70` }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom photo strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="mt-px grid grid-cols-3 gap-px bg-white/[0.04] h-48 md:h-64"
          >
            <div className="relative overflow-hidden col-span-2">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Artisanal cuisine"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-bg-primary/40" />
              <div className="absolute bottom-4 left-6">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-gold">Fresh Ingredients</p>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Craft plating"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-bg-primary/40" />
              <div className="absolute bottom-4 left-4">
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent-teal">Global Technique</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
