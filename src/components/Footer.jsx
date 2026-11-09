import { business } from '../data/businessInfo.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p><strong>{business.name}</strong> · {business.street}, {business.city}, {business.region} {business.postalCode}</p>
        <p>
          <a href={business.phoneHref}>{business.phoneDisplay}</a> · {business.hoursLabel}
        </p>
        <p className="small">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
