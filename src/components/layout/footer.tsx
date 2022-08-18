import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  FormControl,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'
import React, { ReactNode, useState, ChangeEvent } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

interface FooterColorProps {
  main: string
  hoverColor: string
  submitColor: any
}

interface SocialButtonProps {
  children: ReactNode
  label: string
  href: string
  hoverSettings: any
}

const SocialButton = ({
  children,
  label,
  href,
  hoverSettings,
}: SocialButtonProps) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={hoverSettings}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const companyLinks = [
  { title: 'About', loc: '/about' },
  { title: 'Blog', loc: '/blog' },
  { title: 'Services', loc: '/services' },
  { title: 'Pricing', loc: '/pricing' },
]

const supportLinks = [
  { title: 'Contact', loc: '/contact' },
  { title: 'Terms of Service', loc: '/' },
  { title: 'Legal', loc: '/' },
  { title: 'Privacy Policy', loc: '/' },
]

const Footer = ({ main, hoverColor, submitColor }: FooterColorProps) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  )

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { email }
      await fetch('/api/post/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await fetch('/api/post/notionNews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setState('success')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box bg={main} color={'#FFFAFA'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src="/whiteLogo.png" w="250px" />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Saltubolic LLC. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Instagram'}
                href={'https://www.instagram.com/saltubolic/'}
                hoverSettings={{ bg: hoverColor }}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/saltubolic'}
                hoverSettings={{ bg: hoverColor }}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'Tik Tok'}
                href={'https://www.tiktok.com/@saltubolic'}
                hoverSettings={{ bg: hoverColor }}
              >
                <FaTiktok />
              </SocialButton>
              <SocialButton
                label={'Youtube'}
                href={
                  'https://www.youtube.com/channel/UC3Ihkq4KsC3wFzQtZ_dze3g'
                }
                hoverSettings={{ bg: hoverColor }}
              >
                <FaYoutube />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            {companyLinks.map((link) => (
              <Link href={link.loc}>{link.title}</Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {supportLinks.map((link) => (
              <Link href={link.loc}>{link.title}</Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Sign Up For Our Newsletter</ListHeader>
            <Stack direction={'row'} as={'form'} onSubmit={submitData}>
              <FormControl>
                <Input
                  placeholder={'Your email address'}
                  bg={'blackAlpha.100'}
                  _placeholder={{ opacity: 1, color: '#FFFAFA' }}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                  id={'email'}
                  type={'email'}
                  required
                  value={email}
                  disabled={state !== 'initial'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </FormControl>
              <FormControl w={{ base: '100%', md: '40%' }}>
                <IconButton
                  bg={hoverColor}
                  color={'#FFFAFA'}
                  _hover={submitColor}
                  aria-label="Subscribe"
                  isLoading={state === 'submitting'}
                  type={state === 'success' ? 'button' : 'submit'}
                  icon={<BiMailSend />}
                />
              </FormControl>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
