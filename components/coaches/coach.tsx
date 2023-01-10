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
import { Handsome } from '../../style/colors'

export interface CoachProps {
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
        align={{ base: 'center' }}
      >
        <Link onClick={onOpen}>
          <Image
            style={{ content: image }}
            onMouseEnter={() => setImage(informalPicture)}
            onMouseOut={() => setImage(formalPicture)}
            width={300}
            height={300}
            background={Handsome.mainColor}
            _hover={{ background: Handsome.mainColor }}
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
        <ModalContent
          maxH="1000px"
          maxW="1000px"
          p={10}
          background={Handsome.lightShade}
        >
          <ModalCloseButton />
          <Stack
            flexDir={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'flex-start' }}
          >
            <Stack>
              <Box flex={1} bgColor={''}>
                <Image
                  style={{ content: image }}
                  width={300}
                  height={300}
                  src={formalPicture}
                  bg={Handsome.mainColor}
                />
              </Box>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
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
                    color={Handsome.mainColor}
                    bg={Handsome.lightShade}
                    _hover={{
                      color: Handsome.lightShade,
                      bg: Handsome.mainColor,
                    }}
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
