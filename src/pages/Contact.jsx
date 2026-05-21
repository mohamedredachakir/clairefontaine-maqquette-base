import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import PageIntro from '../components/PageIntro'

const contactItems = [
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Adresse',
    text: (
      <>
        Papeteries Clairefontaine<br />
        2 Rue de l'Industrie<br />
        88150 Étival-Clairefontaine
      </>
    ),
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
    title: 'Téléphone',
    text: '+33 (0)3 29 32 62 62',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    title: 'Email',
    text: 'contact@clairefontaine.com',
  },
  {
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Horaires',
    text: (
      <>
        Lun-Ven : 8h30 - 17h30<br />
        Fermé le week-end
      </>
    ),
  },
]

export default function Contact() {
  useEffect(() => { document.title = 'Contact | Clairefontaine' }, [])

  return (
    <>
      <PageIntro
        eyebrow="Service client"
        title="Contact"
        description="Une équipe dédiée répond à vos demandes produit, pédagogiques et commerciales sous 48h."
      />

      <section className="container contact-section">
        <div className="contact-grid">
          <div className="contact-form-panel">
            <div className="section-header contact-section-header">
              <h2 className="contact-heading">Envoyez-nous un message</h2>
              <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
            </div>
            <form id="contact-form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <div>
                  <label htmlFor="prenom" className="contact-label">Prénom</label>
                  <input id="prenom" type="text" placeholder="Prénom" className="contact-input" />
                </div>
                <div>
                  <label htmlFor="nom" className="contact-label">Nom</label>
                  <input id="nom" type="text" placeholder="Nom" className="contact-input" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="contact-label">Email</label>
                <input id="email" type="email" placeholder="Email" className="contact-input" />
              </div>
              <div>
                <label htmlFor="sujet" className="contact-label">Sujet</label>
                <input id="sujet" type="text" placeholder="Sujet" className="contact-input" />
              </div>
              <div>
                <label htmlFor="message" className="contact-label">Votre message</label>
                <textarea id="message" placeholder="Votre message..." className="contact-input" rows="6"></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-submit">Envoyer le message</button>
            </form>
          </div>
          <aside className="contact-info-panel">
            <div className="section-header contact-section-header">
              <h2 className="contact-heading">Nos coordonnées</h2>
              <p>Retrouvez-nous également sur nos réseaux ou venez nous rencontrer.</p>
            </div>
            <div className="contact-details">
              {contactItems.map((item, index) => (
                <ScrollReveal
                  className="reveal reveal-up"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                  key={item.title}
                >
                  <div className="contact-card">
                    <span className="contact-icon contact-card-icon">{item.icon}</span>
                    <div>
                      <h4 className="contact-card-title">{item.title}</h4>
                      <p className="contact-card-text">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
