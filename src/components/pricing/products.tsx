import { Box, Grid, GridItem, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import Product from './product'

const Products = () => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
    <Product
      name={'Check-In Bot'}
      description={
        'Personal bot that helps you stay on program so and increases efficiency'
      }
      price={'5'}
      features={['Daily schedule updates', 'Daily weight check-ins']}
    />
    <Product
      name={'Online Coaching'}
      description={'Custom online coaching through Harmon and Michael'}
      price={'10'}
      features={['24/7 access to us', 'Free program adjustments']}
    />{' '}
    <Product
      name={'Complete Diet Plan'}
      description={'Comprehensive diet plan, and on demand nutritional advice'}
      price={'15'}
      features={['suck', 'it']}
    />
    <Product
      name={'Complete Diet Plan'}
      description={'Comprehensive diet plan, and on demand nutritional advice'}
      price={'15'}
      features={['suck', 'it']}
    />
  </SimpleGrid>
)

export default Products
