import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => { document.title = 'Page introuvable | Clairefontaine' }, [])
  return (
    <section style={{ textAlign: 'center', padding: '120px 24px' }}>
      <div className="container">
        <h1 style={{ fontSize: '120px', color: 'var(--primary)', lineHeight: 1, marginBottom: '24px' }}>404</h1>
        <h2 style={{ marginBottom: '16px' }}>Page introuvable</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '18px' }}>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
      </div>
    </section>
  )
}
