import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function Brand() {
  useEffect(() => { document.title = 'Qui sommes-nous ? | Clairefontaine' }, [])
  const timeline = [
    { date: '1858', title: 'Fondation', desc: 'Jean-Baptiste Bichelberger installe une papeterie à Étival, profitant de la force hydraulique de la Meurthe.' },
    { date: '1950', title: 'Le cahier iconique', desc: 'Lancement de la gamme de cahiers qui fera la renommée mondiale de la marque auprès des écoliers.' },
    { date: '1996', title: 'Exigence environnementale', desc: "Clairefontaine devient l'une des premières papeteries européennes à obtenir la certification ISO 14001." },
    { date: '2026', title: "L'avenir durable", desc: "Poursuite de notre mission : l'excellence technique au service d'un monde plus créatif et respectueux." },
  ]

  return (
    <>
      <section className="brand-hero">
        <div className="container">
          <h1 className="reveal reveal-up">Une passion française</h1>
          <p>Depuis 1858 à Étival-Clairefontaine, nous façonnons l'excellence papetière pour accompagner vos plus belles idées.</p>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <h2>Notre Histoire</h2>
            <p>Plus d'un siècle et demi d'innovation et de savoir-faire.</p>
          </div>
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
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ color: 'var(--success)' }}>Nos Valeurs & Engagements</h2>
            <p>Parce que la qualité du papier commence par le respect de la nature.</p>
          </div>
          <div className="values-grid">
            {[
              { title: 'Éco-responsabilité', desc: 'Certifications PEFC et FSC pour une gestion durable des forêts. 100% de nos papiers sont recyclables.' },
              { title: 'Savoir-faire Français', desc: 'Une production intégrée sur nos sites historiques pour garantir une qualité irréprochable.' },
              { title: 'Innovation Technique', desc: 'Recherche constante de nouvelles textures et supports pour répondre aux exigences des artistes.' },
            ].map((v, i) => (
              <ScrollReveal key={i} className="reveal reveal-up">
                <div className="value-card">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="factories-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos Usines</h2>
            <p>Découvrez les coulisses de la fabrication Clairefontaine.</p>
          </div>
          <div className="factory-display">
            <div className="factory-image"></div>
            <div className="factory-content">
              <h3>Étival-Clairefontaine</h3>
              <p>Le site historique où tout a commencé. Aujourd'hui, il combine tradition industrielle et technologies de pointe pour produire des millions de pages chaque jour.</p>
              <p style={{ marginTop: '20px' }}>Une manufacture qui respire au rythme de la vallée vosgienne, engagée dans une démarche de réduction constante de son empreinte eau et énergie.</p>
              <Link to="/usines" className="btn btn-primary">Découvrir le savoir-faire</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section" style={{ backgroundColor: 'var(--white)', borderBottom: 'none' }}>
        <div className="container">
          <div className="section-header">
            <h2>Documents Utiles</h2>
            <p>Accédez à nos ressources et certificats officiels.</p>
          </div>
          <div className="values-grid">
            {[
              { label: 'PDF', title: 'Catalogues 2026', desc: "Découvrez l'intégralité de nos collections Papeterie et Beaux-Arts." },
              { label: 'INFO', title: 'Fiches Techniques', desc: 'Spécifications détaillées sur nos grains de papier et grammages.' },
              { label: 'CERT', title: 'Engagements RSE', desc: 'Nos certificats PEFC, FSC et ISO 14001 en toute transparence.' },
            ].map((d, i) => (
              <ScrollReveal key={i} className="reveal reveal-up">
                <div className="value-card">
                  <span className="doc-label">{d.label}</span>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <Link to={i === 0 ? '/papeterie' : i === 1 ? '/scolaire' : '/engagements'} className="doc-link">{i === 0 ? 'Télécharger (45MB)' : i === 1 ? 'Consulter les fiches' : 'Voir les certificats'}</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
