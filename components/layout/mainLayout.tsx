import Navbar from './navbar'
import Footer from './footer'
import { Handsome } from '../../style/colors'

interface LayoutProps {
  children: React.ReactNode
}

// https://www.brockherion.dev/blog/posts/creating-per-page-layouts-with-nextjs-typescript-trcp-and-nextauth/
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
        mainColor={Handsome.mainColor}
        mainColorContrast={Handsome.mainColorContrast}
        textColor={Handsome.lightShade}
        isWhite={false}
      />
    </>
  )
}
