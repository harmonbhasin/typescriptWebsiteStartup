import { Center, Flex, Heading } from '@chakra-ui/react'
import ServicesLayout from '../components/layout/servicesLayout'
import Block from '../components/service/block'
import { BlockProps } from '../components/service/block'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Handsome } from '../style/colors'

const features: Array<BlockProps> = [
  {
    backgroundColor: Handsome.darkAccent,
    textColor: Handsome.lightShade,
    image: '/michael/michael0.jpg',
    direction: { base: 'column', md: 'row' },
    text: 'Within a day of signing up, you get access to a variety of programs that are shared with you through Google Sheets. Through texting with our coaches you can figure out what program is the best fit for you. This is where you can edit and update your schedule as well as see how your body has changed over time.',
    title: 'Program',
  },
  {
    backgroundColor: Handsome.lightShade,
    textColor: Handsome.mainColor,
    image: '/harmon/harmon2.jpg',
    direction: { base: 'column-reverse', md: 'row-reverse' },
    text: "You get access to both of our coaches through text messaging. This comes in handy when you want to change exercises or need help restructuring your schedule depending on how busy your week is. They'll work with you to make sure you get the best expereience. If you have any questions regarding exercise form, just send them a video, and they'll provide insight on how you can best perform that exercise.",
    title: 'Coaching',
  },
  {
    backgroundColor: Handsome.mainColor,
    textColor: Handsome.lightShade,
    image: '/product/saltubot.jpg',
    direction: { base: 'column', md: 'row' },
    text: "Using our A.I. powered technology, we use information from your workout program to send you texts, and then update your program based on those responses. The most basic version of this is sending daily weigh-in texts and asking about your schedule for that. This is our bread-and-butter and the longer you share this journey with us, the more features you'll be able to use from the A.I.",
    title: 'Saltubot',
  },
  {
    backgroundColor: Handsome.darkShade,
    textColor: Handsome.lightShade,
    image: '/clients/community.jpeg',
    direction: { base: 'column-reverse', md: 'row-reverse' },
    text: "Joining Saltubolic is like gaining a new family. You get to meet other members of the community who are highly-driven, just like you, and want to improve their overall quality of life. No matter what your goal is, whether it's to feel better or look better, you'll get that plus a lot more. Here at Saltubolic, we believe balance is everything, and we hope to be a tool along your journey in life in acheiving that balance.",
    title: 'Community',
  },
]

const Services: NextPageWithLayout = () => (
  <Flex direction="column" bg={Handsome.darkAccent}>
    <Center>
      <Heading color={Handsome.lightShade} size={'4xl'}>
        How It Works
      </Heading>
    </Center>
    {features.map(
      ({
        backgroundColor,
        textColor,
        image,
        direction,
        text,
        title,
      }: BlockProps) => (
        <Block
          backgroundColor={backgroundColor}
          textColor={textColor}
          image={image}
          direction={direction}
          text={text}
          title={title}
        />
      )
    )}
  </Flex>
)

Services.getLayout = (page: ReactElement) => {
  return <ServicesLayout>{page}</ServicesLayout>
}

export default Services
