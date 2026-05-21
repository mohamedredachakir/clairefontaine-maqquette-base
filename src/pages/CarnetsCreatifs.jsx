import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/kits-creatifs', label: 'Kits Créatifs' },
  { to: '/carnets-creatifs', label: 'Carnets Créatifs' },
  { to: '/papiers-creatifs', label: 'Papiers Créatifs' },
  { to: '/loisirs-creatifs', label: 'Voir tout' },
]

const products = [
  { image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600', title: 'Bullet Journal Dot Pad', description: 'Carnet à points 160g pour le Bullet Journaling. Couverture rigide, élastique et marque-page.', specs: ['160g/m²', 'Dot Grid', 'Relié'] },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', title: 'Carnet de Coloriage', description: 'Carnet avec 30 illustrations originales sur papier épais 180g pour coloriages sans transparence.', specs: ['180g/m²', 'Coloriage', 'Détente'] },
  { image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600', title: 'Carnet Sketchbook A5', description: 'Papier 120g idéal pour le croquis au crayon, feutre et aquarelle légère. Reliure spirale.', specs: ['120g/m²', 'Spirale', 'Mixte'] },
  { image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600', title: 'Album Photos 30x30', description: 'Album à couverture toile avec pochettes neutres pour 50 photos. Idéal pour vos souvenirs.', specs: ['30x30cm', 'Toile', '50 vues'] },
  { image: 'https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=600', title: 'Carnet Récup\' Créatif', description: 'Carnet assemblé à partir de chutes de papier Clairefontaine. Chaque carnet est unique.', specs: ['Recyclé', 'Unique', 'Éco'] },
]

export default function CarnetsCreatifs() {
  useEffect(() => { document.title = 'Carnets Créatifs | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Loisirs Créatifs" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/loisirs-creatifs', label: 'Loisirs Créatifs' }, { label: 'Carnets Créatifs' }]} />
          <h1 className="reveal reveal-up">Carnets Créatifs</h1>
          <p>Des carnets conçus pour libérer votre créativité : Bullet Journal, coloriage, croquis ou album photo. Le support parfait pour vos projets.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
