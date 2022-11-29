import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: React.ReactNode
}

// https://www.brockherion.dev/blog/posts/creating-per-page-layouts-with-nextjs-typescript-trcp-and-nextauth/
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar
        main={'#0E1B11'}
        textColor={'#FFFAFA'}
        hoverColor={'#F16764'}
        subnavColor={'black'}
        subtxtColor={'gray'}
        isWhite={false}
      />
      <main>{children}</main>
      <Footer
        main={'#0E1B11'}
        hoverColor={'#f16764'}
        submitColor={{
          bg: '#c93f3c',
        }}
      />
    </>
  )
}
