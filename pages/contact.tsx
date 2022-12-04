import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SubmitInfo from '../components/contact/contactForm'
import ContactLayout from '../components/layout/contactLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Handsome } from '../style/colors'

/**
 * This page is used to submit contact information and buy a program.
 */
const Contact: NextPageWithLayout = () => (
  <Box bg={Handsome.mainColor} color={Handsome.lightShade}>
    <SubmitInfo />
    <Box h={100}></Box>
  </Box>
)

Contact.getLayout = (page: ReactElement) => {
  return <ContactLayout>{page}</ContactLayout>
}

export default Contact
