import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar
        main={'#CA4862'}
        textColor={'#FFFAFA'}
        hoverColor={'#F16764'}
        subnavColor={'black'}
        subtxtColor={'gray'}
        isWhite={false}
      />
      <main>{children}</main>
      <Footer
        main={'#CA4862'}
        hoverColor={'#f16764'}
        submitColor={{
          bg: '#c93f3c',
        }}
      />
    </>
  )
}
