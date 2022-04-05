import { Heading, Text, Image, VStack } from '@chakra-ui/react'
import Gallery from './carousel'

interface IndividualProps {
  name: string
  about: string
  img: string
  cards: string[]
}

const Individual = ({ name, about, img, cards }: IndividualProps) => (
  <VStack spacing={5} p={5}>
    <Heading>{name}</Heading>
    <Image src={img} borderRadius="full" boxSize="250px" fit={'cover'} />
    <Text>{about}</Text>
    <Gallery cards={cards} />
  </VStack>
)

export default Individual
