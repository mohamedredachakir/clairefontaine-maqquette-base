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
  { image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', title: 'Sac à dos Urbain 25L', description: 'Sac à dos en polyester recyclé 25L. Compartiment PC 15" et poche antivol dissimulée.', specs: ['25L', 'PC 15"', 'Recyclé'] },
  { image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600', title: 'Sac à dos Étudiant 30L', description: 'Grand volume 30L avec bretelles rembourrées. Idéal pour les étudiants au quotidien.', specs: ['30L', 'Rembourré', 'Étudiant'] },
  { image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600', title: 'Sacoche Bandoulière', description: 'Sacoche élégante en similicuir. Bandoulière ajustable et multiples poches de rangement.', specs: ['Simili', 'Bandoulière', 'Élégant'] },
  { image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600', title: 'Cartable Classique', description: 'Le cartable iconique Clairefontaine. Structure renforcée et compartiments organisés.', specs: ['Résistant', 'Organisé', 'Iconique'] },
]

export default function SacsDos() {
  useEffect(() => { document.title = 'Sacs à dos | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Maroquinerie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/maroquinerie', label: 'Maroquinerie' }, { label: 'Sacs à dos' }]} />
          <h1 className="reveal reveal-up">Sacs à dos & Bagagerie</h1>
          <p>Conçus pour durer, nos sacs allient confort et design épuré. Le compagnon idéal des étudiants et des actifs.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
