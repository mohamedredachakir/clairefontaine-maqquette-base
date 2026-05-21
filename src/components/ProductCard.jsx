import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ProductCard({ image, title, description, specs, category }) {
  const slug = slugify(title)

  return (
    <ScrollReveal className="reveal reveal-up">
      <Link to={`/produit/${slug}`} state={{ product: { image, title, description, specs, category } }} className="product-card-link">
        <article className="product-card">
          <div className="product-image" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="product-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="product-specs">
              {specs.map((spec, i) => (
                <span key={i} className="spec-tag">{spec}</span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </ScrollReveal>
  )
}
