const links = {
  Experience: ['Our Story', 'Craft Beers', 'Brew Kitchen', 'Cocktails', 'Gallery'],
  Visit: ['Reserve a Table', 'Private Events', 'Directions', 'Contact Us'],
  Connect: ['Instagram', 'Zomato', 'Google Maps', 'Swiggy'],
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arenabrewhouse/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Zomato',
    href: 'https://www.zomato.com/bangalore/arena-brewhouse-2-indiranagar-bangalore',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H7.5c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5zm-9-5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-1z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <span className="block font-display text-4xl tracking-wider text-text-primary leading-none">ARENA</span>
              <span className="block font-sans text-[9px] tracking-[0.4em] uppercase text-accent-gold">Artisanal Brewkitchen</span>
            </div>
            <p className="font-sans text-text-muted text-sm leading-relaxed mb-6">
              Bangalore's finest craft brewery experience. Three floors of culture, cuisine, and carefully brewed craft beer.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-text-muted hover:text-accent-teal transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent-teal mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-text-muted">
            © {new Date().getFullYear()} Arena Artisanal Brewkitchen, Bangalore. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-xs text-text-muted hover:text-text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-text-muted hover:text-text-primary transition-colors duration-300">
              Terms
            </a>
            <span className="font-sans text-xs text-text-muted/40">
              100 Feet Rd, Indiranagar
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
