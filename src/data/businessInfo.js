import shopFloor from '../assets/images/shop-floor.webp'
import shopEntrance from '../assets/images/shop-entrance.webp'
import artistAtWork from '../assets/images/artist-at-work.webp'
import tattooMachine from '../assets/images/tattoo-machine.webp'
import koiBack from '../assets/images/koi-back.webp'
import koiCloseup from '../assets/images/koi-closeup.webp'
import sleeve from '../assets/images/sleeve-peony-koi.webp'
import wave from '../assets/images/wave-forearm.webp'
import palm from '../assets/images/fineline-palm.webp'
import dolphin from '../assets/images/dolphin-clover.webp'
import octopus from '../assets/images/octopus.webp'
import lion from '../assets/images/lion.webp'
import butterfly from '../assets/images/butterfly-flowers.webp'

// Single source of truth for all business details. Edit here only.
export const business = {
  name: 'Circus Tattoo',
  category: 'Tattoo and piercing shop',
  street: '1323 Washington Ave #2B',
  city: 'Miami Beach',
  region: 'FL',
  postalCode: '33139',
  phoneDisplay: '+1 305-532-3003',
  phoneHref: 'tel:+13055323003',
  hoursLabel: 'Every day, 11 am – 12 am',
  instagramHandle: '@hanimadetattoo',
  instagramUrl: 'https://www.instagram.com/hanimadetattoo/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Circus+Tattoo+1323+Washington+Ave+%232B+Miami+Beach+FL+33139',
  cashOnly: true,
}

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const images = {
  hero: shopFloor,
  entrance: shopEntrance,
  artist: artistAtWork,
  machine: tattooMachine,
}

export const services = [
  { title: 'Custom tattoo designs', text: 'Bring your idea and work with the artists to turn it into a design made for you.' },
  { title: 'Fine line tattoos', text: 'Delicate, precise line work. Appointments for fine line tattoos are arranged through Instagram.' },
  { title: 'Colour & Japanese-style work', text: 'Bold colour pieces such as koi, waves and florals, from small designs to large back and sleeve work.' },
  { title: 'Black & grey tattoos', text: 'Smooth shading and detail in black and grey, from animals to symbols.' },
  { title: 'Matching tattoos', text: 'Getting inked with a friend or partner? Matching designs are part of what the shop does.' },
  { title: 'Piercing', text: 'Circus Tattoo is listed as a tattoo and piercing shop. Ask the team about piercing options when you get in touch.' },
]

export const gallery = [
  { src: koiBack, alt: 'Large colour Japanese-style koi fish tattoo covering a client’s back' },
  { src: palm, alt: 'Black palm tree tattoo with the year 2025 beneath it' },
  { src: sleeve, alt: 'Colour Japanese-style sleeve with a peony, waves and koi scales' },
  { src: dolphin, alt: 'Black and grey dolphin tattoo with a four-leaf clover' },
  { src: lion, alt: 'Colour roaring lion tattoo on a forearm' },
  { src: butterfly, alt: 'Colour butterfly and flowers tattoo with swirling vines' },
  { src: octopus, alt: 'Black and grey octopus tattoo on an upper arm' },
  { src: wave, alt: 'Black and grey Japanese-style wave tattoo on a forearm' },
  { src: koiCloseup, alt: 'Close-up of a red and orange koi tattoo with detailed scales' },
]
