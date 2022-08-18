import { SimpleGrid, Text } from '@chakra-ui/react'
import { Product } from './product'
import type { ProductProps } from './product'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Products = () => {
  const { data, error } = useSwr<ProductProps[]>('/api/prices', fetcher)

  if (error) return <Text>Failed to load prices</Text>
  if (!data) return <Text>Loading...</Text>
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
      {data.map((product: ProductProps) => (
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
          features={product.features}
          path={product.path}
          special={product.special}
        />
      ))}
    </SimpleGrid>
  )
}

export default Products
