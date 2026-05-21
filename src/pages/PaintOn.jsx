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
  { image: 'https://www.clairefontaine.com/26422-thickbox_default/paint-on-bloc-encolle-30f-250g-21x297cm-blanc.jpg', title: 'Paint ON Blanc', description: 'Le classique pur. Une blancheur éclatante pour faire ressortir vos contrastes.', specs: ['250g/m²', 'Multi-techniques'] },
  { image: 'https://www.clairefontaine.com/31415-thickbox_default/paint-on-bloc-encolle-30f-250g-21x297cm-denim.jpg', title: 'Paint ON Denim', description: 'Une teinte bleu gris profonde, parfaite pour le pastel sec et les rehauts de blanc.', specs: ['250g', 'Denim'] },
  { image: 'https://www.clairefontaine.com/28456-thickbox_default/paint-on-bloc-encolle-30f-250g-21x297cm-noir.jpg', title: 'Paint ON Noir', description: "Pour des créations d'une intensité rare. Idéal pour les stylos gel et la gouache.", specs: ['250g', 'Noir', 'Multi-techniques'] },
]

export default function PaintOn() {
  useEffect(() => { document.title = 'Paint ON | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Beaux-Arts" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/beaux-arts', label: 'Beaux-Arts' }, { label: 'Paint ON' }]} />
          <h1 className="reveal reveal-up">Paint ON <span style={{ color: 'var(--beaux-arts)' }}>Multi-Techniques</span></h1>
          <p>Le support de prédilection des artistes modernes. Un papier épais de 250g, multi-teintes, capable d'encaisser aussi bien le feutre que l'aquarelle ou la gouache.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
