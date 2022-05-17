import { ReactNode } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface NavLinkProps {
  title: string
  loc: string
}

const Links = [
  { title: 'Home', loc: '/' },
  { title: 'About', loc: '/about' },
  { title: 'Services', loc: '/services' },
  { title: 'Blog', loc: '/blog' },
  { title: 'Contact', loc: '/contact' },
]

const NavLink = ({ title, loc }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#99AA38',
    }}
    href={loc}
  >
    {title}
  </Link>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={'#14591D'} color={'white'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            color={'black'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Text>Saltubolic Coaching Services</Text>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink title={link.title} loc={link.loc} />
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink title={link.title} loc={link.loc} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}