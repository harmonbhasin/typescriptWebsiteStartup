import { Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import Coach, { CoachProps } from '../components/coaches/coach'
import Client, { ClientProps } from '../components/coaches/client'
import CoachesLayout from '../components/layout/contactLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Handsome } from '../style/colors'

const coachInfo: Array<CoachProps> = [
  {
    formalPicture: 'url("/coaches/formalNoah.PNG")',
    informalPicture: 'url("/coaches/informalNoah.png")',
    name: 'Noah Levitt',
    title: 'Injury Specialist',
    bio: 'Partner Noah was born and raised in the suburbs of Minneapolis. He played many sports in highschool including baseball, basketball, and ultimate frisbee. As much as Noah loved sports he was always drawn to promoting health and used weightlifting and variuos activies to do so. His father being a chiropractor introduced Noah to the health and recovery field and has been mentoring him ever since. Noah is now a kinesiology major at the University of Wisconsin-Madison and is looking to transfer to a chiropractic college next year to earn his doctorate. He has been in and out of physical therapy, worked for his father and vouluteered at a sports medicine clinic on campus to gain his expertise. His only goal is to help people live happy, healthy, and pain-free lives to which is something he believes this company can accomplish.',
    linkedin: 'https://www.linkedin.com/in/noah-levitt-178262182/',
  },
  {
    formalPicture: 'url("/coaches/formalHarmon.png")',
    informalPicture: 'url("/coaches/informalHarmon.png")',
    name: 'Harmon Bhasin',
    title: 'Bodybuilding Specialist',
    bio: "Co-Founder Harmon grew up in the northwest suburbs of Chicago, and was always a very skinny kid. Throughout his life he pivoted between many sports, from wrestling to soccer, however when he started weight-lifting in sophomore year of highschool, he instantly fell in love. Initially, Harmon maxed out almost every other week, over time however, he read more about literature and learned from acredited sources online. He also accidentally picked up an eating disorder on his way to his dream physique, however overtime he was able to fix it. Harmon's main focus has been bodybuilding since day one and he's tried a variety of programs for a prolonged period of time. He hopes to help clients reach their dream physiques without having to deal with any of the adversities that he had to go through.",
    linkedin: 'https://www.linkedin.com/in/harmonbhasin/',
  } /*
  {
    formalPicture: 'url("/coaches/formalMichael.png")',
    informalPicture: 'url("/coaches/informalMichael.png")',
    name: 'Michael Roytman',
    title: 'Powerlifting Specialist',
    bio: "Co-Founder Michael was born, raised, nurtured in Moscow, Russia, but moved with his family to the northwest suburbs of Chicago. Growing up a chubbier kid, he always wanted to attain a movie-esque physique, but he just didn't know how to. His involvement in high school sports of water polo and swimming inspired him to live a healthier lifestyle suited for a better athletic performance, as well as a better physique. By aggregating different training disciplines and periodization methods, he excels in product design and management for Saltubolic Coaching Services. Michael is not afraid to experiment, and will do anything for science. Although he started off with a focus in powerlifting, he has shifted his training more towards functional training and loves gaining strength in movements that directly carry over to real life scenarios.",
    linkedin: 'https://www.linkedin.com/in/michael-roytman-193429204/',
  },*/,
]

const clientInfo: Array<ClientProps> = [
  {
    picture: '/clients/damian.jpeg',
    name: 'Damian Sanchez',
    title: 'Mine Operations Engineer',
    linkedin: 'https://www.linkedin.com/in/damesanchez/',
  },
  {
    picture: '/clients/prajjwal.jpeg',
    name: 'Prajjwal Gandharv',
    title: 'University of Wisconsin-Madison',
    linkedin: 'https://www.linkedin.com/in/prajjwal-gandharv-3a57701b5/',
  },
  {
    picture: '/clients/ethan.jpg',
    name: 'Ethan Yang',
    title: 'Unvieristy of Wisconsin-Madison',
    linkedin: 'https://www.linkedin.com/in/ethan-yang-65bb93202/',
  },
  {
    picture: '/clients/sophie.jpeg',
    name: 'Sophie Levine',
    title: 'University of Wisconsin-Madison',
    linkedin: 'https://www.linkedin.com/in/noah-levitt-178262182/',
  },
  {
    picture: '/clients/eeshaan.jpeg',
    name: 'Eeshaan Piriani',
    title: 'University of Wisconsin-Madison',
    linkedin: 'https://www.linkedin.com/in/~eeshaan/',
  },
  {
    picture: '/clients/anuj.jpeg',
    name: 'Anuj Amin',
    title: 'University of Wisconsin-Madison',
    linkedin: 'https://www.linkedin.com/in/anujamin01/',
  },
]

/**
 * This page is used to submit contact information and buy a program.
 */
const Coaches: NextPageWithLayout = () => (
  <Box color={Handsome.darkShade} background={Handsome.lightShade}>
    <Center flexDirection={'column'}>
      <Heading pt={5} size={'4xl'}>
        Our coaches
      </Heading>
      <Text py={10} mx={{ base: 10, md: 0 }}>
        We may be small, but we pack a punch and have a good time while doing
        it.
      </Text>
      <Divider
        width={{ base: '200px', md: '500px' }}
        borderWidth={'2px'}
        borderColor={Handsome.darkAccent}
      />
    </Center>
    <Flex
      flexDir={'row'}
      wrap={'wrap'}
      justifyContent={'space-evenly'}
      margin={10}
      pb={5}
    >
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
      <Heading pt={5} size={'4xl'}>
        Our Clients
      </Heading>
      <Text py={10} mx={{ base: 10, md: 0 }}>
        We help people who already have busy lives, live better lives.
      </Text>
    </Center>
    <Flex flexDir={'row'} justify={'center'} align={'center'} wrap={'wrap'}>
      {clientInfo.map(({ picture, name, title, linkedin }) => (
        <Client
          picture={picture}
          name={name}
          title={title}
          linkedin={linkedin}
        />
      ))}
    </Flex>
  </Box>
)

Coaches.getLayout = (page: ReactElement) => {
  return <CoachesLayout>{page}</CoachesLayout>
}

//  const Coaches: NextPageWithLayout = () => {
//    return <p>hi</p>
//  }

export default Coaches
