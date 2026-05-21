import Header from './Header'
import Footer from './Footer'
import FloatingLogos from './FloatingLogos'

export default function Layout({ children }) {
  return (
    <>
      <FloatingLogos />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
