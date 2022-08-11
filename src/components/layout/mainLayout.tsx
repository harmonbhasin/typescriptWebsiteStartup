import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

// https://www.brockherion.dev/blog/posts/creating-per-page-layouts-with-nextjs-typescript-trcp-and-nextauth/
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar main={'#CA4862'} textColor={'white'} hoverColor={'#F16764'} />
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
