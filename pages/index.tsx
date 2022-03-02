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
import Stats from '../components/basicStats'
import Speech from '../components/speechBubble'

const Home: NextPage = () => (
  <Box>
    <Container maxWidth={'container.xl'}>
      <Flex direction={'column'} alignItems={'center'}>
        <Image src="/Logo.jpg" alt="SCS" />
        <Heading size={'xl'}>
          Build your dream body while not having to sacrifice other parts of
          your life
        </Heading>
        <Speech />
        <Stats />
      </Flex>
    </Container>
  </Box>
)

export default Home
