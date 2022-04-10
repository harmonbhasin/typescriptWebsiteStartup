import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
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

export default function SmallWithLogoLeft() {
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
        <Text>SCS</Text>
        <Text>© 2022 Saltubolic Coaching Services. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
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
            label={'Instagram'}
            href={'https://www.instagram.com/saltubolic/'}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
