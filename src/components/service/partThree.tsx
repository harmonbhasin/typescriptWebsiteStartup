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

const partThree = () => {
  return (
    <Box color={'#0A210F'} p={10} backgroundColor={'white'}>
      <Center>
        <Heading py={5} size={'4xl'}>
          Why Us
        </Heading>
      </Center>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Image src="/clients/buddies.jpg" boxSize={'300px'} />
        <Spacer />
        <List py={{ base: '7', md: '0' }} spacing={{ base: '5', md: '10' }}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Only $14.99 for your first 6 week program
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            $9.99 for every subsequent program
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Get to join a supportive community
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Science-based programs
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Easy-to-use programs
          </ListItem>
        </List>
      </Flex>
    </Box>
  )
}

export default partThree
