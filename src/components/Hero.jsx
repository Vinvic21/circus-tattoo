import { business, images } from '../data/businessInfo.js'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }} aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-content">
        <p className="eyebrow rise" style={{ animationDelay: '0.1s' }}>
          Tattoo &amp; piercing · {business.city}, {business.region}
        </p>
        <h1 id="hero-title" className="neon rise" style={{ animationDelay: '0.25s' }}>
          {business.name}
        </h1>
        <p className="lead rise" style={{ animationDelay: '0.45s' }}>
          A tattoo and piercing shop on Washington Ave, Miami Beach. Custom designs, fine line, colour and black &amp; grey work.
        </p>
        <div className="actions rise" style={{ animationDelay: '0.65s' }}>
          <a className="btn" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
            Book on Instagram
          </a>
          <a className="btn btn-ghost" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
