import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Avatar, chakra, Flex, useColorModeValue } from '@chakra-ui/react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials = [
  {
    name: 'Sophie L.',
    role: 'Student at University of Wisconsin-Madison',
    content:
      "Using their programs are really easy, and takes a lot of the confusing work out of working out. I'm a busy person, and their programs helps me save time. Everything they do is science-based so I know I'm getting reliable information.",
    avatar: '/clients/Sophie.jpg',
  },
  {
    name: 'Carlene N.',
    role: 'Student at University of Wisconsin-Madison',
    content:
      "Anytime I have any questions I can text either coach, and I'm guaranteed to get a response within the hour, if not sooner. I also love how they've built a community where I feel like I have other people to workout with.",
    avatar: '/clients/Carlene.jpg',
  },
  {
    name: 'Arthur S.',
    role: 'Student at Harper College',
    content:
      'After talking to different people, I was confused about what I should be doing. After signing up for their service, it has been made clear what is actually true and what was just industry trash.',
    avatar: '/clients/Attie.jpg',
  },
  {
    name: 'Ethan Y.',
    role: 'Student at the University of Wisconsin-Madison',
    content:
      "I've been trying to gain weight for a while, but nothing I had done was successful. However after joining Saltubolic I've gained over 20 pounds and feel better than ever.",
    avatar: '/clients/Ethan.jpg',
  },
]

//https://stackoverflow.com/questions/68440509/how-to-center-image-in-react-multi-carousel
const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, role, content, avatar } = props
  return (
    <Flex
      boxShadow={'lg'}
      width={'800px'}
      height={'400px'}
      direction={'row'}
      rounded={'xl'}
      p={10}
      bg={useColorModeValue('white', 'gray.800')} // #FFFAFA
      mr={'auto'}
      ml={'auto'}
      justify={'center'}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p fontWeight={'medium'} fontSize={'25px'} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={'20px'}>
          {name}
          <chakra.span fontWeight={'medium'} color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'150px'}
        width={'150px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  )
}

const tesCarousel = () => {
  return (
    <Carousel
      autoPlay
      axis={'horizontal'}
      interval={2000}
      transitionTime={1000}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
    >
      {testimonials.map((cardInfo) => (
        <TestimonialCard {...cardInfo} />
      ))}
    </Carousel>
  )
}

export default tesCarousel
