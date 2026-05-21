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
  { image: 'https://www.clairefontaine.com/31415-thickbox_default/cahier-pique-dys-90g-17x22cm-seyes-agrandi.jpg', title: 'Cahier DYS Seyes Agrandi', description: "Réglures agrandies et contrastes renforcés pour aider à la structuration de l'écriture.", specs: ['Inclusion', '90g', 'Dyslexie'] },
  { image: 'https://www.clairefontaine.com/31420-thickbox_default/feuilles-doubles-dys-couleurs-assorties.jpg', title: 'Feuilles Couleurs DYS', description: 'Des teintes douces (ivoire, bleu ciel, rose) qui limitent la fatigue visuelle et le "saut de lignes".', specs: ['Confort', 'Lecture', 'Inclusion'] },
]

export default function Dys() {
  useEffect(() => { document.title = 'Gamme DYS | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Papeterie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/papeterie', label: 'Papeterie' }, { label: 'Gamme DYS' }]} />
          <h1 className="reveal reveal-up">Gamme DYS <span style={{ color: 'var(--secondary)' }}>Inclusion</span></h1>
          <p>Parce que chaque enfant a le droit à un support adapté. Une gamme conçue avec des spécialistes pour pallier les troubles de l'apprentissage.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
