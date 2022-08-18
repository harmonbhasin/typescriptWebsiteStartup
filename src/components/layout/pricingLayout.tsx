import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar main={'#8FdEb4'} textColor={'#FFFAFA'} hoverColor={'#40C67F'} />
      <main>{children}</main>
      <Footer
        main={'#8FdEb4'}
        hoverColor={'#69D29A'}
        submitColor={{
          bg: '#FFFAFA',
          color: '#40C67F',
        }}
      />
    </>
  )
}
