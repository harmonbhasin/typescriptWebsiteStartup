import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Avatar, chakra, Flex, useColorModeValue } from '@chakra-ui/react'
import { Handsome } from '../../style/colors'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
}

const testimonials = [
  {
    name: 'Sophie L.',
    role: 'Student (University of Wisconsin-Madison)',
    content:
      "I started using the Saltubolic coaching program a few months ago and it has completely changed my fitness journey. Harmon and Michael worked with me to make a customized program that aligns with my physique goals and fits within my busy schedule as a student. Not only have they created the perfect plan for me inside the gym, but they have given me the tools to make conscious decisions about my diet so that what I'm eating reflects my goals. I would highly recommend Saltubolic, and the results speak for themselves. ",
    avatar: '/clients/sophie.jpeg',
  },
  {
    name: 'Pranay P.',
    role: 'Student (Union College)',
    content:
      "Even though I'm not living in the same area as Harmon or Michael, it still feels like they're here with me. Whenever I send them a text I get a response within a timely fashion. It's amazing how much I was able to do given that this is online coaching. Don't understimate what you can do when you have a goal and some guidance. Harmon and Michael provide that guidance and help you learn throughout the process so that you're not just blindly following advice. I wish I had started working with them sooner!",
    avatar: '/clients/pranay.jpeg',
  },
  {
    name: 'Adison K.',
    role: 'Student (University of Wisconsin-Madison)',
    content:
      "I was honestly impressed with how much Harmon and Michael knew. I tried my universities local personal trainers, but it seems they didn't really know what they were doing. What's really helpful is that Harmon and Michael are also students so they understand the struggles that come with establishing a routine while balancing classes. They really flexible with how they program and will help you make the most of your time at the gym. They believe less is more, and I love how this is able to integrate into my schedule.",
    avatar: '/clients/adison.jpg',
  },
  {
    name: 'Jack D.',
    role: 'Student (Iowa State University)',
    content:
      "My life just feels so much better with a workout routine, especially since there is constantly so much going on. I feel that it benefits me both physically and mentally. Their Saltubot really does help me keep on track with my goals, and their use of text messages suprising works. I've recommended their coaching services to everyone I know. Given how affordable it is, practically anyone can get started. Not only do you get a coach, but also a friend whose looking out for your best interests. Kudos to Harmon and Michael.",
    avatar: '/clients/jack.jpeg',
  },
]

//https://stackoverflow.com/questions/68440509/how-to-center-image-in-react-multi-carousel
const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
}: TestimonialCardProps) => {
  return (
    <Flex
      boxShadow={'lg'}
      //width={'800px'}
      //height={'400px'}
      maxW={{ base: '300px', md: '800px', lg: '900px' }}
      maxH={{ base: '500px', md: '400px', lg: '400px' }}
      direction={{ base: 'column-reverse', md: 'row', lg: 'row' }}
      rounded={'xl'}
      p={10}
      bg={Handsome.lightShade}
      color={Handsome.darkShade}
      mr={'auto'}
      ml={'auto'}
      mb={'3px'}
      justify={'center'}
    >
      <Flex
        direction={{ base: 'column', md: 'column', lg: 'column' }}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontWeight={'medium'}
          fontSize={{ base: '12.5px', md: '20px', lg: '20px' }}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p
          fontWeight={'bold'}
          fontSize={{ base: '10px', md: '15px', lg: '15px' }}
        >
          {name}
          <chakra.span fontWeight={'medium'}> - {role}</chakra.span>
        </chakra.p>
      </Flex>
      <Flex direction={{ base: 'column' }} pt={{ base: '20px', md: '0px' }}>
        <Avatar
          src={avatar}
          height={{ base: '75px', md: '150px', lg: '150px' }}
          width={{ base: '75px', md: '150px', lg: '150px' }}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
    </Flex>
  )
}

const tesCarousel = () => {
  return (
    <Carousel
      autoPlay
      axis={'horizontal'}
      interval={7000}
      transitionTime={2000}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop
    >
      {testimonials.map((cardInfo) => (
        <TestimonialCard {...cardInfo} />
      ))}
    </Carousel>
  )
}

export default tesCarousel
