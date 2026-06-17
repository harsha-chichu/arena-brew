import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    region: 'Japanese',
    icon: '🍱',
    items: ['Salmon Urakami Roll', 'Crispy Tofu Maki', 'Pork Gyoza', 'Edamame'],
  },
  {
    region: 'Continental',
    icon: '🥩',
    items: ['German Sausage Platter', 'Cheese & Pepper Fondue', 'Smoked Chicken Flatbread', 'Beach Avocado Salad'],
  },
  {
    region: 'Asian',
    icon: '🍜',
    items: ['Vietnamese Pork & Crab Spring Roll', 'Burmese Khao Suey', 'Korean Chicken Wings', 'Thai Basil Fried Rice'],
  },
  {
    region: 'Small Plates',
    icon: '🫙',
    items: ['Nachos with Salsa', 'Truffle Fries', 'Beer-Battered Onion Rings', 'Chilli Cheese Toast'],
  },
]

export default function Food() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="food" className="py-24 md:py-36 bg-bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-gold mb-3">
              A Global Kitchen
            </p>
            <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide text-text-primary">
              BREW<br />KITCHEN
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif italic text-xl text-text-muted max-w-xs leading-relaxed md:text-right"
          >
            "Asian, Japanese, Continental — all crafted to pair with your pint."
          </motion.p>
        </div>

        {/* Magazine layout */}
        <div className="grid md:grid-cols-5 gap-8">

          {/* Left: Menu categories — 3/5 width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.region}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.7 }}
                className="bg-bg-card border border-white/5 p-6 hover:border-accent-gold/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-serif text-xl text-text-primary tracking-wide">{cat.region}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent-gold mt-[5px] text-[8px] flex-shrink-0">◆</span>
                      <span className="font-sans text-sm text-text-muted group-hover:text-text-primary/80 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image — 2/5 width */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {/* Real food photo */}
            <div className="flex-1 min-h-[300px] md:min-h-0 relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-CIlzXVlYQJQ?auto=format&fit=crop&w=800&h=700&q=85"
                alt="Artisanal cuisine at Arena Brewkitchen"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Bottom gradient for label legibility */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(8,8,16,0.75) 0%, transparent 100%)' }}
              />
            </div>

            {/* CTA block */}
            <div className="bg-bg-card border border-accent-gold/15 p-6">
              <p className="font-serif italic text-text-muted text-sm leading-relaxed mb-4">
                Fresh ingredients. Global technique. Crafted to pair with every brew.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-accent-gold hover:text-text-primary transition-colors duration-300"
              >
                View Full Menu
                <span className="ml-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
