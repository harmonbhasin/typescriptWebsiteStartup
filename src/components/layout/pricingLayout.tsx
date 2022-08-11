import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar main={'#8FdEb4'} textColor={'white'} hoverColor={'#52bbb7'} />
      <main>{children}</main>
      <Footer
        main={'#8FdEb4'}
        hoverColor={'#69D29A'}
        submitColor={{
          bg: 'white',
          color: '#69D29A',
        }}
      />
    </>
  )
}
