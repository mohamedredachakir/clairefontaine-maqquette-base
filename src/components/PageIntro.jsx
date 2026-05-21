export default function PageIntro({ eyebrow, title, description, accentColor }) {
  const style = accentColor ? { '--page-accent': accentColor } : undefined

  return (
    <section className="page-intro" style={style}>
      <div className="container">
        <div className="page-intro-inner">
          {eyebrow && <p className="page-intro-eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="page-intro-description">{description}</p>}
        </div>
      </div>
    </section>
  )
}
