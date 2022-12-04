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
  Text,
} from '@chakra-ui/react'

export interface BlockProps {
  backgroundColor: string
  textColor: string
  image: string
  direction: object
  title: string
  text: string
}

const Block = ({
  backgroundColor,
  textColor,
  image,
  direction,
  text,
  title,
}: BlockProps) => {
  return (
    <Box color={textColor} background={backgroundColor} p={10}>
      <Flex direction={direction} align="center" justify="space-evenly">
        <Image
          src={image}
          boxSize={{ base: '300px', md: '550px' }}
          borderRadius="full"
        />
        <Flex
          direction={'column'}
          justify="center"
          align="center"
          maxW={{ lg: '550px' }}
        >
          <Heading size={'3xl'}>{title}</Heading>
          <Text fontSize={'2xl'}>{text}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Block
