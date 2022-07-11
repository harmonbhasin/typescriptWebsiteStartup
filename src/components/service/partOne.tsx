import {
  Box,
  Heading,
  ListItem,
  ListIcon,
  List,
  Flex,
  Spacer,
  Image,
  Center,
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

const checkmark = '#CA4862'

const partOne = () => {
  return (
    <Box color={'#461d2d'} p={10} backgroundColor={'white'}>
      <Center>
        <Heading size={'4xl'}>You Get</Heading>
      </Center>
      <Flex py={5} direction={{ base: 'column', md: 'row' }}>
        <Image src="/michael/michael0.jpg" boxSize={'300px'} />
        <Spacer />
        <List py={{ base: '7', md: '0' }} spacing={{ base: '5', md: '10' }}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Custom workout program geared towards your goals
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Basic diet plan
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            30 minute consultation call to discuss goals
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Weekly check-ins to tweak program and look at progress
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Access to Harmon & Michael from 10 am - 10 pm for advice
          </ListItem>
        </List>
      </Flex>
    </Box>
  )
}

export default partOne
