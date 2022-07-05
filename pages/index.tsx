import type { NextPage } from 'next'
import { Box, Heading, Container, VStack } from '@chakra-ui/react'
import Stats from '../src/components/home/stats'
import Speech from '../src/components/home/speechBubble'
import Newsletter from '../src/components/home/newsletter'

/**
 * This is the main page that the website brings all new users to.
 * This page is broken into four different components: the header,
 * the testimonials from clients, the statistics about the our clients,
 * and the newsletter.
 */
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
