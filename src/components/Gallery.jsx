import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { gallery } from '../data/businessInfo.js'

export default function Gallery() {
  const dialogRef = useRef(null)
  const [current, setCurrent] = useState(null)

  const openItem = (item) => {
    setCurrent(item)
    dialogRef.current?.showModal()
  }

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 id="gallery-title">Gallery</h2>
        </Reveal>
        <div className="grid">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 90} className="tile">
              <button type="button" onClick={() => openItem(g)} aria-label={`Enlarge photo: ${g.alt}`}>
                <img src={g.src} alt={g.alt} width="600" height="750" loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Enlarged photo"
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      >
        {current && <img src={current.src} alt={current.alt} />}
        <button type="button" className="btn btn-small" onClick={() => dialogRef.current.close()}>
          Close
        </button>
      </dialog>
    </section>
  )
}
