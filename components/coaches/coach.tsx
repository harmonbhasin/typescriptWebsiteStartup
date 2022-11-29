import { useState } from 'react'
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
} from '@chakra-ui/react'
import { BsLinkedin } from 'react-icons/bs'

interface CoachProps {
  formalPicture: string
  informalPicture: string
  name: string
  title: string
  bio: string
  linkedin: string
}

//https://codesandbox.io/s/chakraui-dynamic-image-forked-oq36z6?file=/src/app.js:132-148
const Coach = ({
  formalPicture,
  informalPicture,
  name,
  title,
  bio,
  linkedin,
}: CoachProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [image, setImage] = useState(formalPicture)
  return (
    <>
      <Stack
        w={{ sm: '100%', md: '400px' }}
        direction={{ base: 'column' }}
        padding={4}
      >
        <Link onClick={onOpen}>
          <Image
            style={{ content: image }}
            onMouseEnter={() => setImage(informalPicture)}
            onMouseOut={() => setImage(formalPicture)}
            width={200}
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
                  style={{ content: image }}
                  width={200}
                  src={formalPicture}
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
              <Text>{bio}</Text>
            </ModalBody>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Coach
