import { useEffect } from 'react'
import Bandeau from '../components/Bandeau'
import PageIntro from '../components/PageIntro'

const accentColor = '#6D6E71'

export default function Emballage() {
  useEffect(() => { document.title = 'Emballage | Clairefontaine' }, [])
  return (
    <>
      <PageIntro
        eyebrow="Univers"
        title="Emballage Cadeaux & Raffinement"
        description='Le raffinement de l&apos;emballage "Made in France". Des solutions haut de gamme pour sublimer tous vos cadeaux.'
        accentColor={accentColor}
      />
      <Bandeau tag="Authenticité" title="Papiers Kraft" description="Naturel ou imprimé, le Kraft Clairefontaine allie résistance et esthétique. Idéal pour un emballage à la fois brut et élégant." linkTo="/papiers-kraft" linkText="Voir les Krafts" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Prestige" title="Gammes Premium" description="Effets métallisés, textures soyeuses et designs exclusifs. Pour les occasions qui méritent l'exceptionnel." linkTo="/gammes-premium" linkText="Découvrir Premium" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Prêt-à-offrir" title="Sacs & Coffrets" description="Une large collection de sacs cadeaux et coffrets coordonnés. La solution parfaite pour un emballage rapide et sophistiqué." linkTo="/sacs-cadeaux" linkText="Toute la collection" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Détails" title="Accessoires" description="Rubans, étiquettes et bolducs. Le petit plus qui fait toute la différence pour vos paquets cadeaux." linkTo="/accessoires-emballage" linkText="Voir les accessoires" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800" reverse />
    </>
  )
}
