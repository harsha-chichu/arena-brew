import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PX = 'https://images.pexels.com/photos/'
const PQ = '?auto=compress&cs=tinysrgb'

const galleryItems = [
  {
    label: 'The Pyramid',
    sublabel: 'Iconic Exterior',
    img: `${PX}5538223/pexels-photo-5538223.jpeg${PQ}&w=600&h=900`,
    size: 'row-span-2',
  },
  {
    label: 'The Bar',
    sublabel: 'Main Floor',
    img: `${PX}5490965/pexels-photo-5490965.jpeg${PQ}&w=700&h=500`,
    size: '',
  },
  {
    label: 'Craft Beer',
    sublabel: 'Straight from the tap',
    img: `${PX}5864291/pexels-photo-5864291.jpeg${PQ}&w=700&h=500`,
    size: '',
  },
  {
    label: 'Brew Kitchen',
    sublabel: 'Asian · Continental',
    img: `${PX}246747/pexels-photo-246747.jpeg${PQ}&w=900&h=500`,
    size: 'col-span-2',
  },
  {
    label: 'DJ Floor',
    sublabel: 'Level 3 · Rooftop',
    img: `${PX}1801106/pexels-photo-1801106.jpeg${PQ}&w=700&h=500`,
    size: '',
  },
  {
    label: 'Cocktails',
    sublabel: 'Crafty & Potent',
    img: `${PX}2707972/pexels-photo-2707972.jpeg${PQ}&w=700&h=500`,
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
            >
              {/* Real photo */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Permanent dark scrim so label is always readable */}
              <div className="absolute inset-0 bg-bg-primary/30" />

              {/* Overlay darkens more on hover */}
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
          Photography via Unsplash · Replace with real venue imagery for production
        </motion.p>
      </div>
    </section>
  )
}
