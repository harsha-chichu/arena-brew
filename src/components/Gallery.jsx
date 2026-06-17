import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  {
    label: 'The Pyramid',
    sublabel: 'Iconic Exterior',
    gradient: 'radial-gradient(ellipse at 40% 60%, rgba(26,191,174,0.25) 0%, rgba(8,8,20,0.95) 70%)',
    size: 'row-span-2',
  },
  {
    label: 'The Bar',
    sublabel: 'Main Floor',
    gradient: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.22) 0%, rgba(8,8,20,0.95) 70%)',
    size: '',
  },
  {
    label: 'Craft Beer',
    sublabel: 'Straight from the tap',
    gradient: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.3) 0%, rgba(8,8,20,0.95) 60%)',
    size: '',
  },
  {
    label: 'Brew Kitchen',
    sublabel: 'Asian · Continental',
    gradient: 'radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.2) 0%, rgba(8,8,20,0.95) 65%)',
    size: 'col-span-2',
  },
  {
    label: 'DJ Floor',
    sublabel: 'Level 3 · Rooftop',
    gradient: 'radial-gradient(ellipse at 50% 40%, rgba(26,191,174,0.2) 0%, rgba(8,8,20,0.95) 65%)',
    size: '',
  },
  {
    label: 'Cocktails',
    sublabel: 'Crafty & Potent',
    gradient: 'radial-gradient(ellipse at 60% 60%, rgba(184,197,212,0.18) 0%, rgba(8,8,20,0.95) 65%)',
    size: '',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" className="py-24 md:py-36 bg-bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-silver mb-3">
            Three Floors, One Experience
          </p>
          <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide text-text-primary">
            THE EXPERIENCE
          </h2>
        </motion.div>

        {/* Masonry-style CSS grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 + 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden cursor-pointer ${item.size}`}
              style={{ background: item.gradient }}
            >
              {/* Replace with real venue photos — these are styled placeholders */}
              <div className="absolute inset-0 bg-bg-card border border-white/5" />
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                style={{ background: item.gradient }}
              />

              {/* Decorative element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none">
                <span className="font-display text-8xl text-white">{item.label[0]}</span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-display text-xl tracking-wider text-text-primary">{item.label}</p>
                <p className="font-sans text-[11px] tracking-widest uppercase text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  {item.sublabel}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-sans text-[11px] tracking-widest uppercase text-text-muted text-center mt-8"
        >
          Photography courtesy of Arena Brewhouse · Replace placeholders with real venue imagery
        </motion.p>
      </div>
    </section>
  )
}
