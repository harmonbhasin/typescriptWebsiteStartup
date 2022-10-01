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

export type questionProps = {
  question: string
  answer: string
}

const questions: questionProps[] = [
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
      'What is the difference between Plus and Pro when it comes to diet?',
    answer:
      "With Plus, we will help you by informing you with basic diet information, and simple things you can do to reach your goals. With Pro, we will hand tailor a diet for you that meets your goals inside and outside of the gym. We'll make sure that you're able to enjoy food with your friends and family while still hitting your goals. Pro is recommended to someone who has a target they want to hit by a specifc date or if they just want to achieve their health goals much quicker.",
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
    <Box color={'#FFFAFA'} bg={'#8FdEb4'} p={{ base: '50px', md: '100px' }}>
      <Flex direction="column">
        <Flex direction={{ base: 'column-reverse', md: 'row' }}>
          <Flex direction="column" justify={'space-between'}>
            <Text
              as="b"
              fontSize={{ base: '3xl', md: '6xl' }}
              mb={{ base: '3' }}
            >
              Students of all ages see accelerated changes in their body with
              Saltubolic.
            </Text>
            <Text fontSize={{ base: 'lg', md: '3xl' }}>
              Choose a plan that fits in your budget. You'll see results no
              matter what plan you choose.
            </Text>
          </Flex>
          <Flex direction="column" shrink={0}>
            <Image
              borderRadius="full"
              boxSize={{ base: '0px', md: '350px' }}
              src="/posing.jpeg"
            />
          </Flex>
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
          <Accordion mb={'50px'} allowToggle>
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
