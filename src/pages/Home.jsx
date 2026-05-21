import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  useEffect(() => { document.title = 'Clairefontaine | Tradition & Modernité' }, [])
  return (
    <>
      <section className="hero">
        <img src="/hero1.jpg" alt="Clairefontaine Artistic Background" className="hero-bg-image" />
        <div className="hero-container">
          <div className="reveal-stagger active">
            <h1>
              <span>Héritage & Passion</span>
              L'art de donner vie<br />à vos émotions.
            </h1>
            <p className="hero-description">Depuis 1858, chaque fibre de notre papier raconte une histoire d'excellence. Plongez dans un univers où le geste devient œuvre, et le support, une inspiration.</p>
            <div className="hero-actions">
              <Link to="/#univers" className="btn btn-primary">Explorer les Univers</Link>
              <Link to="/histoire" className="btn btn-secondary">Notre Manufacture</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span className="scroll-text">Explorer</span>
        </div>
      </section>

      <section id="univers" className="univers-section">
        <div className="container">
          <ScrollReveal className="reveal reveal-up">
            <div className="univers-header">
              <span className="univers-badge">Découvrir</span>
              <h2>Nos univers</h2>
              <p className="univers-sub">Une expertise unique pour chaque besoin créatif.</p>
            </div>
          </ScrollReveal>
          <div className="univers-grid">
            <Link to="/papeterie" className="universe-card">
              <div className="universe-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="universe-card-overlay" style={{ background: 'linear-gradient(135deg, rgba(229,0,125,0.85) 0%, rgba(229,0,125,0.4) 100%)' }}></div>
              <div className="universe-card-content">
                <span className="universe-card-tag">Essentiels</span>
                <h3>Papeterie</h3>
                <p>Scolaire, Étudiants & Enseignants</p>
                <span className="universe-card-arrow">→</span>
              </div>
            </Link>
            <Link to="/beaux-arts" className="universe-card">
              <div className="universe-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="universe-card-overlay" style={{ background: 'linear-gradient(135deg, rgba(51,51,51,0.85) 0%, rgba(51,51,51,0.4) 100%)' }}></div>
              <div className="universe-card-content">
                <span className="universe-card-tag">Expertise</span>
                <h3>Beaux-Arts</h3>
                <p>Techniques sèches & humides</p>
                <span className="universe-card-arrow">→</span>
              </div>
            </Link>
            <Link to="/loisirs-creatifs" className="universe-card">
              <div className="universe-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="universe-card-overlay" style={{ background: 'linear-gradient(135deg, rgba(243,146,0,0.85) 0%, rgba(243,146,0,0.4) 100%)' }}></div>
              <div className="universe-card-content">
                <span className="universe-card-tag">Inspiration</span>
                <h3>Loisirs Créatifs</h3>
                <p>Kits, origami & papiers créatifs</p>
                <span className="universe-card-arrow">→</span>
              </div>
            </Link>
            <Link to="/emballage" className="universe-card">
              <div className="universe-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="universe-card-overlay" style={{ background: 'linear-gradient(135deg, rgba(109,110,113,0.85) 0%, rgba(109,110,113,0.4) 100%)' }}></div>
              <div className="universe-card-content">
                <span className="universe-card-tag">Élégance</span>
                <h3>Emballage</h3>
                <p>Papiers kraft & Premium</p>
                <span className="universe-card-arrow">→</span>
              </div>
            </Link>
            <Link to="/maroquinerie" className="universe-card">
              <div className="universe-card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800)' }}></div>
              <div className="universe-card-overlay" style={{ background: 'linear-gradient(135deg, rgba(0,70,145,0.85) 0%, rgba(0,70,145,0.4) 100%)' }}></div>
              <div className="universe-card-content">
                <span className="universe-card-tag">Savoir-faire</span>
                <h3>Maroquinerie</h3>
                <p>Trousses, sacs & accessoires</p>
                <span className="universe-card-arrow">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal className="reveal reveal-up">
        <section className="featured-section">
          <div className="container">
            <div className="featured-card">
              <div className="featured-text">
                <span className="label">Focus Innovation</span>
                <h2>Paint ON & Collections</h2>
                <p><strong>Paint ON</strong> : La gamme phare multi-technique. Un support unique pour tous vos médiums. Découvrez également nos collections tendances comme <strong>Frida Kahlo</strong> et <strong>Flying Spirit</strong>.</p>
                <Link to="/beaux-arts" className="btn btn-link">Explorer la gamme →</Link>
              </div>
              <div className="featured-image-placeholder"></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="reveal reveal-up">
        <section className="heritage-section">
          <div className="container">
            <div className="heritage-content">
              <div className="heritage-text">
                <p className="italic">"Depuis 1858 à Étival-Clairefontaine"</p>
                <h2>Notre engagement</h2>
                <p>Plus qu'une marque, une manufacture française engagée pour l'environnement (PEFC/FSC) et l'excellence technique.</p>
                <Link to="/histoire" className="btn btn-outline-white">Qui sommes-nous ?</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
