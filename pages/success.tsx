import { Box, Text, VStack, Heading } from '@chakra-ui/react'
import Layout from '../src/components/layout/mainLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

/**
 * This is the main page that the website brings all new users to.
 * This page is broken into four different components: the header,
 * the testimonials from clients, the statistics about the our clients,
 * and the newsletter.
 */
const Success: NextPageWithLayout = () => (
  <Box
    display={'flex'}
    flexDirection={'column'}
    alignItems={'center'}
    p={{ base: 5, md: 10 }}
  >
    <Heading size="4xl">Thank You</Heading>
    <Text fontSize={'2xl'} m={{ md: '50px' }}>
      You've just taken a step to improving your health and wellbeing.
    </Text>
    <Heading size="4xl">WARNING</Heading>
    <Text
      fontSize={'2xl'}
      px={{ md: '500px' }}
      mt={{ md: '50px' }}
      mb={{ md: '250px' }}
    >
      Shopping bills may increase due to jurastic changes in body composition.
      If you experience side effects such as these DON'T panic, it's why you
      signed up.
    </Text>
  </Box>
)

Success.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Success
