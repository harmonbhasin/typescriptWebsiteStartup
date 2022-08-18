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

export type FeatureProps = {
  backgroundColor: string
  textColor: string
  checkmarkColor: string
  heading: string
  image: string
  direction: object
  features: string[]
}

const Feature = ({
  backgroundColor,
  textColor,
  checkmarkColor,
  heading,
  image,
  direction,
  features,
}: FeatureProps) => {
  return (
    <Box color={textColor} p={10} background={backgroundColor}>
      <Center>
        <Heading size={'4xl'}>{heading}</Heading>
      </Center>
      {/*@ts-ignore*/}
      <Flex py={5} direction={direction}>
        <Image src={image} boxSize={{ base: '250px', md: '350px' }} />
        <Spacer />
        <List py={{ base: '7', md: '0' }} spacing={{ base: '5', md: '10' }}>
          {features.map((feature) => (
            <ListItem>
              <ListIcon as={MdCheckCircle} color={checkmarkColor} />
              {feature}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  )
}

export default Feature
