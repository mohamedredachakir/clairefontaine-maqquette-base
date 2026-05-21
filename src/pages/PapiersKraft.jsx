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
  { image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600', title: 'Papier Kraft Naturel', description: 'Papier kraft brun naturel 80g en rouleau de 5m. Résistant et élégant pour tous vos emballages.', specs: ['80g/m²', 'Naturel', 'Rouleau 5m'] },
  { image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=600', title: 'Papier Kraft Blanc', description: 'Kraft blanc premium 100g, aspect lisse et soyeux. Parfait pour un emballage épuré.', specs: ['100g/m²', 'Blanc', 'Premium'] },
  { image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600', title: 'Papier Kraft Imprimé', description: 'Kraft 90g avec motifs géométriques et pois. 6 designs différents pour un emballage tendance.', specs: ['90g/m²', 'Imprimé', '6 designs'] },
  { image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600', title: 'Papier Kraft FSC', description: 'Certifié FSC, ce papier kraft 70g est l\'allié écoresponsable de vos emballages quotidiens.', specs: ['70g/m²', 'FSC', 'Éco'] },
]

export default function PapiersKraft() {
  useEffect(() => { document.title = 'Papiers Kraft | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Emballage" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/emballage', label: 'Emballage' }, { label: 'Papiers Kraft' }]} />
          <h1 className="reveal reveal-up">Papiers Kraft</h1>
          <p>Naturel, blanc ou imprimé, le Kraft Clairefontaine allie résistance et esthétique pour sublimer vos colis et cadeaux.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
