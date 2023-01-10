import React from 'react'
import Template from '../components/termly/template'
import Layout from '../components/layout/mainLayout'
import { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const privacyPolicy: NextPageWithLayout = () => {
  return <Template dataId={'ef40b639-eb84-4a52-9ff1-737715d0e14b'} />
}

privacyPolicy.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default privacyPolicy
