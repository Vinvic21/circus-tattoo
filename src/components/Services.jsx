import Reveal from './Reveal.jsx'
import { services } from '../data/businessInfo.js'

export default function Services() {
  return (
    <section id="services" className="section section-alt" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">Services</h2>
        </Reveal>
        <ul className="cards">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 80} className="card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
