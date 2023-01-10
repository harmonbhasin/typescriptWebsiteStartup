import React from 'react'
import Template from '../components/termly/template'
import Layout from '../components/layout/mainLayout'
import { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const Disclaimer: NextPageWithLayout = () => {
  return <Template dataId={'68a9daa6-8633-407f-954d-e6c45e1fd8f9'} />
}

Disclaimer.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Disclaimer
