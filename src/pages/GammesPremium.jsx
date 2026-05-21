import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/papiers-kraft', label: 'Papiers Kraft' },
  { to: '/gammes-premium', label: 'Gammes Premium' },
  { to: '/sacs-cadeaux', label: 'Sacs & Coffrets' },
  { to: '/accessoires-emballage', label: 'Accessoires' },
  { to: '/emballage', label: 'Voir tout' },
]

const products = [
  { image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600', title: 'Papier Métallisé Or', description: 'Papier premium aspect métal doré 120g. Effet luxe garanti pour vos plus beaux cadeaux.', specs: ['120g/m²', 'Métallisé', 'Or'] },
  { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600', title: 'Papier Métallisé Argent', description: 'Reflets argentés brillants pour un emballage chic et contemporain. 100g de pure élégance.', specs: ['100g/m²', 'Métallisé', 'Argent'] },
  { image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600', title: 'Papier Velours Premium', description: 'Une texture soyeuse unique pour un toucher incomparable. Disponible en 8 coloris.', specs: ['Velours', '8 coloris', 'Luxe'] },
  { image: 'https://images.unsplash.com/photo-1490077476659-095159892ab5?auto=format&fit=crop&q=80&w=600', title: 'Papier Gaufré Signature', description: 'Motif gaufré élégant sur papier 110g. Faites de chaque cadeau une œuvre d\'art.', specs: ['110g/m²', 'Gaufré', 'Signature'] },
]

export default function GammesPremium() {
  useEffect(() => { document.title = 'Gammes Premium | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Emballage" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/emballage', label: 'Emballage' }, { label: 'Gammes Premium' }]} />
          <h1 className="reveal reveal-up">Gammes Premium</h1>
          <p>Des papiers d\'exception aux finitions métallisées, velours ou gaufrées pour les moments qui méritent le raffinement.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
