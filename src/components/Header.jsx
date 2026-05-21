import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const universLinks = [
  { to: '/papeterie', label: 'Papeterie' },
  { to: '/beaux-arts', label: 'Beaux-Arts' },
  { to: '/loisirs-creatifs', label: 'Loisirs Créatifs' },
  { to: '/emballage', label: 'Emballage' },
  { to: '/maroquinerie', label: 'Maroquinerie' },
]

const navLinks = [
  { to: 'https://www.ateliers-dessins-clairefontaine.com/', label: 'Ateliers', external: true },
  { to: '/blog', label: 'Blog' },
  { to: '/histoire', label: 'Héritage' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { pathname } = useLocation()
  const [lang, setLang] = useState('FR')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/logo-clairefontaine.svg" alt="Clairefontaine" className="logo-img" />
            <span className="logo-text">Clairefontaine</span>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li className="nav-dropdown" ref={dropdownRef}>
              <button
                className="nav-dropdown-trigger"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={(e) => { if (!dropdownRef.current?.contains(e.relatedTarget)) setDropdownOpen(false) }}
              >
                Univers
              </button>
              <div className="nav-dropdown-menu" role="menu">
                {universLinks.map((link) => (
                  <Link key={link.to} to={link.to} className={pathname === link.to ? 'active' : ''}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.external ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ) : (
                  <Link
                    to={link.to}
                    className={pathname === link.to || pathname.startsWith(link.to) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button className="nav-icon-btn" aria-label="Rechercher">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>
            </li>
            <li>
              <button className="nav-lang-btn" onClick={() => setLang(lang === 'FR' ? 'EN' : 'FR')}>
                {lang}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
