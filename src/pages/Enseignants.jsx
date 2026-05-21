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
  { image: 'https://www.clairefontaine.com/26422-thickbox_default/registre-d-appel-journalier-scolaire-format-a4.jpg', title: "Registre d'Appel", description: "L'indispensable du bureau. Reliure solide et papier haute qualité.", specs: ['Format A4', 'Relié'] },
  { image: 'https://www.clairefontaine.com/31415-thickbox_default/cahier-de-bord-de-l-enseignant.jpg', title: 'Cahier de Bord', description: 'Conçu pour le suivi des classes et la préparation des cours.', specs: ['Organisation', 'Praticité'] },
]

export default function Enseignants() {
  useEffect(() => { document.title = 'Enseignants | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Papeterie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/papeterie', label: 'Papeterie' }, { label: 'Enseignants' }]} />
          <h1 className="reveal reveal-up">Espace Enseignants</h1>
          <p>Des outils d'organisation pensés par des professionnels pour des professionnels. Fiabilité, clarté et durabilité.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
