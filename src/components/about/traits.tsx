import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Divider,
  Icon,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react'
import { ImBook, ImAccessibility, ImProfile, ImStatsDots } from 'react-icons/im'

interface FeatureProps {
  title: string
  text: string
  number: string
  icon: ReactElement
}

const Feature = ({ title, number, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Text as="b" fontSize={'4xl'}>
        {number}
      </Text>
      <Flex
        w={'200px'}
        h={'200px'}
        align={'center'}
        justify={'center'}
        color={'#CA4862'}
        rounded={'full'}
        bg={'white'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text as="b" fontSize={'2xl'}>
        {title}
      </Text>
      <Divider />
      <Text color={'white'} fontSize={'xl'}>
        {text}
      </Text>
    </Stack>
  )
}

const Traits = () => {
  return (
    <Box p={'125px'}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <Feature
          number={'01'}
          icon={<Icon as={ImProfile} w={'125px'} h={'125px'} />}
          title={'Personal'}
          text={
            "Clients are family to us, we work as hard as possible to make every client feel like they're apart of a community."
          }
        />
        <Feature
          number={'02'}
          icon={<Icon as={ImBook} w={'125px'} h={'125px'} />}
          title={'Adaptable'}
          text={
            'While we may know more than the average joe, we continously test and try to refute out current knowledge.'
          }
        />
        <Feature
          number={'03'}
          icon={<Icon as={ImAccessibility} w={'125px'} h={'125px'} />}
          title={'Accessible'}
          text={
            'We encourage input and frequent communication on our programs which is why you can reach us 24 / 7.'
          }
        />
        <Feature
          number={'04'}
          icon={<Icon as={ImStatsDots} w={'125px'} h={'125px'} />}
          title={'Flexible'}
          text={
            'We understand that life can get hectic - use us as a way to keep healthy and stick to your goals during tough times.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}

export default Traits
