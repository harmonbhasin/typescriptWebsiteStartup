import type { NextPage } from 'next'
import {
  Box,
  Center,
  Image,
  Text,
  Heading,
  Flex,
  Container,
  HStack,
} from '@chakra-ui/react'

const About: NextPage = () => (
  <Box>
    <Container maxW={'4xl'} centerContent>
      <Heading size={'4xl'}>About</Heading>
      <HStack>
        <Heading>Harmon</Heading>
        <Heading>Michael</Heading>
      </HStack>
      <Box height={'1000px'}></Box>
    </Container>
  </Box>
)

export default About
