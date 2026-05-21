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
  { image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600', title: 'Porte-documents Cuir A4', description: 'Porte-documents en cuir véritable avec fermeture zip. Poches intérieures pour documents et cartes.', specs: ['Cuir', 'A4', 'Zip'] },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', title: 'Serviette Conférencier', description: 'Serviette en similicuir élégante avec poignée. 3 compartiments et poche ordinateur 15".', specs: ['Simili', '15" PC', '3 compart.'] },
  { image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', title: 'Bloc-note Professionnel', description: 'Porte-bloc en cuir avec bloc-notes A4 et poches de rangement. Idéal pour les rendez-vous.', specs: ['Cuir', 'Bloc A4', 'Professionnel'] },
  { image: 'https://images.unsplash.com/photo-1513364585368-87b5d42c24c4?auto=format&fit=crop&q=80&w=600', title: 'Porte-documents Toilé', description: 'Version légère en toile enduite. Imperméable et robuste pour les déplacements quotidiens.', specs: ['Toile', 'Imperméable', 'Léger'] },
]

export default function PorteDocuments() {
  useEffect(() => { document.title = 'Porte-documents | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Maroquinerie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/maroquinerie', label: 'Maroquinerie' }, { label: 'Porte-documents' }]} />
          <h1 className="reveal reveal-up">Conférenciers & Porte-documents</h1>
          <p>L'expertise Clairefontaine pour vos réunions. Des supports élégants et fonctionnels pour organiser vos notes et projets.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
