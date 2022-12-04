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
import { Handsome } from '../../style/colors'

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
      rounded={'lg'}
      bg={Handsome.darkAccent}
      color={Handsome.lightShade}
    >
      <StatLabel fontSize={'lg'} fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'4xl'} fontWeight={'extrabold'}>
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
      const data = await fetch('/api/get/numClients', {
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
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={6}
        py={{ base: '50px', md: '200px' }}
        px={{ base: '50px', md: '100px' }}
      >
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}>
          <Heading as={'h2'} size={'2xl'}>
            Our Clients See Progress
          </Heading>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'5xl'}
              fontWeight={'bold'}
              color={Handsome.mainColor}
            >
              70%
            </Text>
            <Box fontSize={'md'}>
              of clients broke through plateaus they had for months in only 3
              weeks.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'5xl'}
              fontWeight={'bold'}
              color={Handsome.mainColor}
            >
              80%
            </Text>
            <Box fontSize={'md'}>
              of clients reach their targeted weight goals before they expected.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Box mx={'auto'} px={{ base: 2, sm: 12, md: 17 }} pb={{ md: '150px' }}>
        <chakra.h1
          textAlign={'center'}
          py={{ base: 5, md: 20 }}
          fontSize={'5xl'}
          fontWeight={'bold'}
        >
          Who we work with?
        </chakra.h1>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
          columnGap={{ md: '30px' }}
          rowGap={{ base: '20 px' }}
        >
          <StatsCard title={'We serve'} stat={result + ' clients'} />
          <StatsCard title={'In'} stat={'5  states'} />
          <StatsCard title={'From ages'} stat={'14 - 22'} />
        </Flex>
      </Box>
    </>
  )
}

export default Statistics
