import {
  Heading,
  Text,
  Image,
  VStack,
  Link,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

interface IndividualProps {
  name: string
  degree: string
  role: string
  aboutOne: string
  aboutTwo: string
  aboutThree: string
  linkedin: string
  img: string
  // cards: string[]
}

const Individual = ({
  name,
  degree,
  role,
  aboutOne,
  aboutTwo,
  aboutThree,
  img,
  // cards,
  linkedin,
}: IndividualProps) => (
  <VStack spacing={5} p={5}>
    <Image src={img} boxSize="250px" fit={'cover'} boxShadow="dark-lg" />
    <HStack>
      <Heading as="h2" size="2xl">
        {name}
      </Heading>
      <Link href={linkedin}>
        <IconButton
          aria-label="LinkedIn"
          variant="ghost"
          size="lg"
          icon={<BsLinkedin size="28px" />}
          _hover={{ color: '#F16764', bg: '#FFFAFA' }}
        />
      </Link>
    </HStack>
    <Heading as="h3" size="xl">
      {role}
    </Heading>
    <Heading as="h6" size="xs">
      {degree}
    </Heading>
    <Text>{aboutOne}</Text>
    <Text>{aboutTwo}</Text>
    <Text>{aboutThree}</Text>
    {/* Depricated*/}
    {/*<Gallery cards={cards} />*/}
  </VStack>
)

export default Individual
