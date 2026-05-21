import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Histoire() {
  useEffect(() => { document.title = 'Histoire | Clairefontaine' }, [])
  const timeline = [
    { date: '1858', title: 'Les origines', desc: 'Jean-Baptiste Bichelberger fonde la manufacture à Étival, tirant parti de la pureté des eaux de la Meurthe.' },
    { date: '1950', title: "L'Innovation Scolaire", desc: "Charles Nusse lance le cahier Clairefontaine tel qu'on le connaît : le premier avec une réglure Seyes parfaite." },
    { date: '1996', title: "Pionnier de l'Écologie", desc: "Première papeterie à s'engager dans la certification ISO 14001 pour la gestion environnementale." },
    { date: '2026', title: 'Cap sur le Futur', desc: 'Allier digital et papier pour une créativité sans limites, toujours dans le respect de nos racines.' },
  ]

  return (
    <>
      <section className="history-hero">
        <div className="container">
          <h1 className="reveal reveal-up">Depuis 1858</h1>
          <p>Une épopée industrielle et artistique au cœur des Vosges.</p>
        </div>
      </section>
      <section className="container">
        <div className="timeline">
          {timeline.map((item, i) => (
            <ScrollReveal key={i} className="reveal reveal-up">
              <div className="timeline-item" style={{ marginLeft: i % 2 === 0 ? '' : '50%', textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
