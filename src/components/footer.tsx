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

const Logo = (props: any) => {
  return <Image height={32} viewBox="0 0 120 28" src={'/Logo.jpg'} {...props} />
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
        bg: '#f1b814',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallWithLogoLeft() {
  return (
    <Box bg={'#bd1e51'} color={'white'}>
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
