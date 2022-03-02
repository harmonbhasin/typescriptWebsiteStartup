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
import Stats from '../components/basicStats'
import Speech from '../components/speechBubble'

const Home: NextPage = () => (
  <Box color={'#490b3d'}>
    <Container maxWidth={'container.xl'} centerContent>
      <VStack>
        <Image src="/LogoWithoutText.jpg" alt="SCS" />
        <Heading size={'4xl'}>Saltubolic Coaching Services</Heading>
        <Heading size={'xl'}>
          Build your dream body while not having to sacrifice other parts of
          your life
        </Heading>
        <Speech />
        <Stats />
      </VStack>
    </Container>
  </Box>
)

export default Home
