const items = [
  'German Hefeweizen',
  'Belgian Wit',
  'Czech Pilsner',
  'American IPA',
  'Indian Mead',
  'Popcorn Cocktail',
  'Apple Pie Cocktail',
  'Sushi Rolls',
  'Pork Gyoza',
  'Smoked Flatbread',
]

const tickerContent = [...items, ...items]

export default function Ticker() {
  return (
    <div className="bg-accent-teal/[0.06] border-y border-accent-teal/10 overflow-hidden py-3.5">
      <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {tickerContent.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4">
            <span className="font-display text-sm md:text-base tracking-[0.2em] text-accent-teal uppercase">
              {item}
            </span>
            <span className="text-accent-gold text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
