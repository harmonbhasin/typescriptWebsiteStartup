import type { NextPage } from 'next'
import { Box, Text, Heading, Container, VStack } from '@chakra-ui/react'
import SubmitInfo from '../src/components/contactForm'

const Contact: NextPage = () => (
  <Box>
    <Container maxWidth={'4xl'} p={10} centerContent>
      <VStack spacing={20}>
        <Heading size={'4xl'}>Contact Information</Heading>
        <Text>Email: saltubolic@protonmail.com</Text>
        <SubmitInfo />
      </VStack>
      <Box height="1000px"></Box>
    </Container>
  </Box>
)

export default Contact
