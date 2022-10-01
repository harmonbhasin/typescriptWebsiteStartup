import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SubmitInfo from '../components/contactForm'
import CoachesLayout from '../components/layout/contactLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

/**
 * This page is used to submit contact information and buy a program.
 */
const Coaches: NextPageWithLayout = () => (
  <Box color={'black'}>
    <SubmitInfo />
    <Box h={100}></Box>
  </Box>
)

Coaches.getLayout = (page: ReactElement) => {
  return <CoachesLayout>{page}</CoachesLayout>
}

export default Coaches
