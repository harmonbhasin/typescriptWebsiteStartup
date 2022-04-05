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
import Newsletter from '../src/components/newsletter'

const Home: NextPage = () => (
  <Box p={10} color={'#0A210F'}>
    <Container maxWidth={'container.xl'} centerContent>
      <VStack>
        {/*<Image src={'/LogoWithoutText.jpg'} />*/}
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
