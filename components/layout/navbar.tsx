import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

interface NavItem {
  label: string
  sublabel?: string
  href?: string
  children?: Array<NavItem>
}
interface NavBarProps {
  mainColor: string
  textColor: string
  subnavColor: string
  subtitleColor: string

  isWhite?: boolean
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Shop',
    children: [
      {
        label: 'Pricing',
        sublabel: 'Look at our different plans',
        href: '/pricing',
      },
      {
        label: 'Merchandise',
        sublabel: 'Limited-edition clothing',
        href: '/merch',
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'Services',
        sublabel: 'Learn how we can assist you',
        href: '/services',
      },
      {
        label: 'Our Story',
        sublabel: 'Why we started Saltubolic',
        href: '/about',
      },
      {
        label: 'Our Team',
        sublabel: 'Meet the people behind Saltubolic',
        href: '/coaches',
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Contact Us',
        sublabel: 'Ask us any questions',
        href: '/contact',
      },
    ],
  },
]

export default function WithSubnavigation({
  mainColor,
  textColor,
  subnavColor,
  subtitleColor,
  isWhite,
}: NavBarProps) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box bg={mainColor} color={textColor} w={'100%'}>
      <Flex minH={'80px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/">
            <Image src={isWhite ? '/Logo.png' : '/whiteLogo.png'} h="25px" />
          </Link>
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav
            mainColor={mainColor}
            textColor={textColor}
            subnavColor={subnavColor}
            subtitleColor={subtitleColor}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({
  mainColor,
  textColor,
  subnavColor,
  subtitleColor,
}: NavBarProps) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'2xl'}
                fontWeight={'extrabold'}
                _hover={{ textDecoration: false }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={textColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      mainColor={mainColor}
                      textColor={textColor}
                      subnavColor={subnavColor}
                      subtitleColor={subtitleColor}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({
  label,
  href,
  sublabel,
  mainColor,
  textColor,
  subnavColor,
  subtitleColor,
}: NavItem & NavBarProps) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: mainColor }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            color={subnavColor}
            transition={'all .3s ease'}
            _groupHover={{ color: textColor }}
            fontWeight={'semibold'}
          >
            {label}
          </Text>
          <Text
            fontSize={'sm'}
            color={subtitleColor}
            _groupHover={{ color: textColor }}
          >
            {sublabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={textColor} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'#FFFFE'}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
