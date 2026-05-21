import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function Bandeau({ tag, title, description, descriptionHtml, linkTo, linkText, linkVariant = 'primary', bgImage, accentColor, reverse }) {
  const btnStyle = linkVariant === 'primary'
    ? { backgroundColor: accentColor }
    : { borderColor: accentColor, color: accentColor, background: 'transparent' }

  return (
    <section className="section-bandeau" style={{ '--accent-color': accentColor }}>
      <ScrollReveal className="reveal reveal-up">
        <div className="container">
          <div className={`bandeau-grid${reverse ? ' reverse' : ''}`}>
            <div className="bandeau-content">
              <span className="tag-accent">{tag}</span>
              <h2>{title}</h2>
              {descriptionHtml ? <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> : <p>{description}</p>}
              <Link to={linkTo} className={`btn ${linkVariant === 'primary' ? 'btn-primary' : 'btn-secondary'}`} style={btnStyle}>
                {linkText}
              </Link>
            </div>
            <div className="bandeau-image" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}></div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
