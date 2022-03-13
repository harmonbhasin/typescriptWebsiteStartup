import type { NextPage } from 'next'
import {
  Box,
  Image,
  Flex,
  Heading,
  Container,
  VStack,
  Text,
} from '@chakra-ui/react'
import Stats from '../src/components/stats'
import Speech from '../src/components/speechBubble'

const Home: NextPage = () => (
  <Box color={'#490b3d'}>
    <Container maxWidth={'container.xl'} centerContent>
      <VStack>
        <Image src={'/LogoWithoutText.jpg'} />
        <Heading size={'4xl'}>Saltubolic Coaching Services</Heading>
        <Heading size={'xl'}>Meet your fitness goals</Heading>
        <Speech />
        <Stats />
      </VStack>
    </Container>
  </Box>
)

export default Home
