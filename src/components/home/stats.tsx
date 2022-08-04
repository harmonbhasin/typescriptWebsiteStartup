import React, { useState, useEffect } from 'react'
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Container,
  Grid,
  GridItem,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react'

interface StatsCardProps {
  title: string
  stat: string
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

/**
 * Used this link https://devtrium.com/posts/async-functions-useeffect to help with the useEffect
 */

const Statistics = () => {
  const [result, useResult] = useState('')

  useEffect(() => {
    // Declare the async data fetching function
    const fetchData = async () => {
      // Get the data from the api
      const data = await fetch('/api/post/numClients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '',
      })
      // Convert the data to json
      const json = await data.json()

      // Set the state with the result
      useResult(json)
    }

    // Call the function and catch any error
    fetchData().catch(console.error)
  }, [])

  return (
    <>
      <Container py={5} maxW={'container.lg'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
            <Heading as={'h2'}>Our Clients See Progress</Heading>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                70%
              </Text>
              <Box fontSize={'sm'}>
                of clients broke through plateaus they had for months in only 3
                weeks.
              </Box>
            </Flex>
          </GridItem>
          <GridItem w="100%">
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                80%
              </Text>
              <Box fontSize={'sm'}>
                of clients reach their targeted weight goals before they
                expected.
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
      <Box
        maxW="7xl"
        mx={'auto'}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
        py={7}
      >
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
        >
          Who we coach?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We serve'} stat={result} />
          <StatsCard title={'In'} stat={'3 different states'} />
          <StatsCard title={'From ages'} stat={'18 - 21'} />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Statistics
