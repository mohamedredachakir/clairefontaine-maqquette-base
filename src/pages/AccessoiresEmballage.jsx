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
  { image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=600', title: 'Ruban Satiné 10mm', description: 'Ruban satiné de 10mm de large. 10 mètres par rouleau. Disponible en 15 coloris.', specs: ['Satiné', '10mm', '15 coloris'] },
  { image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600', title: 'Ruban Fleuriste', description: 'Ruban crêpelé souple pour compositions florales et emballages originaux. 25m par rouleau.', specs: ['Crêpelé', '25m', 'Fleurs'] },
  { image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=600', title: 'Étiquettes Cadeau', description: 'Lot de 50 étiquettes cadeau kraft avec cordelettes. Format 6x9cm. Messages prêts à offrir.', specs: ['50 pièces', 'Kraft', '6x9cm'] },
  { image: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=600', title: 'Bolduc Multicolore', description: 'Assortiment de 10 bobines de bolduc en papier fin. Parfait pour les boucles décoratives.', specs: ['10 bobines', 'Multicolore', 'Papier'] },
  { image: 'https://images.unsplash.com/photo-1454817481404-7e84c1b73b4a?auto=format&fit=crop&q=80&w=600', title: 'Ficelle Naturelle', description: 'Bobine de 50m en ficelle de chanvre naturel. Pour un style rustique et authentique.', specs: ['Chanvre', '50m', 'Naturel'] },
]

export default function AccessoiresEmballage() {
  useEffect(() => { document.title = 'Accessoires Emballage | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Emballage" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/emballage', label: 'Emballage' }, { label: 'Accessoires' }]} />
          <h1 className="reveal reveal-up">Accessoires</h1>
          <p>Rubans, étiquettes et bolducs. Le petit plus qui fait toute la différence pour un emballage soigné et personnalisé.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
