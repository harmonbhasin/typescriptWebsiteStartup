import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface NavLinkProps {
  title: string
  loc: string
  hoverSettings: any
}

interface NavBarColorProps {
  main: string
  textColor: string
  hoverColor: string
}

const mainLinks = [
  { title: 'Home', loc: '/' },
  { title: 'About', loc: '/about' },
  { title: 'Services', loc: '/services' },
  { title: 'Blog', loc: '/blog' },
  { title: 'Contact', loc: '/contact' },
  { title: 'Pricing', loc: '/pricing' },
]

const NavLink = ({ title, loc, hoverSettings }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    // Need to change this color for duplicate
    _hover={hoverSettings}
    href={loc}
  >
    <Text as="b" fontSize="xl">
      {title}
    </Text>
  </Link>
)

const NavBar = ({ main, textColor, hoverColor }: NavBarColorProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={main} color={textColor} px={7}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            color={'black'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text as="b" fontSize="2xl">
            Saltubolic
          </Text>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {mainLinks.map((link) => (
                <NavLink
                  title={link.title}
                  loc={link.loc}
                  hoverSettings={{ textDecoration: 'none', color: hoverColor }}
                />
              ))}
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {mainLinks.map((link) => (
                <NavLink
                  title={link.title}
                  loc={link.loc}
                  hoverSettings={{ textDecoration: 'none', color: hoverColor }}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default NavBar
