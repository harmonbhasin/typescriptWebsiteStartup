import React from 'react'
import Template from '../components/termly/template'
import Layout from '../components/layout/mainLayout'
import { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const termsAndConditions: NextPageWithLayout = () => {
  return <Template dataId={'a8832ec9-4f95-495c-93ed-c91721b6e4f9'} />
}

termsAndConditions.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default termsAndConditions
