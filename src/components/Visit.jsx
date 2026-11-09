import { MapPin, Clock, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { business, days, images } from '../data/businessInfo.js'

export default function Visit() {
  return (
    <section id="visit" className="section section-alt" aria-labelledby="visit-title">
      <div className="container split">
        <Reveal>
          <p className="eyebrow">Find us</p>
          <h2 id="visit-title">Visit &amp; book</h2>
          <address className="info">
            <p>
              <MapPin aria-hidden="true" />
              <span>
                {business.name}<br />
                {business.street}<br />
                {business.city}, {business.region} {business.postalCode}
              </span>
            </p>
            <p>
              <Phone aria-hidden="true" />
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
            </p>
          </address>
          <h3 className="hours-title"><Clock size={20} aria-hidden="true" /> Opening hours</h3>
          <table className="hours">
            <tbody>
              {days.map((d) => (
                <tr key={d}>
                  <th scope="row">{d}</th>
                  <td>11 am – 12 am</td>
                </tr>
              ))}
            </tbody>
          </table>
          {business.cashOnly && <p className="note">Cash only.</p>}
          <div className="actions">
            <a className="btn" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="btn btn-ghost" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
              Appointments: {business.instagramHandle}
            </a>
          </div>
          <p className="note">
            There is no online booking form. To book, message the artist on Instagram or call the shop.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <img className="visit-img" src={images.machine} alt="A black coil tattoo machine with red coils on a concrete surface" width="802" height="571" loading="lazy" />
        </Reveal>
      </div>
    </section>
  )
}
