import React from 'react'
import type { NextPage } from 'next'
import Script from 'next/script'

export type templateProps = {
  dataId: string
}

const Template = ({ dataId }: templateProps) => (
  <>
    <div
      // @ts-ignore
      name="termly-embed"
      data-id={dataId}
      data-type="iframe"
    ></div>
    <Script
      id="fuckThis"
      dangerouslySetInnerHTML={{
        __html: `(function(d, s, id) {
      var js, tjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://app.termly.io/embed-policy.min.js";
      tjs.parentNode.insertBefore(js, tjs);
    }(document, 'script', 'termly-jssdk'));`,
      }}
    />
  </>
)

export default Template
