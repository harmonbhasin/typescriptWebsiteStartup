import type { NextPage } from 'next'
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Flex,
  Container,
} from '@chakra-ui/react'

const Contact: NextPage = () => (
  <Box>
    <Container maxWidth={'4xl'} centerContent>
      <Heading size={'4xl'}>Contact Information</Heading>
      <Text>You can find us at the any the links below:</Text>
      <Box height="1000px"></Box>
    </Container>
  </Box>
)

export default Contact
