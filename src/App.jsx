import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Papeterie from './pages/Papeterie'
import BeauxArts from './pages/BeauxArts'
import LoisirsCreatifs from './pages/LoisirsCreatifs'
import Emballage from './pages/Emballage'
import Maroquinerie from './pages/Maroquinerie'
import Histoire from './pages/Histoire'
import Engagements from './pages/Engagements'
import Blog from './pages/Blog'
import Brand from './pages/Brand'
import Usines from './pages/Usines'
import Scolaire from './pages/Scolaire'
import Enseignants from './pages/Enseignants'
import Dys from './pages/Dys'
import Correspondance from './pages/Correspondance'
import PaintOn from './pages/PaintOn'
import Pastelmat from './pages/Pastelmat'
import TechniquesHumides from './pages/TechniquesHumides'
import Ateliers from './pages/Ateliers'
import Contact from './pages/Contact'
import KitsCreatifs from './pages/KitsCreatifs'
import CarnetsCreatifs from './pages/CarnetsCreatifs'
import PapiersCreatifs from './pages/PapiersCreatifs'
import PapiersKraft from './pages/PapiersKraft'
import GammesPremium from './pages/GammesPremium'
import SacsCadeaux from './pages/SacsCadeaux'
import AccessoiresEmballage from './pages/AccessoiresEmballage'
import TroussesPlumiers from './pages/TroussesPlumiers'
import PorteDocuments from './pages/PorteDocuments'
import SacsDos from './pages/SacsDos'
import BlogDetail from './pages/BlogDetail'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/papeterie" element={<Papeterie />} />
        <Route path="/beaux-arts" element={<BeauxArts />} />
        <Route path="/loisirs-creatifs" element={<LoisirsCreatifs />} />
        <Route path="/emballage" element={<Emballage />} />
        <Route path="/maroquinerie" element={<Maroquinerie />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/usines" element={<Usines />} />
        <Route path="/scolaire" element={<Scolaire />} />
        <Route path="/enseignants" element={<Enseignants />} />
        <Route path="/dys" element={<Dys />} />
        <Route path="/correspondance" element={<Correspondance />} />
        <Route path="/paint-on" element={<PaintOn />} />
        <Route path="/pastelmat" element={<Pastelmat />} />
        <Route path="/ateliers" element={<Ateliers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/techniques-humides" element={<TechniquesHumides />} />
        <Route path="/kits-creatifs" element={<KitsCreatifs />} />
        <Route path="/carnets-creatifs" element={<CarnetsCreatifs />} />
        <Route path="/papiers-creatifs" element={<PapiersCreatifs />} />
        <Route path="/papiers-kraft" element={<PapiersKraft />} />
        <Route path="/gammes-premium" element={<GammesPremium />} />
        <Route path="/sacs-cadeaux" element={<SacsCadeaux />} />
        <Route path="/accessoires-emballage" element={<AccessoiresEmballage />} />
        <Route path="/trousses-plumiers" element={<TroussesPlumiers />} />
        <Route path="/porte-documents" element={<PorteDocuments />} />
        <Route path="/sacs-dos" element={<SacsDos />} />
        <Route path="/produit/:slug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
