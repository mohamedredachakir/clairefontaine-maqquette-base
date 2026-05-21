import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'

export default function Engagements() {
  useEffect(() => { document.title = 'Engagements RSE | Clairefontaine' }, [])
  const certs = [
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FSC_logo.svg/1200px-FSC_logo.svg.png', title: 'Certification FSC', desc: 'Garantit que le bois utilisé pour nos papiers provient de forêts gérées durablement.' },
    { img: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a3/Logo_PEFC.svg/1200px-Logo_PEFC.svg.png', title: 'Certification PEFC', desc: 'Soutient la gestion forestière écologiquement appropriée et socialement bénéfique.' },
    { icon: 'ISO 14001', title: 'Management Environnemental', desc: "Notre engagement quotidien pour réduire l'empreinte carbone de nos sites de production.", isText: true },
  ]

  return (
    <>
      <section className="eco-hero">
        <div className="container">
          <h1 className="reveal reveal-up">L'Excellence Durable</h1>
          <p>Protéger les forêts, c'est préserver notre avenir créatif.</p>
        </div>
      </section>
      <section className="container">
        <div className="cert-grid">
          {certs.map((c, i) => (
            <ScrollReveal key={i} className="reveal reveal-up">
              <div className="cert-card">
                {c.isText ? (
                  <div className="cert-icon">{c.icon}</div>
                ) : (
                  <img src={c.img} alt={c.title} className="cert-logo" />
                )}
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
