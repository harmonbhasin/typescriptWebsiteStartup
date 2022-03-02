import { Heading, Text, Image, VStack } from '@chakra-ui/react'

interface IndividualProps {
  name: string
  about: string
  img: string
}

const Individual = ({ name, about, img }: IndividualProps) => (
  <VStack spacing={5} p={5}>
    <Heading>{name}</Heading>
    <Image src={img} alt={name} h={'500px'} w={'500px'} />
    <Text>{about}</Text>
  </VStack>
)

export default Individual
