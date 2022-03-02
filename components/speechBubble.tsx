import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
                Using their programs are really easy, and takes a lot of the
                confusing work out of working out. I'm a busy person, and their
                programs helps me save time. Everything they do is science-based
                so I know I'm getting reliable information.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/Sophie.jpg'}
              name={'Sophie Levine'}
              title={'Student at University of Wisconsin-Madison'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Communicaton</TestimonialHeading>
              <TestimonialText>
                Anytime I have any questions I can text either coach, and I'm
                guaranteed to get a response within the hour, if not sooner. I
                also love how they've built a community where I feel like I have
                other people to workout with.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/Carlene.jpg'}
              name={'Carlene Neuville'}
              title={'Student at University of Wisconsin-Madison'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                After talking to different people, I was confused about what I
                should be doing. After signing up for their service, it has been
                made clear what is actually true and what was just industry
                trash.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={'/Attie.jpg'}
              name={'Arthur Stanson'}
              title={'Student at Harper Community College'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}
