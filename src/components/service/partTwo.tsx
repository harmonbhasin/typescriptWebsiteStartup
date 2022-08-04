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

const checkmark = '#8FDEB4'

const partTwo = () => {
  return (
    <Box p={10} backgroundColor={'#52bbb7'}>
      <Center>
        <Heading color={'white'} size={'4xl'}>
          Workout Splits
        </Heading>
      </Center>
      <Flex py={5} direction={{ base: 'column', md: 'row' }}>
        <List
          color={'white'}
          py={{ base: '7', md: '0' }}
          spacing={{ base: '5', md: '10' }}
        >
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Full Body Splits
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Upper/Lower Splits
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Push/Pull/Leg Splits
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Arnold Splits
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Powerbuilding Splits
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={checkmark} />
            Custom Splits
          </ListItem>
        </List>
        <Spacer />
        <Image src="/harmon/harmon2.jpg" boxSize={'350px'} />
      </Flex>
    </Box>
  )
}

export default partTwo
