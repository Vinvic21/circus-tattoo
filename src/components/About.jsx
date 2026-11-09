import Reveal from './Reveal.jsx'
import { business, images } from '../data/businessInfo.js'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container split">
        <Reveal className="about-text">
          <p className="eyebrow">About the shop</p>
          <h2 id="about-title">Step inside the big top</h2>
          <p>
            {business.name} is a tattoo and piercing shop at {business.street}, {business.city}. Walk in and you’ll find
            walls of framed flash, neon signs and a red-and-white circus-tent mural.
          </p>
          <p>
            The artists work on custom designs, fine line pieces, colour and black &amp; grey tattoos, and matching
            tattoos. To arrange a fine line appointment, message the shop’s artist on Instagram.
          </p>
          <a className="btn" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
            Message {business.instagramHandle}
          </a>
        </Reveal>
        <Reveal className="about-media" delay={150}>
          <img
            src={images.entrance}
            alt="Entrance of Circus Tattoo with framed flash on the wall and neon signs ahead"
            width="509"
            height="779"
            loading="lazy"
          />
          <img
            className="about-second"
            src={images.artist}
            alt="A tattoo artist working on a client’s forearm inside the shop"
            width="677"
            height="756"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
