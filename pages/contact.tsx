import type { NextPage } from 'next'
import { Box, Text, Heading, Container, VStack } from '@chakra-ui/react'
import SubmitInfo from '../src/components/contactForm'

const Contact: NextPage = () => (
  <>
    <SubmitInfo />
    <Box h={100}></Box>
  </>
)

export default Contact
