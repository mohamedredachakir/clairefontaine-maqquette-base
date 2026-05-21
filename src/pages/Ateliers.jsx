import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const ateliers = [
  { title: 'Initiation à l\'Aquarelle', desc: 'Apprenez les bases de l\'aquarelle sur papier Fontaine. Laissez-vous guider par nos artistes pour maîtriser le lavis et les dégradés.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800', level: 'Débutant', duree: '3h' },
  { title: 'Pastel Sec & Pastelmat', desc: 'Découvrez les secrets du pastel sur support Pastelmat. Une technique accessible pour des résultats époustouflants.', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800', level: 'Intermédiaire', duree: '4h' },
  { title: 'Calligraphie Moderne', desc: 'Plongez dans l\'art de la belle écriture avec nos outils Pollen. Parfait pour personnaliser vos faire-part et invitations.', image: 'https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=800', level: 'Tous niveaux', duree: '2h30' },
  { title: 'Carnet de Voyage', desc: 'Capturez vos souvenirs dans un carnet Clairefontaine. Techniques mixtes pour un rendu unique et personnel.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', level: 'Intermédiaire', duree: '3h30' },
]

export default function Ateliers() {
  useEffect(() => { document.title = 'Ateliers | Clairefontaine' }, [])

  return (
    <>
      <section className="blog-header" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="hero-pretitle" style={{ color: 'var(--secondary)' }}>Créativité</p>
          <h1 className="reveal reveal-up">Nos Ateliers</h1>
          <p className="hero-description reveal reveal-up" style={{ transitionDelay: '0.1s' }}>Des ateliers créatifs animés par nos artistes pour explorer toutes les techniques du papier.</p>
        </div>
      </section>
      <section className="container" style={{ padding: '80px 0' }}>
        <div className="blog-grid">
          {ateliers.map((a, i) => (
            <ScrollReveal key={i} className="reveal reveal-up">
              <article className="blog-card">
                <div className="blog-card-image" style={{ backgroundImage: `url(${a.image})` }}></div>
                <div className="blog-card-content">
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="blog-category">{a.level}</span>
                    <span className="blog-category" style={{ color: 'var(--text-muted)' }}>{a.duree}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
