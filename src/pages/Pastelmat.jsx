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
  { image: 'https://www.clairefontaine.com/26422-thickbox_default/pastelmat-bloc-encolle-12-feuilles-360g-24x30cm-couleurs-assorties.jpg', title: 'Bloc Pastelmat', description: '12 feuilles de 360g avec intercalaires en papier cristal pour protéger vos œuvres.', specs: ['360g/m²', 'Particules Bois', 'Acide-free'] },
  { image: 'https://www.clairefontaine.com/31415-thickbox_default/pastelmat-feuille-50x70cm-360g-anthracite.jpg', title: 'Feuilles Pastelmat', description: 'Disponible en 14 coloris. Un confort de travail inégalé pour multiplier les couches.', specs: ['50x70cm', '360g', 'Anthracite'] },
]

export default function Pastelmat() {
  useEffect(() => { document.title = 'Pastelmat | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Beaux-Arts" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/beaux-arts', label: 'Beaux-Arts' }, { label: 'Pastelmat' }]} />
          <h1 className="reveal reveal-up">Pastelmat <span style={{ color: 'var(--beaux-arts)' }}>L'Expertise Pastel</span></h1>
          <p>La révolution pour les pastellistes. Une surface unique composée de fines particules de cellulose de bois qui retient le pigment sans aucun fixatif.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
