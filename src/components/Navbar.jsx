import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Beers', href: '#beers' },
  { label: 'Food', href: '#food' },
  { label: 'Cocktails', href: '#cocktails' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navClass = scrolled
    ? 'glass shadow-lg shadow-black/40'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClass}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span className="font-display text-3xl md:text-4xl text-text-primary tracking-wider group-hover:text-accent-teal transition-colors duration-300">
            ARENA
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.35em] text-accent-gold uppercase">
            Artisanal Brewkitchen
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-sans text-sm tracking-widest uppercase text-text-muted hover:text-accent-teal transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-accent-teal text-accent-teal text-sm tracking-widest uppercase font-sans hover:bg-accent-teal hover:text-bg-primary transition-all duration-300"
        >
          Reserve Table
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-text-primary origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1.5px] bg-text-primary"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-text-primary origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 left-0 right-0 glass border-t border-white/5"
          >
            <ul className="flex flex-col py-6 px-8 gap-6">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-2xl tracking-widest text-text-primary hover:text-accent-teal transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-6 py-2.5 border border-accent-teal text-accent-teal text-sm tracking-widest uppercase font-sans hover:bg-accent-teal hover:text-bg-primary transition-all duration-300"
                >
                  Reserve Table
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
