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
  { image: 'https://www.clairefontaine.com/8354-thickbox_default/cahier-pique-mimesys-polypro-90g-24x32cm-96-pages-seyes.jpg', title: 'Cahier Mimesys', description: 'Couverture polypro souple et résistante. Pas besoin de protège-cahier.', specs: ['90g/m²', 'Polypro', 'Seyes'] },
  { image: 'https://www.clairefontaine.com/26422-thickbox_default/koverbook-cahier-pique-polypro-avec-rabats-marque-page-90g-24x32cm-96-pages-seyes.jpg', title: 'Koverbook', description: 'Le cahier 2-en-1 avec protège-cahier et rabats marque-page intégrés.', specs: ['Breveté', 'Pratique', '90g'] },
  { image: 'https://www.clairefontaine.com/28456-thickbox_default/agenda-journalier-scolaire-broche-12x17cm-clairefontaine.jpg', title: 'Agendas Clairefontaine', description: "L'indispensable pour organiser son année avec style et clarté.", specs: ['2026-2027', 'Broché'] },
  { image: 'https://www.clairefontaine.com/20120-thickbox_default/copies-doubles-perforees-90g-21x297cm-seyes-100-pages.jpg', title: 'Copies Doubles', description: 'Le papier velouté 90g mythique pour vos examens et devoirs.', specs: ['Premium', '90g', 'PEFC'] },
]

export default function Scolaire() {
  useEffect(() => { document.title = 'Scolaire & Étudiants | Clairefontaine' }, [])
  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Papeterie" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/papeterie', label: 'Papeterie' }, { label: 'Scolaire & Étudiants' }]} />
          <h1 className="reveal reveal-up">Scolaire & Étudiants</h1>
          <p>L'excellence pour apprendre et réussir. Des supports robustes et un papier velouté pour un confort d'écriture optimal.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
