// In _document.js
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="e5c9a516-3cfd-480e-822a-1d22847ec0a0"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  )
}

export default Document
