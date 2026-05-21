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
  { image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600', title: 'Papier Origami 15x15cm', description: 'Lot de 200 feuilles origami en 40 motifs différents. Idéal pour tous les niveaux.', specs: ['200 feuilles', '40 motifs', 'Origami'] },
  { image: 'https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=600', title: 'Papier Crépon Assorti', description: 'Rouleaux de papier crépon de 50g. 10 couleurs vives pour vos décorations et fleurs.', specs: ['50g/m²', '10 couleurs', 'Crépon'] },
  { image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600', title: 'Papier de Soie', description: 'Papier de soie délicat en 20 teintes pastel. Parfait pour emballages fins et projets légers.', specs: ['Soie', '20 teintes', 'Pastel'] },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', title: 'Papier Scrapbooking', description: 'Bloc de 48 feuilles imprimées recto-verso 200g. Motifs floraux, géométriques et vintage.', specs: ['200g/m²', '48 feuilles', 'Scrap'] },
  { image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600', title: 'Papier Calque A4', description: 'Bloc de 25 feuilles de calque 90g pour dessin technique, calque et superposition.', specs: ['90g/m²', 'Calque', 'A4'] },
  { image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=600', title: 'Papier Canson Coloré', description: 'Lot de 100 feuilles couleur A4 120g, 10 teintes assorties. Idéal pour l\'école et le loisir.', specs: ['120g/m²', '100 feuilles', 'A4'] },
]

export default function PapiersCreatifs() {
  useEffect(() => { document.title = 'Papiers Créatifs | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Loisirs Créatifs" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/loisirs-creatifs', label: 'Loisirs Créatifs' }, { label: 'Papiers Créatifs' }]} />
          <h1 className="reveal reveal-up">Papiers Créatifs</h1>
          <p>Une palette infinie de textures et de couleurs pour tous vos projets créatifs : origami, scrapbooking, décoration et plus.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
