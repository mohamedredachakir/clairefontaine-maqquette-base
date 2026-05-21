import { Link } from 'react-router-dom'

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function BlogCard({ image, category, title, description, date }) {
  const slug = slugify(title)
  return (
    <Link to={`/blog/${slug}`} state={{ post: { image, category, title, description, date } }} className="blog-card-link">
      <article className="blog-card">
        <div className="blog-card-image" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="blog-card-content">
          <span className="blog-category">{category}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="blog-meta">{date}</div>
        </div>
      </article>
    </Link>
  )
}
