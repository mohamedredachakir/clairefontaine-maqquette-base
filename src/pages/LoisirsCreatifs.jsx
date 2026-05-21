import { useEffect } from 'react'
import Bandeau from '../components/Bandeau'
import PageIntro from '../components/PageIntro'

const accentColor = '#F39200'

export default function LoisirsCreatifs() {
  useEffect(() => { document.title = 'Loisirs Créatifs | Clairefontaine' }, [])
  return (
    <>
      <PageIntro
        eyebrow="Univers"
        title="Loisirs Créatifs & DIY"
        description="Inspiration et supports pour la création manuelle. Libérez votre créativité avec nos papiers et kits innovants."
        accentColor={accentColor}
      />
      <Bandeau tag="Initiation" title="Kits créatifs" description="Boîtes tout-en-un pour s'initier : Lettering, fleurs en crépon, origami guidé ou quilling. Tout pour réussir vos premières créations." linkTo="/kits-creatifs" linkText="Découvrir les kits" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" />
      <Bandeau tag="Organisation" title="Carnets créatifs" description="Bullet Journals (Dot Pad), carnets de coloriage et albums photos. Des supports pensés pour votre créativité personnelle." linkTo="/carnets-creatifs" linkText="Explorer les carnets" linkVariant="secondary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800" reverse />
      <Bandeau tag="Matières" title="Papiers créatifs" description="Une variété infinie de textures : Origami, Scrapbooking, papier de soie, ou encore la gamme Pollen pour vos faire-part." linkTo="/papiers-creatifs" linkText="Voir toutes les textures" linkVariant="primary" accentColor={accentColor} bgImage="https://images.unsplash.com/photo-1586075010633-247fe3817342?auto=format&fit=crop&q=80&w=800" />
    </>
  )
}
