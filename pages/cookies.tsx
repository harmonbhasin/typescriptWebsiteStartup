import React from 'react'
import Template from '../components/termly/template'
import Layout from '../components/layout/mainLayout'
import { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const Cookies: NextPageWithLayout = () => {
  return <Template dataId={'1787c26f-151f-4961-8c7c-d98a7d0cf53c'} />
}

Cookies.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cookies
