import type { NextPage } from 'next'
import {
  Box,
  Text,
  Heading,
  VStack,
  ListItem,
  ListIcon,
  List,
  HStack,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { redirect } from 'next/dist/server/api-utils'

const Services: NextPage = () => (
  <Box>
    <Box backgroundColor={'red.100'} p={10}>
      <VStack spacing={20} p={10}>
        <Heading size={'4xl'}>What You Get</Heading>
        <HStack spacing={500}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Custom workout program geared towards your goals
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Basic diet plan
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              30 minute consultation call to discuss goals
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Weekly check-ins to tweek program and look at progress
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Access to Harmon & Michael from 10 am - 10 pm for advice
            </ListItem>
          </List>
          <Text>Replacement Text</Text>
        </HStack>
      </VStack>
    </Box>
    <Box height="1000px"></Box>
  </Box>
)

export default Services
