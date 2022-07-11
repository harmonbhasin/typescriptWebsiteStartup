import type { NextPage } from 'next'
import { Box, Text, VStack } from '@chakra-ui/react'
import Stats from '../src/components/home/stats'
import OurStory from '../src/components/home/ourStory'
import CallToActionWithAnnotation from '../src/components/home/callToAction'
import Testimonial from '../src/components/home/testimonials'

/**
 * This is the main page that the website brings all new users to.
 * This page is broken into four different components: the header,
 * the testimonials from clients, the statistics about the our clients,
 * and the newsletter.
 */
const Home: NextPage = () => (
  <>
    <Box p={10} bg={'#CA4862'} color={'white'}>
      <VStack>
        <Text as="b" py={5} fontSize={{ base: '4xl', md: '6xl' }}>
          Modern Fitness Coaching
        </Text>
        <OurStory />
      </VStack>
    </Box>
    <Box bg={'white'} p={10}>
      <Stats />
    </Box>
    <Box bg={'#8FdEb4'} p={10}>
      <CallToActionWithAnnotation />
    </Box>
    <Testimonial />
  </>
)

export default Home
