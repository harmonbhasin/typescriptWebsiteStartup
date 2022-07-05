import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'

interface ColorsProps {
  background: string
  color: string
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
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
      _hover={{
        bg: '#99AA38',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box bg={'#14591D'} color={'white'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2022 Saltubolic LLC. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/saltubolic/'}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/saltubolic'}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'Tik Tok'}
            href={'https://www.tiktok.com/@saltubolic'}
          >
            <FaTiktok />
          </SocialButton>
          <SocialButton
            label={'Youtube'}
            href={'https://www.youtube.com/channel/UC3Ihkq4KsC3wFzQtZ_dze3g'}
          >
            <FaYoutube />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
