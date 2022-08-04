import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SubmitInfo from '../src/components/contactForm'
import ContactLayout from '../src/components/layout/contactLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

/**
 * This page is used to submit contact information and buy a program.
 */
const Contact: NextPageWithLayout = () => (
  <Box color={'black'}>
    <SubmitInfo />
    <Box h={100}></Box>
  </Box>
)

Contact.getLayout = (page: ReactElement) => {
  return <ContactLayout>{page}</ContactLayout>
}

export default Contact
