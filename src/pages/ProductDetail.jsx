import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const fallbackProduct = {
  image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
  title: 'Produit non trouvé',
  description: 'Les détails de ce produit ne sont pas disponibles pour le moment.',
  specs: [],
  category: '',
}

const features = [
  { icon: '📦', label: 'Livraison offerte', desc: 'Dès 50€ d\'achat en France métropolitaine' },
  { icon: '🔄', label: 'Retour sous 30 jours', desc: ' Satisfait ou remboursé, sans question' },
  { icon: '🌿', label: 'Engagé pour la planète', desc: 'Papiers certifiés PEFC et FSC' },
]

const retailers = [
  { initial: 'A', name: 'Amazon.fr', type: 'E-commerce', detail: 'Livraison Express', action: 'En ligne', cta: 'Acheter' },
  { initial: 'B', name: 'Bruneau', type: 'Bureau', detail: 'Pro & Particuliers', action: 'En ligne', cta: 'Acheter' },
  { initial: 'SC', name: 'Styles Collections', type: 'Papeterie', detail: 'En magasin', action: 'Boutique', cta: 'Localiser' },
  { initial: 'UF', name: 'Unite France SAS', type: 'Distributeur Officiel', detail: '', action: 'Showroom', cta: 'Contact' },
  { initial: 'V', name: 'VEDI', type: 'E-commerce Spécialisé', detail: '', action: 'En ligne', cta: 'Acheter' },
]

export default function ProductDetail() {
  const location = useLocation()
  const product = location.state?.product || fallbackProduct
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    document.title = `${product.title} | Clairefontaine`
  }, [product.title])

  return (
    <>
      <section className="container" style={{ padding: '40px 0 0' }}>
        <div className="breadcrumbs">
          <Link to="/">Accueil</Link>
          {product.category && <><span>/</span><Link to={`/${product.category}`}>{product.category}</Link></>}
          <span>/</span><span>{product.title}</span>
        </div>
      </section>

      <section className="container" style={{ padding: '40px 0 80px' }}>
        <div className="product-detail-grid">
          <div className="product-detail-image">
            <div style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', minHeight: '400px', backgroundColor: 'var(--light-gray)', borderRadius: 'var(--radius)', mixBlendMode: 'multiply' }}></div>
          </div>
          <div className="product-detail-info">
            {product.category && <span className="product-detail-category">{product.category}</span>}
            <h1 className="product-detail-title">{product.title}</h1>
            <p className="product-detail-desc">{product.description}</p>

            {product.specs.length > 0 && (
              <div className="product-detail-specs">
                <h3>Caractéristiques</h3>
                <ul>
                  {product.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-detail-actions">
              <button className="btn btn-primary btn-lg" onClick={() => setShowModal(true)}>Où acheter</button>
            </div>

            <div className="product-detail-features">
              {features.map((f, i) => (
                <div key={i} className="product-detail-feature">
                  <span className="product-detail-feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.label}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h2 className="modal-title">Où acheter {product.title}</h2>
            <div className="retailers-list">
              {retailers.map((r, i) => (
                <div key={i} className="retailer-card">
                  <div className="retailer-initial">{r.initial}</div>
                  <div className="retailer-info">
                    <strong className="retailer-name">{r.name}</strong>
                    <p className="retailer-type">{r.type}{r.detail && <><span className="retailer-sep">•</span>{r.detail}</>}</p>
                  </div>
                  <div className="retailer-action">
                    <span className="retailer-action-label">{r.action}</span>
                    <button className="retailer-cta">{r.cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
