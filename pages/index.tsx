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
import Stats from '../src/components/home/stats'
import Speech from '../src/components/home/speechBubble'
import Newsletter from '../src/components/home/newsletter'

const Home: NextPage = () => (
  <Box p={10} color={'#0A210F'}>
    <Container maxWidth={'container.xl'} centerContent>
      <VStack>
        <Heading py={5} size={'4xl'}>
          Meet Your Fitness Goals
        </Heading>
        <Speech />
        <Stats />
        <Newsletter />
      </VStack>
    </Container>
  </Box>
)

export default Home
