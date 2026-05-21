import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/trousses-plumiers', label: 'Trousses & Plumiers' },
  { to: '/porte-documents', label: 'Porte-documents' },
  { to: '/sacs-dos', label: 'Sacs à dos' },
  { to: '/maroquinerie', label: 'Voir tout' },
]

const products = [
  { image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600', title: 'Trousse Classique Cuir', description: 'Trousse en cuir véritable 100% pleine fleur. Fermeture zip dorée. Capacité 15 stylos.', specs: ['Cuir', 'Zip doré', '15 stylos'] },
  { image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', title: 'Trousse Simili Toile', description: 'Trousse en similicuir aspect toile. Légère, résistante et disponible en 5 coloris.', specs: ['Simili', 'Toile', '5 couleurs'] },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', title: 'Plumier 2 Compartiments', description: 'Plumier en polyester avec 2 compartiments séparés. Idéal pour ranger crayons et feutres.', specs: ['Polyester', '2 compartiments', 'Solide'] },
  { image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600', title: 'Trousse Roll-up Artiste', description: 'Trousse enrouleur en coton pour 12 pinceaux ou crayons. Pratique pour les artistes nomades.', specs: ['Coton', '12 places', 'Rouleau'] },
]

export default function TroussesPlumiers() {
  useEffect(() => { document.title = 'Trousses & Plumiers | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Maroquinerie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/maroquinerie', label: 'Maroquinerie' }, { label: 'Trousses & Plumiers' }]} />
          <h1 className="reveal reveal-up">Trousses & Plumiers</h1>
          <p>Des modèles classiques ou modernes, en cuir véritable ou en matières innovantes, pour ranger vos instruments d\'écriture avec style.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
