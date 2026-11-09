const words = ['Custom designs', 'Fine line', 'Colour', 'Black & grey', 'Matching tattoos', 'Piercing', 'Open daily']

export default function Marquee() {
  const row = words.map((w) => <span key={w}>{w}<i aria-hidden="true">✦</i></span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </div>
  )
}
