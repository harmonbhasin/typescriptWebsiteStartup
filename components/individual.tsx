import { Heading, Text, Image, VStack } from '@chakra-ui/react'

interface IndividualProps {
  name: string
  about: string
  img: string
}

const Individual = ({ name, about, img }: IndividualProps) => (
  <VStack spacing={5} p={5}>
    <Heading>{name}</Heading>
    <Image src={img} borderRadius="full" boxSize="250px" fit={'cover'} />
    <Text>{about}</Text>
  </VStack>
)

export default Individual
