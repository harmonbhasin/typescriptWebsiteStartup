import type { NextPage } from 'next'
import { Box, Text, Heading, Container, VStack } from '@chakra-ui/react'
import SubmitInfo from '../src/components/contactForm'

const Contact: NextPage = () => (
  <Box color={'#0A210F'}>
    <SubmitInfo />
    <Box h={100}></Box>
  </Box>
)

export default Contact
