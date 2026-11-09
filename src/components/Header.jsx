import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { business } from '../data/businessInfo.js'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Visit', '#visit'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          {business.name}
        </a>
        <nav aria-label="Main" className={`nav ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-small" href={business.phoneHref}>
            <Phone size={16} aria-hidden="true" /> Call
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
