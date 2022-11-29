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

interface DesktopNavLinkProps {
  hoverSettings: any
  hoverColor: string
  subtxtColor: string
  subnavColor: string
}

interface MobileNavLinkProps {
  hoverColor: string
}

interface NavBarColorProps {
  main: string
  textColor: string
  hoverColor: string
  subnavColor: string
  subtxtColor: string
  isWhite: boolean
}

export default function WithSubnavigation({
  main,
  textColor,
  hoverColor,
  subnavColor,
  subtxtColor,
  isWhite,
}: NavBarColorProps) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box bg={main} color={textColor} w={'100%'}>
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
            hoverSettings={{ textDecoration: 'none', color: hoverColor }}
            hoverColor={hoverColor}
            subnavColor={subnavColor}
            subtxtColor={subtxtColor}
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
  hoverSettings,
  hoverColor,
  subnavColor,
  subtxtColor,
}: DesktopNavLinkProps) => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'xl'}
                fontWeight={500}
                _hover={hoverSettings}
                as="b"
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      hoverColor={hoverColor}
                      subtxtColor={subtxtColor}
                      subnavColor={subnavColor}
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
  subLabel,
  hoverColor,
  subnavColor,
  subtxtColor,
}: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            color={subnavColor}
            transition={'all .3s ease'}
            _groupHover={{ color: hoverColor }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'} color={subtxtColor}>
            {subLabel}
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
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
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
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  hoverColor?: string
  subtxtColor?: string
  subnavColor?: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Shop',
    children: [
      {
        label: 'Pricing',
        subLabel: 'Look at our different plans',
        href: '/pricing',
      },
      {
        label: 'Merchandise',
        subLabel: 'Limited-edition clothing',
        href: '/merch',
      },
    ],
  },
  {
    label: 'About',
    children: [
      {
        label: 'Services',
        subLabel: 'Learn how we can assist you',
        href: '/services',
      },
      {
        label: 'Our Story',
        subLabel: 'Why we started Saltubolic',
        href: '/about',
      },
      /*{
        label: 'Coaches',
        subLabel: 'Find coaches that suit your needs',
        href: '/coaches',
      },*/
    ],
  },
  {
    label: 'Resources',
    children: [
      /*{
        label: 'Blog',
        subLabel: 'Get professional insights on fitness',
        href: '/blog',
      },*/
      {
        label: 'Contact Us',
        subLabel: 'Ask us any questions',
        href: '/contact',
      },
    ],
  },
]
