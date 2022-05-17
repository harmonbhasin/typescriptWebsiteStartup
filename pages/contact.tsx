import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import SubmitInfo from '../src/components/contactForm'

/**
 * This page is used to submit contact information and buy a program.
 */
const Contact: NextPage = () => (
  <Box color={'#0A210F'}>
    <SubmitInfo />
    <Box h={100}></Box>
  </Box>
)

export default Contact
