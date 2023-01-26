import {
  Text,
  Flex,
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react'
import Products from '../components/pricing/listProducts'
import PricingLayout from '../components/layout/pricingLayout'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Handsome } from '../style/colors'
import Head from 'next/head'

export type questionProps = {
  question: string
  answer: string
}

const questions: Array<questionProps> = [
  {
    question: 'Why choose Saltubolic over other fitness influencers programs?',
    answer:
      "A lot of fitness influencers don't know what they're talking about and have gotten where they are due to good genetics. We provide custom programs unlike influencers you find online who only sell cookie-cutter programs. We've both spent 5+ years learning how to lift, and currently compete in the sport of powerlifting which requires proper knowledge of training to do well in. On top of this we have our own coach who helps us continue to learn more over time.",
  },
  {
    question: 'Do you train men and women differently?',
    answer:
      "A huge misconception among the general population is that men and women should train differently, but the reality of it is that they should't. The same exercises that build men muscle will build women muscle and vice versa. If clients have a specific bodypart that they would like to get bigger then we can increase the amount of work they do for that bodypart, but we believe, and the sports-science community, that everyone should train their whole body.",
  },
  {
    question:
      'What is the difference between the Optimize and Premium plan when it comes to diet?',
    answer:
      "The optimize plan is really focused on the training part of health and fitness. We provide brief diet advice such as macronutrients ratios and foods that are good for health, but we don't do more than that. In the premium plan we will help you track everything as closely as you want, and really look into your diet. We'll do our best to optimize your diet based on activity, time, and other health metrics. If you have a goal weight that you want to hit, and it is reasonable, the Premium plan will get you to that goal the fastest.",
  },
  {
    question: 'How soon will I see results?',
    answer:
      "It all depends on how much previous experience you have. If you are new to lifting you will see results in as little as a week. If you've been lifting for a while it may take up to 3 weeks.",
  },
  {
    question: 'Can I change my plan later?',
    answer:
      "Yes, you can upgrade or downgrade at any time. If you choose to upgrade, you'll pay a pro-rated amount for the rest of the month. If you choose to downgrade, you'll be credited on next month's bill.",
  },
  {
    question: 'What if I decide to cancel?',
    answer:
      "If you no longer wish to use Saltubolic, you may cancel at any time. You'll get to keep any programs you've recieved as well as any materials we've provided you with.",
  },
  {
    question: 'What if I have more questions?',
    answer:
      "For general information regarding products, contact us by visitng the Contact page on the website. If you're already a client feel free to text any of us. ",
  },
]

const Pricing: NextPageWithLayout = () => {
  return (
    <Box
      color={Handsome.lightShade}
      bg={Handsome.darkShade}
      p={{ base: '50px', md: '100px' }}
    >
      <Flex direction="column">
        <Flex direction="column" align={'center'}>
          <Text as="b" fontSize={{ base: '3xl', md: '6xl' }} mb={{ base: '3' }}>
            See What All The Hypes About!
          </Text>
          <Text fontSize={{ base: 'lg', md: '3xl' }}>
            Choose a plan that fits in your budget. You'll see results no matter
            what plan you choose.
          </Text>
        </Flex>
        <Box height={{ base: '50px', md: '100px' }} />
        <Products />
        <Divider mt={{ base: '100px', md: '100px' }} />
        <Box
          display="flex"
          alignItems={'center'}
          flexDirection={'column'}
          color={'#FFFAFA'}
          borderRadius={'xl'}
        >
          <Text as="b" fontSize={{ base: '4xl', md: '5xl' }} m={10}>
            Common Questions
          </Text>
          <Accordion
            mb={'50px'}
            w={{ base: '300px', md: '600px', lg: '900px' }}
            allowToggle
          >
            {questions.map((question: questionProps) => (
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" as="b" fontSize={{ md: 'xl' }}>
                    {question.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={{ md: 'lg' }}>
                  {question.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  )
}

Pricing.getLayout = (page: ReactElement) => {
  return <PricingLayout>{page}</PricingLayout>
}

export default Pricing
