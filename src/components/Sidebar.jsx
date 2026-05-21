import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ title, links }) {
  const { pathname } = useLocation()

  return (
    <aside className="sidebar">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={pathname === link.to ? 'active' : ''}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
