import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Usines() {
  useEffect(() => { document.title = 'Nos Usines | Clairefontaine' }, [])
  const stats = [
    { number: '3500t', label: 'Papier produit / mois' },
    { number: '100%', label: 'Énergie Verte' },
    { number: '1858', label: 'Année de création' },
    { number: '550', label: 'Collaborateurs' },
  ]

  return (
    <>
      <section className="factory-header">
        <div className="container">
          <h1 className="reveal reveal-up">Le Savoir-Faire Industriel</h1>
          <p>Découvrez les coulisses de la manufacture française la plus emblématique.</p>
        </div>
      </section>
      <div className="container">
        <div className="factory-hero"></div>
      </div>
      <section className="container">
        <div className="factory-details">
          <div>
            <h2>Manufacture d'Étival</h2>
            <p>Nichée dans les Vosges, notre usine historique combine tradition et modernité. C'est ici que sont produites les millions de pages qui équipent les écoliers et les artistes du monde entier.</p>
            <p style={{ marginTop: '20px' }}>Nos installations respectent les normes les plus strictes en matière de retraitement des eaux et d'efficacité énergétique.</p>
          </div>
          <div className="stat-grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} className="reveal reveal-up">
                <div className="stat-item">
                  <span className="stat-number">{s.number}</span>
                  <p>{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
