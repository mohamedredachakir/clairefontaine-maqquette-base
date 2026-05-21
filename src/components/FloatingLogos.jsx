export default function FloatingLogos() {
  const logos = [
    { top: '10%', left: '5%', width: '80px', delay: '0s', opacity: '0.08' },
    { top: '40%', left: '85%', width: '120px', delay: '-2s', opacity: '0.04' },
    { top: '70%', left: '15%', width: '60px', delay: '-5s', opacity: '0.08' },
    { top: '20%', left: '75%', width: '100px', delay: '-7s', opacity: '0.06' },
  ]

  return (
    <div className="floating-container">
      {logos.map((l, i) => (
        <img
          key={i}
          src="/logo-clairefontaine.svg"
          className="floating-logo"
          style={{ top: l.top, left: l.left, width: l.width, animationDelay: l.delay, opacity: l.opacity }}
          alt=""
        />
      ))}
    </div>
  )
}
