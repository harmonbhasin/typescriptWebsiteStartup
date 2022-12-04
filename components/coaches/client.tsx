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

interface ClientProps {
  picture: string
  name: string
  title: string
  linkedin: string
}

const Client = ({ picture, name, title, linkedin }: ClientProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Stack
        w={{ sm: '100%', md: '400px' }}
        direction={{ base: 'column' }}
        padding={4}
      >
        <Link onClick={onOpen}>
          <Image
            _hover={{ bg: 'lightblue' }}
            objectFit="cover"
            boxSize="400px"
            src={picture}
          />
        </Link>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {title}
        </Text>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxH="1000px" maxW="1000px" p={10}>
          <ModalCloseButton />
          <Stack flexDir={'row'}>
            <Stack>
              <Box flex={1} bgColor={''}>
                <Image
                  objectFit="contain"
                  boxSize={{ lg: '400px' }}
                  src={picture}
                />
              </Box>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  {name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                  {title}
                </Text>
                <Link href={linkedin}>
                  <IconButton
                    aria-label="LinkedIn"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{ color: '#F16764', bg: '#FFFAFA' }}
                  />
                </Link>
              </Stack>
            </Stack>
            <ModalBody px={{ lg: '50px' }}>
              <Text>hi</Text>
            </ModalBody>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Client
