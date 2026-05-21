import { useEffect } from 'react'
import Bandeau from '../components/Bandeau'
import PageIntro from '../components/PageIntro'

const accentColor = '#333333'

export default function BeauxArts() {
  useEffect(() => { document.title = 'Beaux-Arts | Clairefontaine' }, [])
  return (
    <>
      <PageIntro
        eyebrow="Univers"
        title="Beaux-Arts & Expertise"
        description="L'expertise technique au service des artistes. Des supports d'exception pour toutes les techniques, du croquis à l'huile."
        accentColor={accentColor}
      />
      <Bandeau tag="Fondamentaux" title="Pochette dessin" description="Le classique incontournable du milieu scolaire et artistique. Papier blanc (grain, lisse, bristol), calque ou papier couleur." linkTo="/beaux-arts" linkText="Découvrir les pochettes" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Précision" title="Techniques Sèches & Pastel" description="Crayon, pastel, fusain ou feutre. Nos papiers Ingres et la célèbre gamme Pastelmat offrent une accroche exceptionnelle des pigments." linkTo="/pastelmat" linkText="Explorer Pastelmat" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Fluidité" title="Techniques Humides" description="Aquarelle, Gouache, Acrylique. Des papiers résistants (Fontaine, Etival) pour une gestion parfaite de l'eau et de la lumière." linkTo="/techniques-humides" linkText="Voir les gammes" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Polyvalence" title="Gamme Paint ON & Manga" description="Paint ON : Notre gamme phare multi-technique (Blanc, noir, gris, naturel, denim). Découvrez aussi notre nouvelle collection spéciale Manga et illustration." linkTo="/paint-on" linkText="Découvrir Paint ON" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000" reverse />
      <Bandeau tag="Nomadisme" title="Carnets de voyages" description="Compagnons de route pour le croquis et l'aquarelle nomade. Papier épais absorbant et reliures robustes pour capturer l'instant." linkTo="/beaux-arts" linkText="Choisir son carnet" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" />
    </>
  )
}
