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
        mainColor={Handsome.mainColor}
        textColor={Handsome.lightShade}
        subnavColor={Handsome.darkShade}
        subtitleColor={Handsome.darkAccent}
        isWhite={false}
      />
      <main>{children}</main>
      <Footer
        mainColor={Handsome.lightShade}
        mainColorContrast={Handsome.mainColorContrast}
        textColor={Handsome.darkShade}
        isWhite={true}
      />
    </>
  )
}
