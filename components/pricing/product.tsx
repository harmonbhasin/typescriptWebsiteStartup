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
import { Handsome } from '../../style/colors'

export interface ProductProps {
  name: string
  description: string
  price: string
  features: string[]
  priceId: string
  special: boolean
}

interface Card {
  background: string
  hover: string
  text: string
  banner?: string
  bordercolor: string
}

const colorScheme: Card = {
  background: Handsome.darkAccent,
  hover: Handsome.lighterDarkAccent,
  text: Handsome.lightShade,
  banner: Handsome.lighterDarkAccent,
  bordercolor: Handsome.lightShade,
}

// const colorScheme: Card = {
//   background: Handsome.lightShade,
//   hover: Handsome.lighterDarkAccent,
//   text: Handsome.darkShade,
//   banner: Handsome.lighterDarkAccent,
//   bordercolor: Handsome.lightShade,
// }

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
          _hover={{ bg: colorScheme.hover }}
          bg={colorScheme.background}
          minH={{ base: '500px', md: '550px' }}
          maxW={{ base: '500px', md: '450px' }}
          minW={{ base: '250px', md: '400px' }}
          shadow="2xl"
          borderRadius={'xl'}
          color={colorScheme.text}
        >
          <Box bg={colorScheme.banner} borderTopRadius="xl">
            <Center>
              <Text
                textTransform="uppercase"
                py={1.5}
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
              <Divider borderColor={colorScheme.text} />
              <Text>{description}</Text>
              <Divider borderColor={colorScheme.text} />
              <HStack>
                <Text as="b" fontSize={{ base: '5xl', md: '6xl' }}>
                  ${price}
                </Text>
                <Text>/month</Text>
              </HStack>
              <Link href={result} _hover={{}}>
                <Button
                  w={'100%'}
                  bg={colorScheme.background}
                  border={'2px'}
                  borderColor={colorScheme.bordercolor}
                  _hover={{
                    bg: colorScheme.text,
                    color: colorScheme.background,
                    borderColor: colorScheme.bordercolor,
                  }}
                  type="submit"
                >
                  Subscribe
                </Button>
              </Link>
              <Text>This includes:</Text>
              <List>
                {features.map((feature) => (
                  <ListItem m={2}>
                    <ListIcon as={MdCheck} color={colorScheme.text} />
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
      _hover={{ bg: colorScheme.hover }}
      bg={colorScheme.background}
      py={10}
      minH={{ base: '400px', md: '550px', lg: '550px' }}
      maxH={{ base: '525px', md: '550px', lg: '550px' }}
      maxW={{ base: '500px', md: '450px' }}
      minW={{ base: '250px', md: '400px' }}
      shadow="lg"
      borderRadius={'xl'}
      color={colorScheme.text}
    >
      <Box py={4} px={5}>
        <VStack align={'normal'}>
          <Text as="b" fontSize={'3xl'}>
            {name}
          </Text>
          <Divider borderColor={colorScheme.text} />
          <Text>{description}</Text>
          <Divider borderColor={colorScheme.text} />
          <HStack>
            <Text as="b" fontSize={{ base: '5xl', md: '6xl' }}>
              ${price}
            </Text>
            <Text>/month</Text>
          </HStack>
          <Link href={result} _hover={{}}>
            <Button
              w={'100%'}
              bg={colorScheme.background}
              border={'2px'}
              borderColor={colorScheme.bordercolor}
              _hover={{
                bg: colorScheme.text,
                color: colorScheme.background,
                borderColor: colorScheme.bordercolor,
              }}
              type="submit"
            >
              Subscribe
            </Button>
          </Link>
          <Text>This includes:</Text>
          <List>
            {features.map((feature) => (
              <ListItem m={2}>
                <ListIcon as={MdCheck} color={colorScheme.text} />
                {feature}
              </ListItem>
            ))}
          </List>
        </VStack>
      </Box>
    </Box>
  )
}
