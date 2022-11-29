import { CheckIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Text,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import {
  BsFillCalendarCheckFill,
  BsInstagram,
  BsPerson,
  BsTwitter,
} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

const color = '#CA4862'

const ContactFormWithSocialButtons = () => {
  const { hasCopied, onCopy } = useClipboard('saltubolic@protonmail.com')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  )

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { name, email, content }
      await fetch('/api/post/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setState('success')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Flex align="center" justify="center" id="contact">
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
            >
              Ask Us Anything!
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: '#CA4862',
                      color: useColorModeValue('#FFFAFA', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://twitter.com/saltubolic'">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: '#CA4862',
                      color: useColorModeValue('#FFFAFA', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.instagram.com/saltubolic/">
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    icon={<BsInstagram size="28px" />}
                    _hover={{
                      bg: '#CA4862',
                      color: useColorModeValue('#FFFAFA', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.tiktok.com/@saltubolic">
                  <IconButton
                    aria-label="tiktok"
                    variant="ghost"
                    size="lg"
                    icon={<FaTiktok size="28px" />}
                    _hover={{
                      bg: '#CA4862',
                      color: useColorModeValue('#FFFAFA', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('#FFFAFA', 'gray.700')}
                borderRadius="lg"
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
              >
                <VStack spacing={5} as={'form'} onSubmit={submitData}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        disabled={state !== 'initial'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setName(e.target.value)
                        }
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        disabled={state !== 'initial'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      value={content}
                      disabled={state !== 'initial'}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setContent(e.target.value)
                      }
                    />
                  </FormControl>

                  <Button
                    bg="#CA4862"
                    color="#FFFAFA"
                    _hover={{
                      bg: '#f16764',
                    }}
                    isFullWidth
                    isLoading={state === 'submitting'}
                    w="100%"
                    type={state === 'success' ? 'button' : 'submit'}
                  >
                    {state === 'success' ? <CheckIcon /> : 'Submit'}
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default ContactFormWithSocialButtons
