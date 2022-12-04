import { SimpleGrid, Text, Flex } from '@chakra-ui/react'
import { Product } from './product'
import type { ProductProps } from './product'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ListProducts = () => {
  const { data, error } = useSwr<ProductProps[]>(
    '/api/subscriptionPrices',
    fetcher
  )

  if (error) return <Text>Failed to load prices</Text>
  if (!data) return <Text>Loading...</Text>
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify={{ base: 'center', md: 'start', lg: 'start' }}
      justifyContent={{
        base: 'space-evenly',
        md: 'space-evenly',
        lg: 'space-evenly',
      }}
      rowGap={{ base: '100px', md: '100px' }}
      columnGap={{ base: '0px', md: '75px' }}
      align={{ base: 'center' }}
      //alignContent={{ base: 'center' }}
    >
      {data.map((product: ProductProps) => (
        <Product
          key={product.name}
          name={product.name}
          description={product.description}
          price={product.price}
          features={product.features}
          priceId={product.priceId}
          special={product.special}
        />
      ))}
    </Flex>
  )
}

export default ListProducts
