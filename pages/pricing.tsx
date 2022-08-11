import { Text, Heading, Flex, Container, Box } from '@chakra-ui/react'
import Products from '../src/components/pricing/products'
import PricingLayout from '../src/components/layout/pricingLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Pricing: NextPageWithLayout = () => {
  return (
    <Box color={'white'} bg={'#8FdEb4'}>
      <Flex direction="column" align="center" p="10">
        <Text as="b" fontSize={{ base: '4xl', md: '6xl' }}>
          Plans & pricing
        </Text>
        <Products />
      </Flex>
    </Box>
  )
}

Pricing.getLayout = (page: ReactElement) => {
  return <PricingLayout>{page}</PricingLayout>
}

export default Pricing
