import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import PageIntro from '../components/PageIntro'

const POSTS_PER_PAGE = 3

const posts = [
  { image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600', category: 'Tutoriel', title: "5 techniques pour débuter à l'aquarelle", description: "Découvrez comment maîtriser l'eau et les pigments sur nos papiers Etival et Fontaine.", date: 'Publié le 12 Mai 2026' },
  { image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', category: 'Coulisses', title: "Visite privée de notre usine d'Étival", description: 'Plongez au cœur de notre manufacture vosgienne et découvrez les secrets de fabrication du papier velouté.', date: 'Publié le 05 Mai 2026' },
  { image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600', category: 'Événement', title: 'Clairefontaine au Salon des Beaux-Arts', description: 'Retour sur les temps forts de notre participation et les rencontres avec les artistes de demain.', date: 'Publié le 28 Avril 2026' },
  { image: 'https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=600', category: 'Produit', title: 'Focus sur la gamme Paint ON Denim', description: "Pourquoi cette nouvelle teinte bleue est devenue l'alliée incontournable des illustrateurs.", date: 'Publié le 15 Avril 2026' },
  { image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=600', category: 'RSE', title: 'Nos engagements pour la forêt', description: 'Comment nous travaillons chaque jour pour protéger la biodiversité avec les certifications PEFC et FSC.', date: 'Publié le 10 Avril 2026' },
  { image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600', category: 'Artiste', title: "Portrait d'artiste : Marie L. et le croquis nomade", description: 'Entretien exclusif avec une illustratrice qui ne quitte jamais son carnet Clairefontaine.', date: 'Publié le 02 Avril 2026' },
]

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const visible = posts.slice(start, start + POSTS_PER_PAGE)

  useEffect(() => { document.title = 'Blog | Clairefontaine' }, [])

  return (
    <>
      <PageIntro
        eyebrow="Le Mag"
        title="Actualités & Inspiration"
        description="Conseils d'artistes, tutoriels créatifs et coulisses de fabrication. Plongez dans l'univers Clairefontaine."
      />
      <section className="container">
        <div className="blog-grid">
          {visible.map((post, i) => <BlogCard key={start + i} {...post} />)}
        </div>
        {totalPages > 1 && (
          <div className="pagination">
            <button className="pagination-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>← Précédent</button>
            <div className="pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => (
                <button key={i} className={`pagination-page ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
            </div>
            <button className="pagination-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Suivant →</button>
          </div>
        )}
      </section>
    </>
  )
}
