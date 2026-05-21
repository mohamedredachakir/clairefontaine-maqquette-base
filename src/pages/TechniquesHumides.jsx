import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/beaux-arts#pochette', label: 'Pochette dessin' },
  { to: '/pastelmat', label: 'Techniques Sèches (Pastelmat)' },
  { to: '/techniques-humides', label: 'Techniques Humides' },
  { to: '/paint-on', label: 'Paint ON' },
  { to: '/beaux-arts#carnets', label: 'Carnets de voyages' },
]

const products = [
  { image: 'https://www.clairefontaine.com/20120-thickbox_default/fontaine-bloc-encolle-10f-100-coton-300g-30x40cm-grain-fin.jpg', title: 'Fontaine Aquarelle', description: 'Papier 100% coton, qualité professionnelle. Une absorption parfaite pour les lavis.', specs: ['100% Coton', '300g/m²', 'Gélatiné'] },
  { image: 'https://www.clairefontaine.com/28456-thickbox_default/etival-bloc-encolle-10f-cellulose-300g-24x30cm-grain-classique.jpg', title: 'Etival Aquarelle', description: "Excellente alternative au coton. Papier cellulose blanc pur, idéal pour les débutants et l'étude.", specs: ['Cellulose', '300g/m²', 'Grain Fin'] },
  { image: 'https://www.clairefontaine.com/8354-thickbox_default/goldline-bloc-multi-techniques-170g-21x297cm-70-pages.jpg', title: 'Goldline Aqua', description: 'Le carnet polyvalent par excellence pour le croquis aquarellé et les techniques mixtes.', specs: ['Mix-Media', '170g', 'Pratique'] },
]

export default function TechniquesHumides() {
  useEffect(() => { document.title = 'Techniques Humides | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Beaux-Arts" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/beaux-arts', label: 'Beaux-Arts' }, { label: 'Techniques Humides' }]} />
          <h1 className="reveal reveal-up">Techniques Humides</h1>
          <p>L'excellence pour l'aquarelle et l'acrylique. Des supports résistants à l'eau, à base de coton ou de cellulose pure.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
