import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const info = [
  {
    label: 'Address',
    value: '100 Feet Road, Defence Colony\nIndiranagar, Bangalore 560038',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Hours',
    value: 'Mon – Thu: 12pm – 12am\nFri – Sun: 12pm – 1am',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: 'Reservations',
    value: '+91 98765 43210\narena@brewkitchen.in',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91A16 16 0 0014.09 17.1l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
      </svg>
    ),
  },
]

const guestOptions = ['1–2 Guests', '3–4 Guests', '5–8 Guests', '9+ Guests']

export default function Reservation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-gold mb-4">
              Visit Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-none tracking-wide text-text-primary mb-10">
              FIND THE<br />ARENA
            </h2>

            <div className="space-y-8 mb-10">
              {info.map(({ label, value, icon }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5 text-accent-gold">{icon}</div>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-text-muted mb-1">{label}</p>
                    {value.split('\n').map((line, i) => (
                      <p key={i} className="font-sans text-text-primary text-sm leading-relaxed">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border border-accent-teal/15 bg-accent-teal/[0.03]">
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Walk-ins are always welcome. <span className="text-accent-teal">Reservations recommended</span> on Friday and Saturday evenings. Private event bookings available.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center gap-4 pt-8">
                <div className="w-12 h-12 border border-accent-teal flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1ABFAE" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-4xl tracking-wider text-text-primary">RESERVATION SENT</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  We'll confirm your table within 24 hours. See you at the Arena.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-accent-teal hover:text-text-primary transition-colors duration-300"
                >
                  Make another reservation →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-text-primary mb-6">Reserve Your Table</h3>

                {/* Name */}
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-text-muted block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 placeholder:text-text-muted/50"
                  />
                </div>

                {/* Date + Guests row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-text-muted block mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] tracking-widest uppercase text-text-muted block mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-text-muted block mb-2">
                    Party Size
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 appearance-none"
                  >
                    <option value="" disabled>Select guests</option>
                    {guestOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="font-sans text-[10px] tracking-widests uppercase text-text-muted block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 placeholder:text-text-muted/50"
                  />
                </div>

                {/* Note */}
                <div>
                  <label className="font-sans text-[10px] tracking-widests uppercase text-text-muted block mb-2">
                    Special Requests (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Dietary needs, occasion, seating preference..."
                    className="w-full bg-bg-card border border-white/8 text-text-primary font-sans text-sm px-4 py-3.5 focus:outline-none focus:border-accent-teal transition-colors duration-300 placeholder:text-text-muted/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-teal text-bg-primary font-sans text-sm tracking-widest uppercase py-4 hover:bg-accent-teal/90 transition-all duration-300 font-medium mt-2"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
