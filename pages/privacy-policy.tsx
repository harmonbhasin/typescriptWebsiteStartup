import type { NextPage } from 'next'
import { Box, Heading, Container, VStack, Text } from '@chakra-ui/react'
import Stats from '../src/components/home/stats'
import Speech from '../src/components/home/speechBubble'
import Newsletter from '../src/components/home/newsletter'

/**
 * This is the main page that the website brings all new users to.
 * This page is broken into four different components: the header,
 * the testimonials from clients, the statistics about the our clients,
 * and the newsletter.
 */
const PrivacyPolicy: NextPage = () => (
  <Box p={10} color={'#0A210F'}>
    <Container maxWidth={'container.xl'}></Container>
  </Box>
)

export default PrivacyPolicy
