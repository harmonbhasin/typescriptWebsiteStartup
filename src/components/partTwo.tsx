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

const partTwo = () => {
  return (
    <Box p={10} backgroundColor={'#14591D'}>
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
            <ListIcon as={MdCheckCircle} color="#D9D982" />
            Full Body Workouts
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#D9D982" />
            Upper/Lower Body Workouts
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#D9D982" />
            Push/Pull/Leg Workouts
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#D9D982" />
            Arnold Split Workouts
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#D9D982" />
            Custom Splits
          </ListItem>
        </List>
        <Spacer />
        <Image src="/harmon/harmon2.jpg" boxSize={'300px'} />
      </Flex>
    </Box>
  )
}

export default partTwo
