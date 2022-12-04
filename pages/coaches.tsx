import type { NextPage } from 'next'
import { Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import SubmitInfo from '../components/contact/contactForm'
import Coach from '../components/coaches/coach'
import CoachesLayout from '../components/layout/contactLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const coachInfo = [
  {
    formalPicture: 'url("/coaches/formalMichael.PNG")',
    informalPicture: 'url("/coaches/informalMichael.PNG")',
    name: 'Noah Levitt',
    title: 'Injury Specialist',
    bio: 'Partner Noah was born and raised in the suburbs of Minneapolis. He played many sports in highschool including baseball, basketball, and ultimate frisbee. As much as Noah loved sports he was always drawn to promoting health and used weightlifting and variuos activies to do so. His father being a chiropractor introduced Noah to the health and recovery feild and has been mentoring him ever since. Noah is now a kinesiology major at the University of Wisconsin-Madison and is looking to transfer to a chiropractic college next year to earn his doctorate. He has been in and out of physical therapy, worked for his father and vouluteered at a sports medicine clinic on campus to gain his expertise. His only goal is to help people live happy, healthy, and pain-free lives to which is something he believes this company can accomplish.',
    linkedin: 'https://www.linkedin.com/in/noah-levitt-178262182/',
  },
  {
    formalPicture: 'url("/coaches/formalMichael.PNG")',
    informalPicture: 'url("/coaches/informalMichael.PNG")',
    name: 'Harmon Bhasin',
    title: 'Bodybuilding Specialist',
    bio: 'Partner Noah was born and raised in the suburbs of Minneapolis. He played many sports in highschool including baseball, basketball, and ultimate frisbee. As much as Noah loved sports he was always drawn to promoting health and used weightlifting and variuos activies to do so. His father being a chiropractor introduced Noah to the health and recovery feild and has been mentoring him ever since. Noah is now a kinesiology major at the University of Wisconsin-Madison and is looking to transfer to a chiropractic college next year to earn his doctorate. He has been in and out of physical therapy, worked for his father and vouluteered at a sports medicine clinic on campus to gain his expertise. His only goal is to help people live happy, healthy, and pain-free lives to which is something he believes this company can accomplish.',
    linkedin: 'https://www.linkedin.com/in/harmonbhasin/',
  },

  {
    formalPicture: 'url("/coaches/formalMichael.PNG")',
    informalPicture: 'url("/coaches/informalMichael.PNG")',
    name: 'Michael Roytman',
    title: 'Powerlifting Specialist',
    bio: 'Partner Noah was born and raised in the suburbs of Minneapolis. He played many sports in highschool including baseball, basketball, and ultimate frisbee. As much as Noah loved sports he was always drawn to promoting health and used weightlifting and variuos activies to do so. His father being a chiropractor introduced Noah to the health and recovery feild and has been mentoring him ever since. Noah is now a kinesiology major at the University of Wisconsin-Madison and is looking to transfer to a chiropractic college next year to earn his doctorate. He has been in and out of physical therapy, worked for his father and vouluteered at a sports medicine clinic on campus to gain his expertise. His only goal is to help people live happy, healthy, and pain-free lives to which is something he believes this company can accomplish.',
    linkedin: 'https://www.linkedin.com/in/michael-roytman-193429204/',
  },
]

/**
 * This page is used to submit contact information and buy a program.
 */
const Coaches: NextPageWithLayout = () => (
  <Box color={'black'}>
    <Center flexDirection={'column'}>
      <Heading>Our coaches</Heading>
      <Text>
        We may be small, but we pack a punch and have a good time while doing
        it.
      </Text>
      <Divider width={'200px'} borderWidth={'2px'} borderColor={'black'} />
    </Center>
    <Flex flexDir={'row'} justifyContent={'center'} gap={10}>
      {coachInfo.map(
        ({ formalPicture, informalPicture, name, title, bio, linkedin }) => (
          <Coach
            formalPicture={formalPicture}
            informalPicture={informalPicture}
            name={name}
            title={title}
            bio={bio}
            linkedin={linkedin}
          />
        )
      )}
    </Flex>
    <Divider />
    <Center flexDirection={'column'}>
      <Heading>Our Clients</Heading>
      <Text>
        We help people who already have busy lives, live better lives.
      </Text>
    </Center>
    <Flex flexDir={'row'} justifyContent={'center'} gap={10}>
      {coachInfo.map(({ picture, name, title, bio, linkedin }) => (
        <Coach
          picture={picture}
          name={name}
          title={title}
          bio={bio}
          linkedin={linkedin}
        />
      ))}
    </Flex>
  </Box>
)

Coaches.getLayout = (page: ReactElement) => {
  return <CoachesLayout>{page}</CoachesLayout>
}

export default Coaches
