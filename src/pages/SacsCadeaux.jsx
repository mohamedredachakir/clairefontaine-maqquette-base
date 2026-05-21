import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'

const links = [
  { to: '/papiers-kraft', label: 'Papiers Kraft' },
  { to: '/gammes-premium', label: 'Gammes Premium' },
  { to: '/sacs-cadeaux', label: 'Sacs & Coffrets' },
  { to: '/accessoires-emballage', label: 'Accessoires' },
  { to: '/emballage', label: 'Voir tout' },
]

const products = [
  { image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=600', title: 'Sac Kraft Petit', description: 'Sac cadeau en kraft naturel 120g avec anses corde. Format S (18x22x8cm).', specs: ['Kraft', 'Anses corde', 'S'] },
  { image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600', title: 'Sac Kraft Moyen', description: 'Sac cadeau kraft blanc 140g, anses ruban. Format M (25x30x10cm). Idéal pour les vêtements.', specs: ['Blanc', 'Anses ruban', 'M'] },
  { image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600', title: 'Sac Kraft Grand', description: 'Grand sac en kraft brun 160g anses plates. Format L (32x40x12cm) pour les gros volumes.', specs: ['Brun', 'Anses plates', 'L'] },
  { image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&q=80&w=600', title: 'Coffret Cadeau Premium', description: 'Coffret rigide recouvert de papier velours avec fermeture aimantée et mousse intérieure.', specs: ['Rigide', 'Velours', 'Aimanté'] },
  { image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=600', title: 'Boîte à Chapeau Ronde', description: 'Boîte cylindrique en carton kraft 2mm d\'épaisseur. Disponible en 3 diamètres.', specs: ['Ronde', 'Carton 2mm', '3 tailles'] },
]

export default function SacsCadeaux() {
  useEffect(() => { document.title = 'Sacs & Coffrets | Clairefontaine' }, [])

  return (
    <div className="container">
      <div className="page-layout">
        <Sidebar title="Emballage" links={links} />
        <section className="content">
          <Breadcrumbs items={[{ to: '/', label: 'Accueil' }, { to: '/emballage', label: 'Emballage' }, { label: 'Sacs & Coffrets' }]} />
          <h1 className="reveal reveal-up">Sacs & Coffrets</h1>
          <p>Une large collection de sacs cadeaux et coffrets coordonnés pour un emballage rapide, élégant et sophistiqué.</p>
          <div className="product-grid">
            {products.map((p, i) => <ProductCard key={i} {...p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
