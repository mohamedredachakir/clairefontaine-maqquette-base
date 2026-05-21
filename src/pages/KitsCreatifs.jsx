import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/kits-creatifs', label: 'Kits Créatifs' },
  { to: '/carnets-creatifs', label: 'Carnets Créatifs' },
  { to: '/papiers-creatifs', label: 'Papiers Créatifs' },
  { to: '/loisirs-creatifs', label: 'Voir tout' },
]

const products = [
  { image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600', title: 'Kit Lettering Découverte', description: 'Tout pour débuter le lettering : stylos pinceaux, cahier d\'exercices et guide pas à pas.', specs: ['Débutant', 'Complet', 'Loisir'] },
  { image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=600', title: 'Kit Origami 3D', description: '30 feuilles de papier origami + livret explicatif pour créer des animaux et fleurs en volume.', specs: ['Origami', 'Créatif', '3D'] },
  { image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600', title: 'Kit Crépon & Papiers', description: 'Assortiment de papiers crépon de toutes les couleurs pour vos décorations et fleurs.', specs: ['Crépon', 'DIY', 'Déco'] },
  { image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600', title: 'Kit Scrapbooking', description: 'Papiers imprimés, stickers, masking tape et poinçons pour albums photos uniques.', specs: ['Scrap', 'Album', 'Complet'] },
  { image: 'https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=600', title: 'Kit Aquarelle Découverte', description: '6 godets aquarelle, pinceau réservoir et papier Fontaine 300g pour débuter l\'aquarelle.', specs: ['Aquarelle', 'Débutant', '6 couleurs'] },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', title: 'Kit Carnet de Voyage', description: 'Un carnet Clairefontaine, des crayons aquarelle et un étui de voyage pour croquer le monde.', specs: ['Nomade', 'Complet', 'Voyage'] },
]

export default function KitsCreatifs() {
  useEffect(() => { document.title = 'Kits Créatifs | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Loisirs Créatifs" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/loisirs-creatifs', label: 'Loisirs Créatifs' }, { label: 'Kits Créatifs' }]} />
          <h1 className="reveal reveal-up">Kits Créatifs</h1>
          <p>Des coffrets tout-en-un pour découvrir et pratiquer de nouvelles techniques créatives. Le cadeau idéal pour petits et grands.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
