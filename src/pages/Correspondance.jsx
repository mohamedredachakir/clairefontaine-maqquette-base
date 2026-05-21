import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/scolaire', label: 'Scolaire & Étudiants' },
  { to: '/dys', label: 'Gamme DYS' },
  { to: '/enseignants', label: 'Enseignants' },
  { to: '/papeterie#collections', label: 'Collections 2026' },
  { to: '/papeterie#cahiers', label: 'Cahiers & Carnets' },
  { to: '/correspondance', label: 'Correspondance' },
]

const products = [
  { image: 'https://www.clairefontaine.com/26422-thickbox_default/pollen-paquet-25-cartes-doubles-210g-106x158mm-blanc.jpg', title: 'Cartes Pollen', description: 'Cartes doubles 210g, surface lisse et soyeuse. Disponible en plus de 40 coloris.', specs: ['210g/m²', '40+ Couleurs', 'FSC'] },
  { image: 'https://www.clairefontaine.com/31415-thickbox_default/pollen-paquet-20-enveloppes-120g-114x162mm-c6-kraft.jpg', title: 'Enveloppes Pollen', description: 'Le complément parfait de vos cartes. Papier 120g de haute qualité avec patte gommée.', specs: ['120g', 'Couleurs assorties', 'Pollen'] },
]

export default function Correspondance() {
  useEffect(() => { document.title = 'Correspondance | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Papeterie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/papeterie', label: 'Papeterie' }, { label: 'Correspondance' }]} />
          <h1 className="reveal reveal-up">Correspondance <span style={{ color: 'var(--secondary)' }}>L'Art d'écrire</span></h1>
          <p>Découvrez la gamme <strong>Pollen</strong>. Un univers de couleurs et de textures pour vos faire-part, invitations et correspondances les plus élégantes.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
