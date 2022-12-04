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
        mainColor={Handsome.darkAccent}
        textColor={Handsome.lightShade}
        subnavColor={Handsome.darkAccent}
        subtitleColor={Handsome.lighterDarkAccent}
        isWhite={false}
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
