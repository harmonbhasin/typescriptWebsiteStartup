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
  Link,
} from '@chakra-ui/react'
import { MdCheck } from 'react-icons/md'
import { useEffect, useState } from 'react'

export type ProductProps = {
  name: string
  description: string
  price: string
  features: string[]
  priceId: string
  special: boolean
}

export const Product = ({
  name,
  description,
  price,
  features,
  priceId,
  special,
}: ProductProps) => {
  const [result, useResult] = useState('')

  useEffect(() => {
    // Declare the async data fetching function
    const fetchData = async () => {
      // Get the data from the api
      const body = { priceId }
      const data = await fetch('/api/post/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // Convert the data to json
      const json = await data.json()

      // Set the state with the result
      useResult(json)
    }

    // Call the function and catch any error
    fetchData().catch(console.error)
  }, [])
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
              <Link href={result} _hover={{}}>
                <Button
                  w={'100%'}
                  bg={'#40C67F'}
                  _hover={{ bg: '#FFFAFA', color: '#40C67F' }}
                  type="submit"
                >
                  Subscribe
                </Button>
              </Link>
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
          <Link href={result} _hover={{}}>
            <Button
              w={'100%'}
              bg={'#40C67F'}
              _hover={{ bg: '#FFFAFA', color: '#40C67F' }}
            >
              Subscribe
            </Button>
          </Link>
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
