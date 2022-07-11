import type { NextPage } from 'next'
import { Text, Heading, Flex, Container } from '@chakra-ui/react'
import Tiers from '../src/components/pricing/tiers'

const color = 'black'

const Pricing: NextPage = () => {
  return (
    <Flex direction="column" align="center" p="10" color={color}>
      <Text as="b" fontSize={{ base: '4xl', md: '6xl' }}>
        Plans & pricing
      </Text>
      <Container>
        <Heading as="h3" size="l" p="10">
          We've been lifting for half a decade honing our craft, and figuring
          out what works best for us. We also have our own coaches who help us
          continuously be better. Let us be your coach so that you can improve
          your overall quality of life.
        </Heading>
      </Container>
      <Tiers />
    </Flex>
  )
}

export default Pricing