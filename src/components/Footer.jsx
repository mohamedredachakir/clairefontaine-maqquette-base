import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link">
              <img src="/logo-clairefontaine.svg" alt="Clairefontaine" className="footer-brand-logo" />
              <span className="footer-brand-name">Clairefontaine</span>
            </Link>
            <p className="footer-brand-tagline">Façonner l'excellence depuis 1858.</p>
          </div>
          <div className="footer-links">
            <h4>Univers</h4>
            <ul>
              <li><Link to="/papeterie">Papeterie</Link></li>
              <li><Link to="/beaux-arts">Beaux-Arts</Link></li>
              <li><Link to="/loisirs-creatifs">Loisirs Créatifs</Link></li>
              <li><Link to="/emballage">Emballage</Link></li>
              <li><Link to="/maroquinerie">Maroquinerie</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Entreprise</h4>
            <ul>
              <li><Link to="/histoire">Histoire</Link></li>
              <li><Link to="/engagements">Valeurs RSE</Link></li>
              <li><Link to="/usines">Nos Usines</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Clairefontaine. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
