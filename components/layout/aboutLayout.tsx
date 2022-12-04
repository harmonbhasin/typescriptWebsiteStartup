import Navbar from './navbar'
import Footer from './footer'
import { Handsome } from '../../style/colors'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar
        mainColor={Handsome.lightShade}
        textColor={Handsome.darkShade}
        subnavColor={Handsome.lightShade}
        subtitleColor={Handsome.lightShade}
        isWhite={true}
      />
      <main>{children}</main>
      <Footer
        mainColor={Handsome.darkShade}
        mainColorContrast={Handsome.darkAccent}
        textColor={Handsome.lightShade}
        isWhite={false}
      />
    </>
  )
}
