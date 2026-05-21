import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const fallbackPost = {
  image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
  category: '',
  title: 'Article non trouvé',
  description: 'Cet article n\'est pas disponible pour le moment.',
  date: '',
}

export default function BlogDetail() {
  const location = useLocation()
  const post = location.state?.post || fallbackPost

  useEffect(() => {
    document.title = `${post.title} | Blog Clairefontaine`
  }, [post.title])

  return (
    <>
      <section className="container" style={{ padding: '40px 0 0' }}>
        <div className="breadcrumbs">
          <Link to="/">Accueil</Link>
          <span>/</span><Link to="/blog">Blog</Link>
          <span>/</span><span>{post.title}</span>
        </div>
      </section>

      <article className="blog-detail container" style={{ padding: '40px 0 80px' }}>
        <div className="blog-detail-image" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', borderRadius: 'var(--radius)', marginBottom: '40px' }}></div>

        <div className="blog-detail-header">
          {post.category && <span className="blog-category">{post.category}</span>}
          <h1 className="blog-detail-title">{post.title}</h1>
          <div className="blog-meta" style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>{post.date}</div>
        </div>

        <div className="blog-detail-content">
          <p className="blog-detail-intro">{post.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>Un savoir-faire unique</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>

        <div className="blog-detail-footer">
          <Link to="/blog" className="btn btn-secondary">← Retour au blog</Link>
        </div>
      </article>
    </>
  )
}
