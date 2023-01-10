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
        mainColor={Handsome.darkShade}
        textColor={Handsome.lightShade}
        subnavColor={Handsome.darkShade}
        subtitleColor={Handsome.darkAccent}
        isWhite={false}
      />
      <main>{children}</main>
      <Footer
        mainColor={Handsome.darkAccent}
        mainColorContrast={Handsome.lighterDarkAccent}
        textColor={Handsome.lightShade}
        isWhite={false}
      />
    </>
  )
}
