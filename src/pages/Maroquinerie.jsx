import { useEffect } from 'react'
import Bandeau from '../components/Bandeau'
import PageIntro from '../components/PageIntro'

const accentColor = '#004691'

export default function Maroquinerie() {
  useEffect(() => { document.title = 'Maroquinerie | Clairefontaine' }, [])
  return (
    <>
      <PageIntro
        eyebrow="Univers"
        title="Maroquinerie & Accessoires"
        description="L'élégance du cuir et du simili au service de votre quotidien. Des accessoires de bureau et de transport coordonnés à nos collections."
        accentColor={accentColor}
      />
      <Bandeau tag="Essentiels" title="Trousses & Plumiers" description="Des modèles classiques ou modernes, en cuir véritable ou en matières innovantes, pour ranger vos instruments d'écriture avec style." linkTo="/trousses-plumiers" linkText="Voir les trousses" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Professionnel" title="Conférenciers & Porte-documents" description="L'expertise Clairefontaine pour vos réunions. Des supports élégants et fonctionnels pour organiser vos notes et vos projets." linkTo="/porte-documents" linkText="Découvrir la gamme" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Mobilité" title="Sacs à dos & Bagagerie" description="Conçus pour durer, nos sacs allient confort et design épuré. Le compagnon idéal pour les étudiants et les actifs." linkTo="/sacs-dos" linkText="Explorer la mobilité" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800" />
    </>
  )
}
