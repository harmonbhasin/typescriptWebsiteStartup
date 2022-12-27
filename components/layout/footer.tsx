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
import React, { ReactNode, useState, ChangeEvent, ReactElement } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import Script from 'next/script'
import { Handsome } from '../../style/colors'
import { IconType } from 'react-icons'

interface FooterProps {
  mainColor: string
  mainColorContrast: string
  textColor: string
  isWhite: boolean
}

interface SocialButtonProps {
  children: ReactNode
  label: string
  href: string
  hoverSettings: any
}

interface Social {
  label: string
  href: string
  icon: ReactElement<IconType>
}
interface Link {
  title: string
  loc: string
}

const companyLinks: Array<Link> = [
  { title: 'About', loc: '/about' },
  { title: 'Coaches', loc: '/coaches' },
  /*{ title: 'Blog', loc: '/blog' },*/
  { title: 'Services', loc: '/services' },
  { title: 'Pricing', loc: '/pricing' },
  { title: 'Merch', loc: '/merch' },
]

const supportLinks: Array<Link> = [
  { title: 'Contact', loc: '/contact' },
  {
    title: 'Terms and Conditions',
    loc: '/terms-and-conditions',
  },
  {
    title: 'Disclaimer',
    loc: '/disclaimer',
  },
  {
    title: 'Privacy Policy',
    loc: '/privacy-policy',
  },
  {
    title: 'Cookie Policy',
    loc: '/cookies',
  },
]

const socialMedia: Array<Social> = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/saltubolic/',
    icon: <FaInstagram />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/saltubolic',
    icon: <FaTwitter />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@saltu_bolic',
    icon: <FaTiktok />,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/UC3Ihkq4KsC3wFzQtZ_dze3g',
    icon: <FaYoutube />,
  },
]

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

const Footer = ({
  mainColor,
  mainColorContrast,
  textColor,
  isWhite,
}: FooterProps) => {
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
    <Box bg={mainColor} color={textColor}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={isWhite ? '/Logo.png' : '/whiteLogo.png'} w="250px" />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Saltubolic LLC. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              {socialMedia.map(({ label, href, icon }: Social) => (
                <SocialButton
                  label={label}
                  href={href}
                  hoverSettings={{ bg: mainColorContrast }}
                >
                  {icon}
                </SocialButton>
              ))}
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
                  _placeholder={{ opacity: 1, color: 'textColor' }}
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
                  bg={textColor}
                  color={mainColor}
                  _hover={{
                    bg: mainColorContrast,
                    color: textColor,
                  }}
                  aria-label="Subscribe"
                  isLoading={state === 'submitting'}
                  type={state === 'success' ? 'button' : 'submit'}
                  icon={<BiMailSend />}
                />
              </FormControl>
            </Stack>
            {/* <Script>

            </Script>
            <Button
              className="termly-cookie-preference-button"
              __css={{"background: white; width: 165px; height: 30px; border-radius: 3px; border: 1px solid #5f7d9c; font-family: Roboto, Arial; font-size: 10px; color: #5f7d9c; font-weight: 600; box-sizing: border-box; cursor: pointer; padding: 0; outline: none;"}}
              onClick={displayPreferenceModal()}
            >
              Manage Cookie Preferences
                </Button>*/}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
