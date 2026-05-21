import { useEffect } from 'react'
import Bandeau from '../components/Bandeau'
import PageIntro from '../components/PageIntro'

const accentColor = '#E5007D'

export default function Papeterie() {
  useEffect(() => { document.title = 'Papeterie | Clairefontaine' }, [])
  return (
    <>
      <PageIntro
        eyebrow="Univers"
        title="Papeterie Scolaire & Bureau"
        description="Le cœur de métier historique de Clairefontaine depuis 1858. Des supports d'écriture d'une douceur inégalée pour accompagner chaque étape de la vie."
        accentColor={accentColor}
      />

      <Bandeau tag="Éducation" title="Scolaire & Étudiants" description="Cahiers, copies, et accessoires essentiels. Découvrez la gamme Mimesys et nos célèbres agendas pour une rentrée réussie." linkTo="/scolaire" linkText="Explorer la gamme" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Pédagogie" title="Enseignants" description="Des outils d'organisation pensés pour les professeurs : cahiers de bord, registres d'appel et supports grand format." linkTo="/enseignants" linkText="Voir les supports" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Inclusion" title="Gamme DYS" description="Conçue spécifiquement pour les troubles de l'apprentissage. Réglures spéciales et contrastes adaptés pour faciliter la lecture et l'écriture." linkTo="/dys" linkText="Découvrir l'innovation" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Tendance" title="Collections & Collaborations" descriptionHtml="Découvrez nos collections exclusives comme la gamme <strong>Frida Kahlo</strong> (Chemises à élastique, carnets) ou la très appréciée <strong>Flying Spirit</strong>. Alliez style et qualité Clairefontaine." linkTo="/papeterie" linkText="Découvrir les designs" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Iconique" title="Cahiers & Carnets" description="Age Bag, Mimesys, Classic... Le papier velouté 90g qui a fait notre renommée mondiale." linkTo="/papeterie" linkText="Toute la collection" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800" />
      <div className="seyess-divider"></div>
      <Bandeau tag="Élégance" title="Correspondance & Pollen" description="Pollen, enveloppes et papier à lettre. L'art de l'écriture pour vos messages les plus précieux." linkTo="/correspondance" linkText="Explorer Pollen" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=800" reverse />
    </>
  )
}
