import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}
// '#EA8091'
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar main={'white'} textColor={'#461D2D'} hoverColor={'#f16764'} />
      <main>{children}</main>
      <Footer
        main={'#f16764'}
        hoverColor={'#CA4862'}
        submitColor={{
          bg: 'white',
          color: '#CA4862',
        }}
      />
    </>
  )
}
