import { useRef } from 'react'
import {
  Flex,
  Heading,
  Box,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Button,
  Avatar,
} from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

export interface ClientProps {
  picture: string
  name: string
  title: string
  linkedin: string
}

const Client = ({ picture, name, title, linkedin }: ClientProps) => {
  return (
    <>
      <Stack
        w={{ sm: '100%', md: '400px' }}
        direction={{ base: 'column' }}
        padding={5}
        m={{ base: 1, md: 10 }}
        align={'center'}
      >
        <Link href={linkedin} isExternal>
          <Avatar
            _hover={{ bg: 'lightblue' }}
            objectFit="cover"
            boxSize="175px"
            src={picture}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={500} color={'gray.500'} fontSize={'sm'} mb={4}>
            {title}
          </Text>
        </Link>
      </Stack>
    </>
  )
}

export default Client
