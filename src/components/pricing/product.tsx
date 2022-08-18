import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
} from '@chakra-ui/react'
import { MdCheck } from 'react-icons/md'

export type ProductProps = {
  name: string
  description: string
  price: string
  features: string[]
  path: string
  special: boolean
}

export const Product = ({
  name,
  description,
  price,
  features,
  path,
  special,
}: ProductProps) => {
  {
    if (special) {
      return (
        <Box
          _hover={{ bg: '#69D29A' }}
          bg="#8FdEb4"
          h={{ base: '600px', md: '550px' }}
          shadow="2xl"
          borderRadius={'xl'}
        >
          <Box bg={'#7DD8A7'} borderTopRadius="xl">
            <Center>
              <Text
                textTransform="uppercase"
                py={1.5}
                color={'#FFFAFA'}
                fontSize="l"
                fontWeight="600"
              >
                Most Popular
              </Text>
            </Center>
          </Box>
          <Box py={5} px={5}>
            <VStack align={'normal'}>
              <Text as="b" fontSize={'3xl'}>
                {name}
              </Text>
              <Divider />
              <Text>{description}</Text>
              <Divider />
              <HStack>
                <Text as="b" fontSize={{ base: '5xl', md: '6xl' }}>
                  ${price}
                </Text>
                <Text>/month</Text>
              </HStack>
              <form action={path} method="POST">
                <Button
                  w={'100%'}
                  bg={'#40C67F'}
                  _hover={{ bg: '#FFFAFA', color: '#40C67F' }}
                  type="submit"
                  role="link"
                >
                  Subscribe
                </Button>
              </form>
              <Text>This includes:</Text>
              <List>
                {features.map((feature) => (
                  <ListItem m={2}>
                    <ListIcon as={MdCheck} color={'#30A265'} />
                    {feature}
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Box>
        </Box>
      )
    }
  }

  return (
    <Box
      alignSelf={{ base: 'center', lg: 'center' }}
      _hover={{ bg: '#69D29A' }}
      bg="#8FdEb4"
      py={10}
      h={{ base: '600px', md: '550px' }}
      shadow="lg"
      borderRadius={'xl'}
    >
      <Box py={4} px={5}>
        <VStack align={'normal'}>
          <Text as="b" fontSize={'3xl'}>
            {name}
          </Text>
          <Divider />
          <Text>{description}</Text>
          <Divider />
          <HStack>
            <Text as="b" fontSize={{ base: '5xl', md: '6xl' }}>
              ${price}
            </Text>
            <Text>/month</Text>
          </HStack>
          <form action={path} method="POST">
            <Button
              w={'100%'}
              bg={'#40C67F'}
              _hover={{ bg: '#FFFAFA', color: '#40C67F' }}
              type="submit"
              role="link"
            >
              Subscribe
            </Button>
          </form>
          <Text>This includes:</Text>
          <List>
            {features.map((feature) => (
              <ListItem m={2}>
                <ListIcon as={MdCheck} color={'#30A265'} />
                {feature}
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
    </Box>
  )
}
