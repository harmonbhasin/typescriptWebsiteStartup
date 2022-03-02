import type { NextPage } from 'next'
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Flex,
  Container,
  VStack,
} from '@chakra-ui/react'

const Contact: NextPage = () => (
  <Box>
    <Container maxWidth={'4xl'} p={10} centerContent>
      <VStack spacing={20}>
        <Heading size={'4xl'}>Contact Information</Heading>
        <Text>Email: saltubolic@protonmail.com</Text>
      </VStack>
      <Box height="1000px"></Box>
    </Container>
  </Box>
)

export default Contact
