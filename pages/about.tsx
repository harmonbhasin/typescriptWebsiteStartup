import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Container,
  Divider,
} from '@chakra-ui/react'
import Individual from '../components/about/biography'
import { IndividualProps } from '../components/about/biography'
import Traits from '../components/about/traits'
import AboutLayout from '../components/layout/aboutLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Handsome } from '../style/colors'

const IndivialList: Array<IndividualProps> = [
  {
    name: 'Harmon Bhasin',
    role: 'Founder',
    degree: 'B.S. (Computer Science & Economics)',
    linkedin: 'https://www.linkedin.com/in/harmonbhasin/',
    aboutOne:
      'Co-Founder Harmon grew up in the northwest suburbs of Chicago. He was always experimenting with different sports, and constantly had to be active. Although he may have not been the most talented athlete, he worked smarter and harder than others to give them a run for their money. Through trying to get better at soccer, he discovered weightlifting and instantly fell in love.',
    aboutTwo:
      'Just like another class in highschool, Harmon started studying weightlifting, nutrition, and longevity tediously. He tested concepts against himself regularly, and developed a knowledge base which he keeps regularly updated.',
    aboutThree:
      'Harmon used his passion in software development to design this website from scratch, as well as come up with logic for new products. He uses vast books and podcasts to make sure Saltubolic Coaching Services continutes to grow in novel ways.',
    img: '/harmon/bw_harmon.jpeg',
  },
  {
    name: 'Michael Roytman',
    role: 'Founder',
    degree: 'B.S. (Data Science & Economics)',
    linkedin: 'https://www.linkedin.com/in/michael-roytman-193429204/',
    aboutOne:
      "Co-Founder Michael was born, raised, nurtured in Moscow, Russia, but moved with his family to the northwest suburbs of Chicago. Growing up a chubbier kid, he always wanted to attain a movie-esque physique, but he just didn't know how to. His involvement in high school sports of water polo and swimming inspired him to live a healthier lifestyle suited for a better athletic performance, as well as a better physique.",
    aboutTwo:
      'Through trial and error, and a lot of research on bro-science, nutritional science, exercise science and philosophy, he was able to derive a healthy routine, and more importantly a maxim for a healthy life. On a leisurely basis, Michael enjoys applying consumer behavior and data trends/analytics in the fitness industry. ',
    aboutThree:
      'By aggregating different training disciplines and periodization methods, he excels in product design and management for Saltubolic Coaching Services. Michael is not afraid to experiment, and will do anything for science.',
    img: '/michael/bw_michael.jpeg',
  },
]

/**
 * This page tells the users about both the coaches, Harmon and Michael.
 */
const About: NextPageWithLayout = () => (
  <Box color={Handsome.darkShade} bg={Handsome.lightShade}>
    <Flex direction={'column'} p={10} align={'center'}>
      <Text
        as="b"
        fontSize={{ base: '3xl', md: '5xl' }}
        mb={{ base: '30px', md: '50px' }}
      >
        Our Mission
      </Text>
      <Text as="b" fontSize={{ base: '4xl', md: '6xl' }} px={{ md: '400px' }}>
        To provide college students with the stepping stones they need to live a
        healthly lifestyle.
      </Text>
    </Flex>
    <Box bg={Handsome.mainColor} color="#FFFAFA">
      <Traits />
    </Box>
    <Flex p={10} justify={'space-evenly'} direction={'column'}>
      <Text
        as="b"
        fontSize={{ base: '6xl', md: '6xl' }}
        mb={{ base: '40px', md: '40px' }}
      >
        College Oriented.
      </Text>
      <Text
        as="b"
        fontSize={{ base: '3xl', md: '3xl' }}
        mb={{ base: '40px', md: '30px' }}
      >
        We crafted a system that works perfectly for the high-performing college
        student who doesn't want fitness to detract from their professional, or
        social lives.
      </Text>
      <Text
        fontSize={{ base: 'xl', md: 'xl' }}
        mb={{ base: '40px', md: '30px' }}
      >
        We're college students who want to have it all, and hope to pass that
        mindset on to you too! Our program will fit around your schedule, and we
        can even adjust the timing of your workouts so that you can maximize
        your work output. On weeks that may be more demanding of your time,
        we'll adjust your program to help you control your stress when it seems
        like everything is going to explode. Practically everything in your
        program can be adjusted for your current wellbeing, and we want to teach
        you what to look for so that you can begin auto-adjusting. You may come
        in as a novice-intermediate lifter, but you will leave an expert.
      </Text>
      <Text fontSize={{ base: 'xl', md: 'xl' }}>
        When you put your 100% into this program, and we know you will, your
        body will transform in ways you could have never imagined. Thats what
        happens when your coached by people who actually understand what life is
        like as a college student.
      </Text>
    </Flex>
    <Box bg={Handsome.darkShade} color={Handsome.lightShade}>
      <Heading as="h1" p={20} size="4xl">
        Our Team
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 8 }}
        px={8}
      >
        {IndivialList.map(
          ({
            name,
            role,
            degree,
            aboutOne,
            aboutThree,
            aboutTwo,
            linkedin,
            img,
          }: IndividualProps) => (
            <Individual
              name={name}
              degree={degree}
              role={role}
              aboutOne={aboutOne}
              aboutTwo={aboutTwo}
              aboutThree={aboutThree}
              linkedin={linkedin}
              img={img}
            />
          )
        )}
      </SimpleGrid>
    </Box>
  </Box>
)

About.getLayout = (page: ReactElement) => {
  return <AboutLayout>{page}</AboutLayout>
}

export default About
