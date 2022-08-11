import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

interface ProductProps {
  name: string
  description: string
  price: string
  features: string[]
}

const Product = ({ name, description, price, features }: ProductProps) => (
  <Box _hover={{ bg: '#69D29A' }} p={3}>
    <VStack>
      <Text as="b" fontSize={'3xl'}>
        {name}
      </Text>
      <Text>{description}</Text>
      <HStack>
        <Text as="b" fontSize={'6xl'}>
          ${price}
        </Text>
        <VStack>
          <Text>per</Text>
          <Text>month</Text>
        </VStack>
      </HStack>
      <Button bg={'#40C67F'} _hover={{ bg: 'white', color: '#40C67F' }}>
        Subscribe
      </Button>
      <Text>This includes:</Text>
      <List>
        {features.map((feature) => (
          <ListItem>
            <ListIcon as={MdCheckCircle} color={'#54CC8C'} />
            {feature}
          </ListItem>
        ))}
      </List>
    </VStack>
  </Box>
)

export default Product
